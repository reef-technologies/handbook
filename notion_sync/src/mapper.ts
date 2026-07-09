// Notion -> mdast mapping. This file is the single place that decides how each
// Notion block type and rich-text run renders to markdown; everything else
// (crawling, layout, link resolution, downloads, IO) lives in main.ts and is
// exposed to the mapper through MapperContext.
//
// Reading order mirrors the render flow: block-level mapping first (the
// blockToMdast switch is the block-type catalog), block-type helpers next,
// rich-text (inline) mapping at the bottom.
import type { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client';
import type { BlockContent, DefinitionContent, ListItem, PhrasingContent, TableRow } from 'mdast';
// The import also registers the math node types (math/inlineMath) on mdast.
import type {} from 'mdast-util-math';

// The blocks API returns children through separate requests; the crawler
// attaches them to their parent so the mapper sees a plain tree.
export type Block = BlockObjectResponse & { children: Block[] };

export interface MapperContext {
  // Rewrites notion.so/app.notion.com URLs of crawled pages to paths relative
  // to the file being rendered; all other URLs are returned verbatim.
  resolveUrl(url: string): string;
  // Looks a page id up in the crawled tree; null when the id is not in it.
  resolvePage(pageId: string): { path: string; title: string } | null;
  // Schedule a download of a Notion-hosted attachment (their presigned URLs
  // expire within an hour); returns the relative path to link it at.
  saveAttachment(url: string): string;
  warn(message: string): void;
}

type FlowContent = BlockContent | DefinitionContent;

// ---------- Blocks -> mdast ----------

export function blocksToMdast(blocks: Block[], ctx: MapperContext): FlowContent[] {
  const out: FlowContent[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]!;
    if (isListItemBlock(block)) {
      // Group consecutive siblings of the same list type into one list.
      const items: ListItemBlock[] = [block];
      for (let next = blocks[i + 1]; next && isListItemBlock(next) && next.type === block.type; next = blocks[i + 1]) {
        items.push(next);
        i++;
      }
      out.push({
        type: 'list',
        ordered: block.type === 'numbered_list_item',
        spread: false,
        children: items.map((item) => listItemToMdast(item, ctx)),
      });
      continue;
    }
    out.push(...blockToMdast(block, ctx));
  }
  return out;
}

function blockToMdast(block: Block, ctx: MapperContext): FlowContent[] {
  switch (block.type) {
    case 'paragraph':
      return [
        { type: 'paragraph', children: richTextToMdast(block.paragraph.rich_text, ctx) },
        ...blocksToMdast(block.children, ctx),
      ];
    // Notion's UI offers headings 1-3, but deeper ones (heading_4) occur in
    // imported content; handle every depth the same way. A toggleable heading
    // renders as a plain heading followed by its children.
    case 'heading_1':
      return [heading(1, block.heading_1.rich_text, ctx), ...blocksToMdast(block.children, ctx)];
    case 'heading_2':
      return [heading(2, block.heading_2.rich_text, ctx), ...blocksToMdast(block.children, ctx)];
    case 'heading_3':
      return [heading(3, block.heading_3.rich_text, ctx), ...blocksToMdast(block.children, ctx)];
    case 'heading_4':
      return [heading(4, block.heading_4.rich_text, ctx), ...blocksToMdast(block.children, ctx)];
    case 'quote':
      return [{
        type: 'blockquote',
        children: [
          { type: 'paragraph', children: richTextToMdast(block.quote.rich_text, ctx) },
          ...blocksToMdast(block.children, ctx),
        ],
      }];
    case 'callout': {
      // Callouts render as blockquotes; an emoji icon becomes a prefix on the
      // first line.
      const rich = richTextToMdast(block.callout.rich_text, ctx);
      const icon = block.callout.icon;
      if (icon?.type === 'emoji') rich.unshift({ type: 'text', value: `${icon.emoji} ` });
      return [{
        type: 'blockquote',
        children: [{ type: 'paragraph', children: rich }, ...blocksToMdast(block.children, ctx)],
      }];
    }
    case 'toggle':
      // Pure-markdown equivalent of a toggle: bold summary line, then the body.
      return [
        { type: 'paragraph', children: [{ type: 'strong', children: richTextToMdast(block.toggle.rich_text, ctx) }] },
        ...blocksToMdast(block.children, ctx),
      ];
    case 'code': {
      const code: FlowContent[] = [{
        type: 'code',
        lang: block.code.language === 'plain text' ? undefined : block.code.language,
        value: plainText(block.code.rich_text),
      }];
      // Markdown fences have no caption; Notion shows it as small print under
      // the block, so it becomes an italic paragraph below the fence.
      if (block.code.caption.length > 0) {
        code.push({ type: 'paragraph', children: [{ type: 'emphasis', children: richTextToMdast(block.code.caption, ctx) }] });
      }
      return code;
    }
    case 'equation':
      return [{ type: 'math', value: block.equation.expression }];
    case 'divider':
      return [{ type: 'thematicBreak' }];
    case 'table': {
      const rows: TableRow[] = block.children
        .filter((row) => row.type === 'table_row')
        .map((row) => ({
          type: 'tableRow',
          children: row.table_row.cells.map((cell) => ({ type: 'tableCell', children: richTextToMdast(cell, ctx) })),
        }));
      // GFM always renders the first row as a header; when the Notion table has
      // none, prepend an empty header row so no data row gets promoted.
      if (!block.table.has_column_header) {
        rows.unshift({
          type: 'tableRow',
          children: Array.from({ length: block.table.table_width }, () => ({ type: 'tableCell', children: [] })),
        });
      }
      return [{ type: 'table', align: null, children: rows }];
    }
    case 'table_row':
      return []; // rendered by its parent table
    case 'column_list':
    case 'column':
      // Columns have no markdown equivalent; their content flows in order.
      return blocksToMdast(block.children, ctx);
    case 'image': {
      // Notion-hosted images are downloaded (presigned URLs expire); external
      // images stay referenced by their URL, like other external media.
      const url = block.image.type === 'file' ? ctx.saveAttachment(block.image.file.url) : block.image.external.url;
      return [{
        type: 'paragraph',
        children: [{ type: 'image', url, alt: plainText(block.image.caption) }],
      }];
    }
    case 'video':
      return [mediaToMdast(block.video, ctx)];
    case 'audio':
      return [mediaToMdast(block.audio, ctx)];
    case 'pdf':
      return [mediaToMdast(block.pdf, ctx)];
    case 'file':
      return [mediaToMdast(block.file, ctx)];
    case 'bookmark':
      return [linkParagraph(block.bookmark.url, plainText(block.bookmark.caption), ctx)];
    case 'embed':
      return [linkParagraph(block.embed.url, plainText(block.embed.caption), ctx)];
    case 'link_preview':
      return [linkParagraph(block.link_preview.url, '', ctx)];
    case 'child_page': {
      const target = ctx.resolvePage(block.id);
      if (!target) throw new Error(`Child page ${block.id} missing from the crawled tree`);
      return [{
        type: 'paragraph',
        children: [{ type: 'link', url: target.path, children: [{ type: 'text', value: block.child_page.title }] }],
      }];
    }
    case 'link_to_page': {
      const ref = block.link_to_page;
      if (ref.type === 'page_id') {
        const target = ctx.resolvePage(ref.page_id);
        if (target) {
          return [{
            type: 'paragraph',
            children: [{ type: 'link', url: target.path, children: [{ type: 'text', value: target.title }] }],
          }];
        }
      }
      // Out-of-tree page (or database/comment link): keep it as a Notion URL.
      const id = ref.type === 'page_id' ? ref.page_id : ref.type === 'database_id' ? ref.database_id : ref.comment_id;
      const url = `https://www.notion.so/${id.replace(/-/g, '')}`;
      return [linkParagraph(url, '', ctx)];
    }
    case 'breadcrumb':
    case 'table_of_contents':
      return []; // navigation derived from page structure; nothing to render
    case 'unsupported':
      // The API exposes no content for these blocks (e.g. buttons, forms).
      ctx.warn(`skipping unsupported block ${block.id}`);
      return [];
    // Deliberately rejected block types: exporting them would silently lose
    // content, so tell the editor what to change in Notion instead.
    case 'synced_block':
      throw new Error(
        `Synced block ${block.id}: the API does not expose synced content reliably. ` +
          'In Notion, replace the synced block with a copy of its content or a link to the source page.',
      );
    case 'child_database':
      throw new Error(
        `Child database ${block.id} ("${block.child_database.title}"): databases cannot be rendered to markdown. ` +
          'In Notion, move it out of the handbook tree or replace it with a simple table.',
      );
    case 'template':
      throw new Error(
        `Template block ${block.id}: template buttons cannot be exported. ` +
          'In Notion, remove the button or replace it with the content it would insert.',
      );
    default:
      // Anything else is a new or undocumented block type: fail loud rather
      // than silently dropping content.
      throw new Error(`Unknown block type "${block.type}" (block ${block.id})`);
  }
}

// ---------- Block-type helpers ----------

type ListItemBlock = Extract<Block, { type: 'bulleted_list_item' | 'numbered_list_item' | 'to_do' }>;

const isListItemBlock = (b: Block): b is ListItemBlock =>
  b.type === 'bulleted_list_item' || b.type === 'numbered_list_item' || b.type === 'to_do';

function listItemToMdast(item: ListItemBlock, ctx: MapperContext): ListItem {
  const { rich_text } =
    item.type === 'bulleted_list_item' ? item.bulleted_list_item
    : item.type === 'numbered_list_item' ? item.numbered_list_item
    : item.to_do;
  const children: FlowContent[] = [
    { type: 'paragraph', children: richTextToMdast(rich_text, ctx) },
    ...blocksToMdast(item.children, ctx),
  ];
  // A tight item joins its blocks with single newlines; a block after a nested
  // list would then parse as a lazy continuation of the last bullet. Spread
  // such items so a blank line separates the blocks.
  const spread = children.some((c, index) => c.type === 'list' && index < children.length - 1);
  // GFM task list item for to_do blocks.
  const checked = item.type === 'to_do' ? item.to_do.checked : undefined;
  return { type: 'listItem', spread, checked, children };
}

function heading(depth: 1 | 2 | 3 | 4, runs: RichTextItemResponse[], ctx: MapperContext): FlowContent {
  // ATX headings cannot contain line breaks (the serializer would switch to
  // setext style for depth 1-2); degrade any shift-enter inside a heading to a space.
  return { type: 'heading', depth, children: breaksToSpaces(richTextToMdast(runs, ctx)) };
}

// video/audio/pdf/file blocks: Notion-hosted content is downloaded (the
// presigned URLs expire), external content stays a plain link. The SDK keeps
// these payload types private, so model the shape we rely on locally.
type MediaContent = { caption: RichTextItemResponse[]; name?: string } & (
  | { type: 'file'; file: { url: string } }
  | { type: 'external'; external: { url: string } }
);

function mediaToMdast(media: MediaContent, ctx: MapperContext): FlowContent {
  const caption = plainText(media.caption);
  if (media.type === 'external') return linkParagraph(media.external.url, caption, ctx);
  const path = ctx.saveAttachment(media.file.url);
  const fallbackName = decodeURIComponent(new URL(media.file.url).pathname.split('/').pop() ?? path);
  return {
    type: 'paragraph',
    children: [{ type: 'link', url: path, children: [{ type: 'text', value: caption || media.name || fallbackName }] }],
  };
}

function linkParagraph(url: string, caption: string, ctx: MapperContext): FlowContent {
  const resolved = ctx.resolveUrl(url);
  return {
    type: 'paragraph',
    children: [{ type: 'link', url: resolved, children: [{ type: 'text', value: caption || resolved }] }],
  };
}

// ---------- Rich text -> mdast phrasing ----------

export function richTextToMdast(runs: RichTextItemResponse[], ctx: MapperContext): PhrasingContent[] {
  const nodes = runs.flatMap((run) => runToMdast(run, ctx));
  trimTrailingSpace(nodes);
  return nodes;
}

function runToMdast(run: RichTextItemResponse, ctx: MapperContext): PhrasingContent[] {
  const a = run.annotations;
  let nodes: PhrasingContent[];
  let url: string | null = null;
  switch (run.type) {
    case 'text':
      // Shift-enter inside a block arrives as "\n" in the run; it means a hard
      // line break within the same paragraph. Inline code keeps "\n" literal.
      nodes = a.code ? [{ type: 'inlineCode', value: run.text.content }] : splitBreaks(run.text.content);
      url = run.text.link?.url ?? null;
      break;
    case 'equation':
      nodes = [{ type: 'inlineMath', value: run.equation.expression }];
      break;
    case 'mention':
      // Page mentions render as links with the page title as text. The API
      // sometimes reports plain_text as "Untitled" (observed for mentions in
      // table cells), so for in-tree pages prefer the title from the crawl.
      // All other mention kinds (user, date, ...) have no markdown equivalent
      // and fall back to their plain text.
      if (run.mention.type === 'page') {
        nodes = [{ type: 'text', value: ctx.resolvePage(run.mention.page.id)?.title ?? run.plain_text }];
        url = run.href;
      } else {
        nodes = [{ type: 'text', value: run.plain_text }];
      }
      break;
  }
  if (a.strikethrough) nodes = [{ type: 'delete', children: nodes }];
  // Markdown has no underline; POLICY: remap underline to italic.
  if (a.italic || a.underline) nodes = [{ type: 'emphasis', children: nodes }];
  if (a.bold) nodes = [{ type: 'strong', children: nodes }];
  if (url !== null) {
    // Notion normalizes bare-URL links by appending a trailing slash to the
    // target; undo that so the serializer can use the <autolink> form.
    const only = nodes.length === 1 ? nodes[0] : undefined;
    const target = only?.type === 'text' && `${only.value}/` === url ? only.value : url;
    nodes = [{ type: 'link', url: ctx.resolveUrl(target), children: nodes }];
  }
  return nodes;
}

function splitBreaks(content: string): PhrasingContent[] {
  const nodes: PhrasingContent[] = [];
  for (const [i, part] of content.split('\n').entries()) {
    if (i > 0) nodes.push({ type: 'break' });
    if (part !== '') nodes.push({ type: 'text', value: part });
  }
  return nodes;
}

function breaksToSpaces(nodes: PhrasingContent[]): PhrasingContent[] {
  return nodes.map((node) => {
    if (node.type === 'break') return { type: 'text', value: ' ' };
    if ('children' in node) return { ...node, children: breaksToSpaces(node.children) };
    return node;
  });
}

// Notion rich text may carry insignificant trailing spaces (and, at the end of
// a block, trailing breaks); serialized they would become "&#x20;" noise or a
// dangling hard break, so trim them off.
function trimTrailingSpace(nodes: PhrasingContent[]): void {
  const last = nodes[nodes.length - 1];
  if (!last) return;
  if (last.type === 'break') {
    nodes.pop();
    trimTrailingSpace(nodes);
    return;
  }
  if ('children' in last) {
    trimTrailingSpace(last.children);
    if (last.children.length > 0) return;
  } else if (last.type === 'text') {
    last.value = last.value.trimEnd();
    if (last.value !== '') return;
  } else {
    return; // inlineCode/inlineMath content is verbatim; never trim it
  }
  nodes.pop();
  trimTrailingSpace(nodes);
}

const plainText = (runs: RichTextItemResponse[]): string => runs.map((run) => run.plain_text).join('');
