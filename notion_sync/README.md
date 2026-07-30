# notion_sync

Renders a Notion page tree into a directory of markdown files. One-way: Notion is the source of truth, the output directory is a disposable artifact.

## Usage

```
npm ci
npm run sync -- ROOT_PAGE_ID OUT_DIR ATTACHMENTS_DIR [-f]
```

`NOTION_TOKEN` comes from the environment. 

The repo-level `nox -s sync` renders into a scratch dir and swaps `docs/` and `attachments/` in only on success.

## Syncing with Notion

Any diffs land on a branch. CI maintains a PR against master.

CI runs the nox session:

- On a **manual dispatch**: so you can pull the changes from Notion after having finished your revision
- On a **merge to master**: so new rendering code gets to run + direct changes to `docs/` get flagged immediately 
- **Nightly action**: to surface any random drift + for stuff that doesn't need immediate re-rendering

## Architecture

- Internal link resolution relies on having the handbook's tree in memory → crawling the tree happens before rendering.
- Attachment downloads are collected but performed after the whole tree is rendered → nothing gets downloaded unless the handbook renders successfully.

### Page processing flow

1. Notion API returns Notion blocks
2. Mapper converts Notion blocks to mdast tree nodes (mdast == markdown abstract syntax tree)
3. mdast serializes the tree → markdown files

### Where stuff goes

- `src/mapper.ts` — the complete "what translates to what" catalog: 
  - every block type and rich-text run, one handler each
  - every lossy equivalence (toggle → bold summary line, underline → italic, …) is a policy comment at its decision site
  - rich-text runs are normalized before translation — empty runs dropped, identically-styled neighbors merged (Notion splits spans on comment anchors and color changes), edge whitespace hoisted out of styled runs (CommonMark forbids a closing delimiter next to whitespace)
  - trailing whitespace and hard breaks at a block's edge are dropped after translation, including inside a trailing link's label (insignificant, and would otherwise serialize as `&#x20;` noise or a dangling `\`)
  - styled spans that still end up adjacent are separated by an empty HTML comment, which renders as nothing but keeps their delimiters from fusing (`**a****b**` would re-parse as literal asterisks)
  - a mention of an out-of-tree page renders as its Notion URL — the API withholds titles of pages not shared with the integration — and emits a warning, which in CI also surfaces as a GitHub annotation
  - translation decisions live only here
- `src/main.ts` — everything else

### File layout produced

- the root page of the handbook becomes `docs/README.md`
- a page with child pages becomes a directory with its own body in `<slug(title)>/README.md`
- a leaf page becomes `<parent>/<slug(title)>.md`
- a downloaded attachment goes into the attachments dir at `<owning page's file path>-<n><ext>`; the page's file path is unique by construction, so same-titled pages cannot overwrite each other's attachments

Why: visiting a directory on GitHub renders its README.md file

## Rules

- All markdown is produced by the mdast serializer to avoid weird rendering quirks and edge cases
- The only post-processing allowed is readability reflow; nothing may rewrite, restructure, or re-escape the serializer's output otherwise
- Notion content is represented faithfully, including visibly mangled data. If the source data is wrong, fix it in Notion — never compensate for source problems in code.
- If the tool cannot represent something, it fails and points at what tripped it up. Content is never silently dropped. (The one exception: `unsupported` blocks, for which the API exposes no content at all — skipped with a warning.)
- Stateless: no intermediate mappings are kept in the repo. Pointed at a Notion root page, the tool produces a complete, identical working file structure from scratch.
- Deterministic: re-running on an unchanged source must produce zero diffs.
- One-way export: manual edits to the output are lost at the next regeneration.
- The output is regenerated wholesale, there's no incremental diffing or moving existing files.
- Strict typing end-to-end: everything drives off the SDK's discriminated unions. No `any`, no `as` casts, no `@ts-ignore`.
- `NOTION_TOKEN` is env-only: never written to a file, never echoed, never passed as a command-line argument.

### Handling links & attachments

Special care has to be applied to the links and attachments we get from Notion.

Links can:
- link to in-tree handbook pages
- link to other, out-of-tree pages Notion
- contain the Notion base URL or just be relative paths
- use the `/p/<page-uuid>`, `<page-uuid>`, `<Title>-<page-uuid>` or `<workspace>/<Title>-<page-uuid>` link structure
- be general notion.so links unrelated to the handbook, or just regular web links

Attachments are either:

- Notion-hosted → we get a short-lived presigned CDN URL and have to download the file into the repo
- External → link to the attachment directly

## TBD

- Block types nobody used yet: `tab`, `meeting_notes`, `transcription` (build a handler when someone actually needs one). `synced_block`, `child_database` and `template` are not TBD: they are rejected by policy, see mapper.ts.

## QA

- `npm run typecheck` must pass.
- Render into a scratch directory (never into `docs/` directly) and inspect the diff against the previous render.
- Re-run on the unchanged source material: the output must be byte-identical.