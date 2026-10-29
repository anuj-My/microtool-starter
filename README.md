# {{SiteName}}

> **Starter template.** This is `microtool-starter`. To start a new tool, copy the folder (without `node_modules`,
> `.next`, `out`, `.git`), `git init`, then follow the `microtool` skill (say "start a new micro tool" to Claude).
> Replace this README with the project's own using the outline below.

{{One paragraph: what the tool does, for whom, what makes it different.}}

> Name: **{{SiteName}}**, at **{{domain}}**.

---

## Why this idea (research summary, {{date}})

**Demand.** Searches people actually type (autocomplete / People Also Ask / Keyword Planner):
- …

**Supply.** What ranks today and where the gap is:
- …

**Money.** Audience countries, likely ad rates (RPM), affiliate potential:
- …

**Verdict:** go / no-go, and the one-sentence wedge.

**Not verified yet:** …

---

## Who it's for

1. …

## Features

### Version 1 (launch)
- [ ] The tool: …
- [ ] Guides: …
- [ ] About, Contact, Privacy, Terms

### Version 2 (after launch, from Search Console data)
- [ ] …

### What we will NOT build
- …

---

## How it works (technical)

Stack: Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS 4 · Cloudflare Workers static assets.
No backend, no database. Code standards: `CLAUDE.md`. Look: `DESIGN.md`. Launch checklist: `plan.md`.

- **Data:** …
- **Tool logic:** `src/lib/…` (tested)
- **SEO:** every page has a title, description, canonical, share image and structured data; sitemap from data.

### Add a guide

1. Create `src/content/guides/<name>.tsx` exporting `guide` (see `types.ts`). Slug = the search query.
2. Add it to `src/content/guides/index.ts`. The index, sitemap and share image follow.
3. Link it from 2–3 related guides, then `npm run check`.

---

## Commands

```sh
npm run dev      # local dev server
npm test         # unit tests (src/lib/*.test.ts)
npm run lint
npm run build    # static site into out/
npm run check    # all three; must pass before every push
npm run preview  # serve out/ locally
npm run deploy   # manual fallback; normally just push to main
```
