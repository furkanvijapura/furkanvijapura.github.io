# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Furkan Vijapura's personal portfolio/resume site (`furkanvijapura.github.io`), a single-page Astro + TypeScript static site deployed to GitHub Pages via GitHub Actions. Every piece of content is grounded in verified real data (LinkedIn, GitHub, App Store/Play Store listings) — never invent facts, names, dates, or metrics when editing content here.

## Commands

```bash
npm run dev              # astro dev server on default port (use --port to override)
npm run build             # astro check && npm run generate-resume && astro build
npm run preview           # preview the built dist/ output
npm run generate-resume   # regenerate public/furkan-vijapura-resume.pdf from src/data/resume.ts
npm run fetch-activity    # run scripts/fetch-activity.mjs manually
```

There is no test suite. `astro check` (part of `npm run build`) is the only automated correctness gate — it must report 0 errors before a build is considered good.

`npm run build` requires **Node 22.6+** (see "PDF generation" below) — this is why `.github/workflows/deploy.yml` pins `node-version: 22`, not the LTS default at the time this was written.

### npm install gotchas

This environment's npm registry connection has been flaky historically. If `npm install` fails partway or a native binary can't be found on build (e.g. `Cannot find module '@rollup/rollup-linux-x64-gnu'` or `Cannot find native binding` from rolldown), that's npm's known cross-platform optional-dependency bug, not a real problem with the package. Fix with a **full clean reinstall**, not a partial one:

```bash
rm -rf node_modules package-lock.json
npm install
```

Partial fixes (reinstalling just one package) tend to leave stale platform-specific bindings in the lockfile. Verify with `npm ci && npm run build` before trusting a lockfile change.

## Architecture

### Single source of truth: `src/data/resume.ts`

Every fact on the site — experience, shipped apps, services, education, certifications, skills, FAQs, social links, contact info — lives in typed arrays/objects in `src/data/resume.ts`. Components import from here; nothing is hardcoded redundantly in `.astro` files. The PDF resume (`scripts/generate-resume-pdf.mjs`) also reads directly from this same file, so the website and the PDF can never drift apart. When asked to change any resume content, edit `resume.ts`, not the components.

### Build-time data merging (not client-side fetch)

Three sections — `Activity.astro`, `Writing.astro`, `TechStack.astro`'s sync badges — read JSON files from `public/assets/data/*.json` **at build time**, in the component's Astro frontmatter, using `node:fs`. This is deliberate: these sections used to fetch that JSON client-side with a `<script>` after page load, but that meant crawlers that don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot, etc.) only ever saw "Loading…" placeholders. Rendering server-side at build time fixed that with no loss of freshness, because every scheduled data refresh (below) already triggers a full rebuild anyway.

**Path resolution gotcha:** these components resolve the JSON path via `path.join(process.cwd(), 'public/assets/data/...')`, not `new URL('../../public/...', import.meta.url)`. The latter depends on where Astro's bundler places the compiled chunk on disk, which is an implementation detail that changed between Astro 4 and Astro 7 and silently broke the build. Keep using `process.cwd()`-relative resolution for any new build-time file reads.

### Data freshness pipeline

Three scheduled GitHub Actions write to `public/assets/data/`:

| Workflow | Cadence | Script | Writes |
|---|---|---|---|
| `update-activity.yml` | daily | `scripts/fetch-activity.mjs` | `activity.json` (recent non-fork GitHub repos) |
| `update-writing.yml` | daily | `scripts/fetch-writing.mjs` | `writing.json` (DEV.to API + Medium RSS, merged) |
| `update-skills.yml` | monthly | `scripts/fetch-skills.mjs` | `skills.json` (language-byte breakdown across both of Furkan's public GitHub accounts) |

Each workflow commits directly to `master` if the data changed. That push **automatically triggers `deploy.yml`** (which watches `master`), so a fresh build picks up the new JSON via the build-time reads described above — there's no separate "redeploy" step in these workflows themselves.

`scripts/fetch-writing.mjs` has a hand-maintained `EXCLUDE_TITLES` denylist for old Medium posts that are a bio page or reposted third-party news rather than original writing — check it before assuming the writing feed is purely mechanical.

### PDF generation

`scripts/generate-resume-pdf.mjs` builds a single-page A4 PDF with `pdf-lib`, importing `src/data/resume.ts` directly via `node --experimental-strip-types` (Node's native TypeScript type stripping — no bundler, no `tsx`/`ts-node` dependency). This only works because `resume.ts` sticks to erasable TS syntax (interfaces, typed consts); don't add enums or namespaces to it. The PDF is regenerated on every `npm run build` and is **not committed to git** (`.gitignore`'d) — it's a derived artifact, always rebuilt fresh.

### Deploy model

GitHub Pages is configured for **Actions-based deployment**, not the legacy branch-served build — this was switched via the API (`PUT /repos/.../pages` with `build_type: workflow`) when the site moved off plain static HTML, since a root `index.html` no longer exists in the repo (only in build output). `deploy.yml` builds with `astro build` and deploys the `dist/` artifact via `actions/upload-pages-artifact` + `actions/deploy-pages`.

Working pattern: commit to `dev`, then fast-forward `master` (`git checkout master && git merge --ff-only dev && git push origin master`). `master` is what's actually live; `dev` is not deployed on its own.

### Page structure

`src/pages/index.astro` composes one long single-page layout: a persistent left `Rail` (identity, nav, socials) plus a right-hand scrolling document of numbered sections (`Hero` → `Experience` → `ShippedApps` → `Services` → `TechStack` → `Background` → `Activity` → `Writing` → `Faq` → `Contact`), followed by a full-width `Footer`. Section index numbers (`01`–`09`) are hardcoded per-component `<span class="section-index">` — if you reorder or insert a section, renumber the others by hand.

`BaseLayout.astro` generates all JSON-LD (`Person`, `FAQPage`, one `SoftwareApplication` per shipped app) from `resume.ts` data rather than hand-written schema, so it stays in sync automatically.

### Styling

One global stylesheet, `src/styles/global.css` — CSS custom properties for the whole design system (colors, fonts, spacing), no CSS-in-JS or scoped-per-component styles. Design language: a dark "editor" surface, career presented as a version-tagged changelog, Space Grotesk (display) + Public Sans (body) + IBM Plex Mono (structural/meta text — versions, dates, tags). Brand icons in `public/assets/icons/` are self-hosted SVGs (from simple-icons, with `fill="currentColor"` injected) rather than loaded from a CDN, so they inherit the dark theme's muted/hover treatment.

## Things to leave alone

- `New folder/` at the repo root is unrelated leftover content, not part of the built site. Don't reference or "fix" it.
- Don't reintroduce client-side fetching for Activity/Writing/TechStack — see the build-time rendering rationale above.
- Don't add ratings/star counts to shipped-app cards — deliberately removed per explicit direction; the four featured apps intentionally omit App Store ratings.
