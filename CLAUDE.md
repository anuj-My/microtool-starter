# Project rules

A **micro tool site**: one free, no-signup browser tool plus supporting guides, earning from AdSense.
Built from `microtool-starter`. The full process (research → build → launch → AdSense → growth) is the
`microtool` skill; this file is the code standard for this repo.

@AGENTS.md

## Docs in this repo

| File | What it holds | Keep it current when |
|---|---|---|
| `README.md` | What the tool is, the research behind it, features (ticked), how to add content, commands | A feature ships or a content type is added |
| `DESIGN.md` | The decided look: direction, palette, fonts, components, what's banned | Any visual decision changes |
| `plan.md` | Launch & growth checklist, ticked with dates | A launch step is done |

Read all three before starting work. Tick boxes `[x]` with the date when something is done.

## Tech stack (fixed, don't debate it)

- **Next.js 16** App Router, `output: "export"` (static HTML in `out/`), `trailingSlash: true`
- **React 19**, **TypeScript** strict
- **Tailwind CSS 4** via `@tailwindcss/turbopack`, tokens in `src/app/globals.css`
- **Cloudflare Workers static assets** (`wrangler.jsonc`), deployed by Workers Builds on every push to `main`
- **No backend, no database, no login.** Everything runs in the browser. Nothing the user enters is uploaded.
- Tests: Node's built-in runner, `node --test src/lib/*.test.ts` (Node 24 runs TypeScript directly). No Jest/Vitest.
- Node version: `.node-version` (24); Cloudflare build env `NODE_VERSION=24`.

**Adding dependencies:** only when they save real work and run client-side. Pin exact versions for anything
that touches rendering. Before adding one, check it works with static export (no server APIs, no `next/image`
optimizer, no route handlers that read the request).

**shadcn/ui:** not installed by default. Add it only when the tool needs accessible interactive primitives
that are tedious to hand-roll: dialog, popover, combobox/command, select, tabs, slider, tooltip, toast.
`npx shadcn@latest init`, then `npx shadcn@latest add <component>` per component. The tokens in `globals.css` already use
shadcn's names, so components inherit the site's palette. **Restyle every added component to DESIGN.md:**
shadcn's default look (zinc grey, rounded-md, ring focus) is itself a recognisable template look.
Simple things (buttons, inputs, cards, disclosure, FAQ) stay hand-written with `<details>`, `<button>`, etc.

**Not allowed:** anything that needs a server at runtime (API routes reading the request, ISR, middleware,
server actions), `next/image` optimisation (use `<img>` or `images.unoptimized`), Google Fonts CDN links
(use `next/font`, self-hosted), Google Analytics (cookies → consent burden; use Cloudflare Web Analytics),
CSS-in-JS libraries, component kits besides shadcn, state libraries (React state + URL params are enough).

## Folder structure

```
src/
  app/
    layout.tsx              root: <html>, fonts, metadata defaults, AdSense verification meta
    globals.css             design tokens (the only place colours live) + .prose-site
    (site)/                 every normal page, wrapped in SiteChrome (header, footer, AdSense script)
      page.tsx              the homepage IS the main tool
      <tool-slug>/page.tsx  extra tools / niche landing pages, kebab-case = the search query
      guides/               guide index + [slug] pages (+ og.png share image per guide)
      about/ contact/ privacy-policy/ terms/
    (embed)/                optional: chrome-less widgets for other sites to iframe
    sitemap.ts robots.ts manifest.ts ads.txt/ og.png/ icon.svg apple-icon.tsx not-found.tsx
  components/
    *.tsx                   site-wide pieces: SiteChrome, Header, Footer, PageHeader, ProsePage, Faq, Breadcrumbs, AdSlot
    tool/                   the tool's UI ("use client" components and hooks). Name the folder after the tool if you like (calculators/, generator/)
  content/
    guides/                 one .tsx file per guide exporting `guide`, registered in index.ts
    <type>.tsx              other content collections (effects, models…) as typed arrays
  lib/
    site.ts                 name, domain, email, author, lastReviewed, AdSense config: the only place these live
    seo.ts                  pageMetadata(), organization, jsonLd(), shareImagePath()
    nav.ts                  tools + site pages: header, footer, 404 and sitemap read from it
    shareImage.tsx          the Open Graph image design
    <logic>.ts              the tool's pure logic and data (no React), each with <logic>.test.ts beside it
scripts/                    build-time Node scripts (*.mjs): fetching data, generating assets. Run from package.json
public/                     _headers, static files. Large generated files are built, not committed
```

Rules that keep it maintainable:
- **Data drives pages.** A page type (guide, model, font, language) is a typed array in `src/lib` or `src/content`;
  its pages, sitemap entries, share images and internal links are generated from it. Adding one = adding one entry.
- **Logic is pure and tested.** Maths, parsing, rendering rules live in `src/lib/*.ts` with no React, and have tests.
  Components only wire state to it.
- **Server components by default.** `"use client"` only on the interactive tool parts, as low in the tree as possible.
  Text, headings, FAQ and guides must be in the static HTML (Google reads it, and it loads fast).
- **State that a user might share goes in the URL** (`?q=…`) so results can be linked from Reddit/forums.
  Preferences go in `localStorage`, wrapped in try/catch.
- **One h1 per page.** Every page exports `metadata = pageMetadata({...})` (or `generateMetadata`). No page without
  a unique title, description and canonical path.
- Files: components `PascalCase.tsx`, everything else `camelCase.ts`; routes `kebab-case/`. `@/` imports.
- Comments explain *why*, briefly, like the existing code. No commented-out code.

## Code quality bar

Before saying anything is done: `npm run check` (tests + lint + build) passes, and the change is seen in
`npm run dev` at **375 px wide** and desktop. Most visitors are on phones; the tool must work on a cheap Android phone.

- Touch targets ≥ 44 px. No horizontal scroll at 360 px. Inputs have labels. Focus is visible.
- Respect `prefers-reduced-motion`. Contrast ≥ 4.5:1 for text.
- Lighthouse on a guide page: Performance, Accessibility, Best Practices, SEO all ≥ 95.
- No layout shift from ads: `AdSlot` reserves its height; never place one beside the tool's inputs or buttons.

## Content rules (SEO + AdSense)

- Never invent facts, specs, statistics, quotes, reviews or testimonials. Unknown → ask the owner, or mark it `TODO`.
- The About page's personal section is written by the owner (ask; don't make it up).
- Each guide answers one search question; quick answer first; something specific to that question (no
  name-swapped template pages: Google calls it scaled content abuse).
- Link every guide to the tool, and new guides from 2–3 older ones.
- Copy is plain, short, concrete. No "Unlock", "Elevate", "Seamless", "Supercharge", "In today's fast-paced world",
  em-dash chains, or "Whether you're a X or a Y".

## Design

Follow `DESIGN.md`. If it's still the template, decide the design first (the `microtool` skill's design phase)
before building any visible UI. Never ship the starter's placeholder grey.

## Git

Branch from `main` for each piece of work; commit small, with messages that say what changed for the user.
Pushing to `main` deploys to production.
