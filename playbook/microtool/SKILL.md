---
name: microtool
description: Anuj's playbook for building and launching ad-supported micro tool websites (free, no-signup browser tools like BackupCalc and ThumbFont). Use when starting a new micro tool or tool idea, validating an idea, scaffolding from microtool-starter, designing the UI (anti-AI-slop, Hallmark, DESIGN.md), buying a domain, deploying to Cloudflare Workers, Search Console/Bing, AdSense, or planning SEO content and growth for one of these sites.
---

# Micro tool playbook

The owner builds small, free, single-purpose browser tools that earn from AdSense (later affiliates).
Two shipped examples to read when in doubt, if they're cloned on this device (read-only, never edit them from
another project): `backupwatt` (BackupCalc, calculators; github.com/anuj-My/backupCalc) and `thumbfont`
(ThumbFont, generator), usually beside the starter in the owner's projects folder.

The starter repo with the shared code, code standards and doc templates:
**github.com/anuj-My/microtool-starter** (this skill's source is its `playbook/` folder). Its `CLAUDE.md` is the
code standard (stack, folder structure, rules); its `plan.md` is the launch checklist; its `DESIGN.md` is the
design template. Don't restate them; use them. The owner works on more than one device, so never assume a path:
find the local clone (usually a sibling `microtool-starter` folder) or clone from GitHub.

## Phases

Work in this order. Each phase ends with something written down in the project, so nothing is re-asked later.

| # | Phase | Output | Reference |
|---|---|---|---|
| 0 | Validate the idea | "Why this idea" section in README.md + go/no-go | `references/research.md` |
| 1 | Scaffold | New repo from the starter, `site.ts` filled, README features list | below |
| 2 | Design | Filled DESIGN.md, tokens + fonts in code | `references/design.md` |
| 3 | Build | Tool (logic tested in `src/lib`), landing pages, 5–10 guides, trust pages | starter `CLAUDE.md`, `references/seo.md` |
| 4 | Pre-launch QA | `npm run check`, phone test, Hallmark audit, Lighthouse | `plan.md` Phase 0 |
| 5 | Launch | Domain, email, Worker, Search Console, Bing, analytics | `plan.md` Phases 1–3 |
| 6 | AdSense | Apply 2–4 weeks after launch | `plan.md` Phase 4 |
| 7 | Growth | 1–2 pages/week from real queries, monthly Search Console routine | `plan.md` Phase 5, `references/seo.md` |

Find where a project is by reading its README feature ticks and `plan.md` ticks; continue from the first unticked item.
Phases 5–6 need the owner's accounts and money: give exact click-paths from `plan.md`, don't pretend to do them.

## Phase 1: scaffold a new project

1. Ask (once, together): working name, target domain (checking availability is the owner's job), folder name.
2. Get a fresh copy from GitHub, so it's the latest starter on any device (works in bash and PowerShell):
   `git clone --depth 1 https://github.com/anuj-My/microtool-starter.git <name>`
   Then inside it delete `.git/` and `playbook/` (the playbook lives only in the starter), replace `README.md`
   (the starter's own guide) with `README.template.md` renamed to `README.md`, and `git init -b main`.
3. **Update packages to the latest versions:**
   - `npm install next@latest eslint-config-next@latest react@latest react-dom@latest`, then `npm update`.
   - `npm outdated` lists what's left: new **major** versions (e.g. TypeScript, ESLint, Tailwind).
     For each, read its release notes / upgrade guide, upgrade, and keep it only if `npm run check` passes
     with at most small fixes. Otherwise stay on the current major and note it in the README.
   - Next.js changes fast: after a Next upgrade, read `node_modules/next/dist/docs/` for anything touched
     (AGENTS.md says the same) before writing code.
   - `npm run check` must pass before moving on. Tell the owner what was upgraded. If a newer major worked,
     offer to bring the starter up to date too.
4. Fill `src/lib/site.ts`, `wrangler.jsonc` name, `package.json` name; replace `{{…}}` in `plan.md` and README.
5. Write the README from the template outline: research summary (Phase 0), who it's for, V1/V2 features, what we won't build.
6. Delete the example guide only once a real one exists. First commit: "Start <Name> from microtool-starter".
7. GitHub: offer to create the project's repo (private by default) and push; it's needed for Cloudflare deploys
   and for working from another device. Ask before creating or pushing anything.

Never modify the starter itself while working on a project. If a project produces something every future tool
should have (a component, a fix, a better checklist step), finish the project task, then **propose** porting it
to the starter as a separate step and wait for a yes. Changes to this skill go in the starter's `playbook/microtool/`,
then `node playbook/install.mjs` reinstalls it; commit and push so other devices get it with `git pull`.

## Standing rules (apply in every phase)

- **No invented facts.** Specs, prices, statistics, quotes, testimonials, "used by 10,000 creators": never. Unknown →
  ask or mark `TODO`. The About page's personal story comes from the owner.
- **Mobile first.** Most traffic is phones (often cheap Android). Check every UI change at 375 px.
- **No backend.** If an idea truly needs one, say so in Phase 0 and get an explicit decision.
- **Pages are data-driven.** A new page type is a typed array; pages, sitemap, share images and links come from it.
- **Done means verified:** `npm run check` passes and the change was looked at in the browser. Say what was checked.
- **Keep the docs current:** tick README features and `plan.md` steps with dates as they're done. That is the memory
  between sessions.
- **Ad safety:** never place ads beside tool controls, never any "click the ads" text, never buy traffic.

## Lessons from BackupCalc and ThumbFont (don't relearn these)

- Static export needs `trailingSlash: true` + `html_handling: "auto-trailing-slash"`, and `dynamic = "force-static"`
  on route handlers (sitemap, robots, og.png, ads.txt). `generateStaticParams` + `dynamicParams = false` on dynamic routes.
- `next/og` can't read CSS variables or shape Indic/Arabic text: hard-code hex colours and use Latin text in share images.
- The apple icon has no extension: `_headers` sets its Content-Type.
- Cloudflare build needs `NODE_VERSION` set (24), or Next 16 fails to build.
- `www` → root redirect rule, or Google sees two copies of the site.
- Self-host fonts via `next/font` (and font files in `public/` for tool fonts); no Google Fonts CDN.
- A dev-only page (style guide, logo options) is `page.dev.tsx`; the starter's `next.config.ts` keeps it out of builds.
- Put shareable state in the URL; it's what makes Reddit/forum answers link back.
- Regional / non-US audiences bring traffic fast but pay low RPM; pair them with English pages for revenue.
- Impeccable was too heavy for tool UIs; Hallmark is used for direction + audit instead (see design reference).
