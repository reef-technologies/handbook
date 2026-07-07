// Notion -> markdown exporter: crawls the page tree under a root page, maps
// blocks to mdast (see mapper.ts) and serializes with mdast-util-to-markdown,
// so all markdown escaping happens by construction. Handles CLI, crawling,
// layout, link resolution, image/file downloads and writing.
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { Client, isFullBlock, isFullPage, isNotionClientError } from '@notionhq/client';
import type { Root } from 'mdast';
import { gfmToMarkdown } from 'mdast-util-gfm';
import { mathToMarkdown } from 'mdast-util-math';
import { toMarkdown } from 'mdast-util-to-markdown';
import { blocksToMdast, type Block, type MapperContext } from './mapper';

const RETRIES = 3;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function withRetry<T>(fn: () => Promise<T>, retriable: (error: unknown) => boolean): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt >= RETRIES || !retriable(error)) throw error;
      await sleep(1000 * attempt);
    }
  }
}

const isTransientApiError = (error: unknown): boolean =>
  isNotionClientError(error) && 'status' in error && (error.status === 429 || error.status >= 500);

// ---------- Crawl ----------

interface Page {
  id: string;
  title: string;
  blocks: Block[];
  childPages: Page[];
}

// Fetch all children of a block, recursing into nested blocks (but not into
// child pages, which become documents of their own).
async function fetchBlocks(client: Client, blockId: string): Promise<Block[]> {
  const blocks: Block[] = [];
  let cursor: string | undefined;
  do {
    const response = await withRetry(
      () => client.blocks.children.list({ block_id: blockId, page_size: 100, start_cursor: cursor }),
      isTransientApiError,
    );
    for (const raw of response.results) {
      if (!isFullBlock(raw)) throw new Error(`Partial block response for ${raw.id}`);
      blocks.push({ ...raw, children: [] });
    }
    cursor = response.next_cursor ?? undefined;
  } while (cursor);
  for (const block of blocks) {
    if (block.has_children && block.type !== 'child_page') block.children = await fetchBlocks(client, block.id);
  }
  return blocks;
}

async function fetchPage(client: Client, id: string, title: string): Promise<Page> {
  const blocks = await fetchBlocks(client, id);
  const childPages: Page[] = [];
  for (const block of blocks) {
    if (block.type === 'child_page') childPages.push(await fetchPage(client, block.id, block.child_page.title));
  }
  return { id, title, blocks, childPages };
}

async function fetchRootTitle(client: Client, pageId: string): Promise<string> {
  const page = await withRetry(() => client.pages.retrieve({ page_id: pageId }), isTransientApiError);
  if (!isFullPage(page)) throw new Error(`Partial page response for ${pageId}`);
  for (const property of Object.values(page.properties)) {
    if (property.type === 'title') return property.title.map((run) => run.plain_text).join('');
  }
  throw new Error(`Page ${pageId} has no title property`);
}

// ---------- Layout ----------

const slug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const normalizeId = (id: string) => id.replaceAll('-', '');

interface PlacedPage {
  page: Page;
  file: string; // path relative to the output dir, '/'-separated
}

// The root page becomes README.md; a page with child pages becomes a directory
// with its own body in README.md; a leaf page becomes <parent>/<slug>.md.
function placePages(page: Page, parentDir: string, placed: Map<string, PlacedPage>, isRoot = false): void {
  let dir = parentDir;
  let file: string;
  if (isRoot) {
    file = 'README.md';
  } else {
    const name = slug(page.title);
    if (name === '') throw new Error(`Page "${page.title}" (${page.id}) produces an empty filename slug; retitle it in Notion`);
    if (page.childPages.length > 0) {
      dir = path.posix.join(parentDir, name);
      file = path.posix.join(dir, 'README.md');
    } else {
      file = path.posix.join(parentDir, `${name}.md`);
    }
  }
  for (const other of placed.values()) {
    if (other.file === file) {
      throw new Error(`Pages "${other.page.title}" and "${page.title}" both map to ${file}; retitle one in Notion`);
    }
  }
  placed.set(normalizeId(page.id), { page, file });
  for (const child of page.childPages) placePages(child, dir, placed);
}

// ---------- Link resolution ----------

// Hosts that serve Notion pages; links to any other host are external.
const NOTION_HOSTS = new Set(['notion.so', 'www.notion.so', 'app.notion.com']);
const HEX32_RE = /^[0-9a-f]{32}$/;

// The page-URL path shapes Notion is known to produce (the list lives in the
// README): the page id is the last path segment (`/<id>`, `/p/<id>`) or its
// suffix after the final dash (`/<Title>-<id>`, `/<workspace>/<Title>-<id>`).
function pageIdFromPathname(pathname: string): string | null {
  const last = pathname.split('/').pop() ?? '';
  const candidate = last.slice(last.lastIndexOf('-') + 1);
  return HEX32_RE.test(candidate) ? candidate : null;
}

const relativeTo = (fromFile: string, toFile: string): string =>
  path.posix.relative(path.posix.dirname(fromFile), toFile);

// ---------- Render ----------

interface Download {
  url: string;
  file: string; // relative to the output dir
}

function renderPage(placedPage: PlacedPage, placed: Map<string, PlacedPage>, downloads: Download[]): string {
  const { page, file } = placedPage;
  const pageSlug = slug(page.title);
  const counters = { images: 0, files: 0 };

  const scheduleDownload = (kind: 'images' | 'files', url: string): string => {
    const extension = path.posix.extname(new URL(url).pathname);
    const target = `${kind}/${pageSlug}-${++counters[kind]}${extension}`;
    downloads.push({ url, file: target });
    return relativeTo(file, target);
  };

  const ctx: MapperContext = {
    resolveUrl(url) {
      // In-workspace inline links arrive from the API as bare paths, not full URLs.
      const isBarePath = url.startsWith('/');
      let parsed: URL;
      try {
        parsed = isBarePath ? new URL(url, 'https://www.notion.so') : new URL(url);
      } catch {
        return url; // same-page #anchor and other non-URL values
      }
      if (!isBarePath && !NOTION_HOSTS.has(parsed.hostname)) return url; // external: verbatim
      const id = pageIdFromPathname(parsed.pathname);
      const target = id === null ? undefined : placed.get(id);
      if (target) return relativeTo(file, target.file) + parsed.hash;
      // A full Notion URL we cannot place stays verbatim: it opens in Notion
      // regardless of whether we understood its shape.
      if (!isBarePath) return url;
      // A bare path to an out-of-tree page would be a dead link in markdown.
      if (id !== null) return `https://www.notion.so/${id}${parsed.hash}`;
      // An in-workspace link whose shape we don't know is new Notion behavior;
      // passing it through would silently emit a dead link.
      throw new Error(`${page.title} (${file}): unrecognized in-workspace link: ${url}`);
    },
    resolvePage(pageId) {
      const target = placed.get(normalizeId(pageId));
      return target ? { path: relativeTo(file, target.file), title: target.page.title } : null;
    },
    saveImage: (url) => scheduleDownload('images', url),
    saveFile: (url) => scheduleDownload('files', url),
    warn: (message) => console.error(`warning: ${page.title}: ${message}`),
  };

  const tree: Root = { type: 'root', children: blocksToMdast(page.blocks, ctx) };
  return toMarkdown(tree, { extensions: [gfmToMarkdown(), mathToMarkdown()], bullet: '-', listItemIndent: 'one' });
}

// ---------- Downloads ----------

async function download(url: string, file: string): Promise<void> {
  const body = await withRetry(async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Download failed (HTTP ${response.status}) for ${file}`);
    return response.arrayBuffer();
  }, () => true);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, Buffer.from(body));
}

// ---------- CLI ----------

interface Args {
  rootPageId: string;
  outDir: string;
  force: boolean;
}

function parseArgs(argv: string[]): Args {
  const force = argv.includes('-f');
  const positional = argv.filter((arg) => arg !== '-f');
  const [rootPageId, outDir] = positional;
  if (!rootPageId || !outDir || positional.length !== 2) {
    console.error('usage: sync ROOT_PAGE_ID OUT_DIR [-f]');
    process.exit(2);
  }
  return { rootPageId, outDir, force };
}

async function assertWritable(outDir: string, force: boolean): Promise<void> {
  const entries = await readdir(outDir).catch(() => []);
  if (entries.length > 0 && !force) {
    console.error(`error: ${outDir} is not empty; pass -f to overwrite`);
    process.exit(1);
  }
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const token = process.env['NOTION_TOKEN'];
  if (!token) {
    console.error('error: NOTION_TOKEN is not set');
    process.exit(1);
  }
  await assertWritable(args.outDir, args.force);

  const client = new Client({ auth: token });
  const title = await fetchRootTitle(client, args.rootPageId);
  const root = await fetchPage(client, args.rootPageId, title);

  const placed = new Map<string, PlacedPage>();
  placePages(root, '', placed, true);

  const downloads: Download[] = [];
  for (const placedPage of placed.values()) {
    const markdown = renderPage(placedPage, placed, downloads);
    const file = path.join(args.outDir, placedPage.file);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, markdown);
  }
  for (const job of downloads) await download(job.url, path.join(args.outDir, job.file));

  const images = downloads.filter((job) => job.file.startsWith('images/')).length;
  console.log(`Exported ${placed.size} pages and ${images} images to ${args.outDir}`);
}

await main();
