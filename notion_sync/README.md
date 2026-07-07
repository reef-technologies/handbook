# notion_sync

Renders a Notion page tree into a directory of markdown files. One-way: Notion is the source of truth, the output directory is a disposable artifact.

## Usage

```
npm ci
npm run sync -- ROOT_PAGE_ID OUT_DIR [-f]
npm run typecheck
```

`NOTION_TOKEN` comes from the environment. `-f` allows writing into a non-empty OUT_DIR (existing files are not cleaned up). The repo-level `nox -s sync` renders into a scratch dir and swaps `docs/` in only on success.

## QA

- `npm run typecheck` must pass.
- Render into a scratch directory (never into `docs/` directly) and inspect the diff against the previous render.
- Re-run on the unchanged source: the output must be byte-identical.

## Architecture

Notion API → Notion blocks → mdast tree → mdast serializer → markdown files, with link resolution and attachment downloads as side channels (`MapperContext`).

- `src/mapper.ts` — the complete "what translates to what" catalog: every block type and rich-text run, one handler each. Every lossy equivalence (toggle → bold summary line, underline → italic, …) is a policy comment at its decision site. Translation decisions live only here; `main.ts` stays mapping-free.
- `src/main.ts` — everything else: CLI, crawl, layout, link resolution, downloads, IO.

File layout produced: the root page becomes `README.md`; a page with child pages becomes a directory with its own body in `README.md`; a leaf page becomes `<parent>/<slug(title)>.md`.

## Rules

- All markdown is produced by the mdast serializer; escaping correctness comes from it, by construction. The only post-processing allowed is non-structural readability reflow (the sync session runs `readable`, which applies semantic line breaks for people reading the .md source); nothing may rewrite, restructure, or re-escape the serializer's output.
- If the tool cannot represent something, it fails and points at what tripped it up. Content is never silently dropped. (The one exception: `unsupported` blocks, for which the API exposes no content at all — skipped with a warning.)
- Stateless: no intermediate mappings are kept in the repo. Pointed at a Notion root page, the tool produces a complete working file structure from scratch, every time.
- One-way export: manual edits to the output are lost at the next regeneration. The output is regenerated wholesale, never mutated in place to match Notion.
- Deterministic: re-running on an unchanged source must produce zero diffs.
- Notion content is represented faithfully, including visibly mangled data. If the output looks wrong, fix the mdast tree in `mapper.ts`; if the source data is wrong, fix it in Notion — never compensate for source problems in code.
- Strict typing end-to-end: everything drives off the SDK's discriminated unions. No `any`, no `as` casts, no `@ts-ignore`.
- `NOTION_TOKEN` is env-only: never written to a file, never echoed, never passed as a command-line argument.
- Links & attachments:
  - a link is treated as pointing at a Notion page when it is a bare path (how the API serves in-workspace inline links) or its host is a Notion host (`notion.so`, `www.notion.so`, `app.notion.com`), and a 32-hex page id can be extracted from the last path segment. Known page-URL shapes: `/<id>`, `/p/<id>`, `/<Title>-<id>`, `/<workspace>/<Title>-<id>`. Notion invents new shapes without documenting them (`/p/` appeared in 2026); extend the list deliberately as they surface;
  - page link inside the exported tree → relative markdown link;
  - bare-path link to a page outside the tree → absolute `notion.so/<id>` URL (a bare path would be a dead link in markdown);
  - bare-path link whose page id cannot be extracted → the render fails, naming the URL and the page it sits on: an unrecognized shape is new Notion behavior and must never pass through as a dead link;
  - full Notion-host URL that cannot be placed in the tree → verbatim;
  - any other host → verbatim, whatever it is;
  - Notion-hosted attachments (anything on Notion's CDN — the presigned URLs expire) → downloaded into the output and linked relatively; a presigned URL must never appear in the output.

## TBD

- Block types nobody used yet: `tab`, `meeting_notes`, `transcription` fail loud today; build a handler when someone actually needs one. `synced_block` / `child_database` / `template` are deliberately rejected with fix-it-in-Notion error messages.
- When/how CI runs the sync and manages the resulting PR.
- The readability reflow is `readable`'s semantic line breaks (one sentence per line), which leaves long single-sentence lines intact — maybe reflow at some line length instead of / in addition to sentence boundaries.
