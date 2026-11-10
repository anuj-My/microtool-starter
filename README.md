# microtool-starter

A starter kit and playbook for **micro tool websites**: small, free, no-signup browser tools that earn from
Google AdSense. Each new tool starts with the boring parts already done and follows the same process every time.

It has two parts:

- **The starter** (everything outside `playbook/`): a Next.js site with SEO, AdSense, legal pages, guides and
  Cloudflare hosting already wired up. Every new tool is a copy of it.
- **The playbook** (`playbook/microtool/`): a [Claude Code](https://claude.com/claude-code) skill that holds the
  process: validate the idea → design → build → launch → AdSense → growth. With it installed, you don't have to
  explain the process to Claude each time.

---

## What's in the starter

**Stack:** Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui ·
Cloudflare Workers static assets. No backend, no database, free hosting.

**Already built:**

- `pageMetadata()` for titles, descriptions, canonical URLs, Open Graph and X cards on every page
- Sitemap, robots.txt and web manifest, all generated from data
- Structured data: WebApplication, FAQPage, BreadcrumbList, Article
- Share images (`og.png`), rendered at build time for the site and for each guide
- AdSense: verification meta tag and `ads.txt` from one setting, plus ad slots that stay hidden until you're approved
- A guides system: one file per guide, with index, sitemap and share image automatic
- shadcn/ui components for the tool (button, card, input, label, select, slider, switch, tabs, tooltip), resized
  to 44 px touch targets and using the site's colour tokens. `npm run dev` → `/ui/` shows them all
- About, Contact, Privacy Policy (AdSense-ready) and Terms pages, plus a 404 page
- Cloudflare config: `wrangler.jsonc`, plus `_headers` with long caching for build files
- Tests for the site settings, run with `npm run check`

**Docs every project gets:**

| File | Purpose |
|---|---|
| `CLAUDE.md` | Code standards: stack, folder structure, rules. Claude Code reads it automatically |
| `DESIGN.md` | Template for the site's look, filled in before any UI is built (anti-AI-slop) |
| `plan.md` | Launch checklist: domain, Cloudflare, email, Search Console, Bing, AdSense, growth |
| `README.template.md` | The new project's README (idea research, features, how to add content). Renamed to `README.md` in each project |

## Repo map

```
microtool-starter/
├── README.md               this guide (about the starter, not copied into projects)
├── README.template.md      becomes each project's README.md
├── CLAUDE.md  DESIGN.md  plan.md
├── playbook/               the Claude Code skill (removed from each new project)
│   ├── install.mjs         installs the skill into ~/.claude/skills/microtool
│   └── microtool/          SKILL.md + references (research, design, SEO)
└── src/
    ├── app/                pages: (site)/ for normal pages, plus sitemap, robots, og.png, ads.txt
    ├── components/         site-wide components (header, footer, FAQ, ad slot…)
    ├── content/guides/     one file per guide
    └── lib/                site.ts (settings), seo.ts, nav.ts, the tool's logic + tests
```

---

## Setup on a new device (once)

You need [Node.js](https://nodejs.org) 24+, git, and Claude Code. If you want to change the starter or the
playbook for yourself, fork this repo first and clone your fork: new projects are copied from whatever you cloned.

```sh
git clone https://github.com/anuj-My/microtool-starter.git   # or your fork
cd microtool-starter
node playbook/install.mjs                                   # installs the microtool skill
npx skills add nutlope/hallmark -g --agent claude-code      # design skill used in the design phase
```

## Starting a new tool

Open Claude Code in the folder that holds your projects and say:

> start a new micro tool: *your idea*

Claude will:

1. **Research the idea:** what people search for, what already ranks, what the audience pays in ads. You get a
   go or no-go with reasons.
2. **Create the project:** a fresh copy of this starter from GitHub, with `playbook/` removed and
   `README.template.md` renamed to `README.md`.
3. **Update packages to the latest versions:** Next.js and React update straight away. Bigger version jumps
   (e.g. a new TypeScript or ESLint major) are kept only if tests, lint and build still pass, and you get told
   what changed.
4. Fill in the name and domain, then go through **design → build → launch → AdSense**.
5. Ask before creating the project's GitHub repo. It's needed for Cloudflare deploys and for working on another device.

Progress is written as ticked boxes in the project's `README.md` and `plan.md`. In a later session, on any
device, pull the project and say **"continue"**: Claude picks up at the first unticked item.

Other things to say inside a project:

| Say | What happens |
|---|---|
| "continue" | Next unticked step |
| "design the site" | Hallmark themes → you pick one → `DESIGN.md` + colour and font settings + shadcn components restyled |
| "I'm ready to launch" | Domain, email, Cloudflare, Search Console, Bing, step by step |
| "set up AdSense" | When to apply, what to change, what never to do |
| "what should I write next?" | New pages picked from real searches and Search Console data |

**Without Claude:** copy the repo, delete `.git/` and `playbook/`, rename `README.template.md` to `README.md`,
then follow `CLAUDE.md`, `DESIGN.md` and `plan.md` yourself.

## Designing with Hallmark

[Hallmark](https://github.com/nutlope/hallmark) is a free design skill for Claude Code. It's built to make pages
that don't look AI-generated: it starts from one of 50 themes (paper, type, colour, texture), and it checks pages
for low contrast, missing focus styles, broken phone layouts and the usual "AI look" tells.

**You don't run it by hand.** When you say "design the site", the microtool skill uses Hallmark for you:

1. Claude asks Hallmark for **three themes** that fit your tool's subject and builds a quick throwaway mock of
   your homepage in each.
2. **You pick one.** This is the only design decision you have to make. You can browse all the themes at
   [usehallmark.com](https://usehallmark.com) if you want to suggest one.
3. Claude writes the choice into `DESIGN.md`, sets the colours and fonts in `globals.css`, and restyles the shadcn
   components to match. The mock is deleted; your site stays Next.js + Tailwind.
4. **Before launch**, Claude runs `/hallmark audit` on the homepage and one guide, fixes what it finds, and logs
   the result in `DESIGN.md`.

**Install it once** (from setup above):

```sh
npx skills add nutlope/hallmark -g --agent claude-code
```

Or as a Claude Code plugin: `/plugin marketplace add nutlope/hallmark`, then `/plugin install hallmark@hallmark`
(it's then called as `/hallmark:hallmark`). Hallmark needs Node 18+. For its in-browser checks, also install
Chrome and `npm i -g puppeteer-core`; without them only its static checks run.

**Using it yourself** (optional), in Claude Code inside a project:

| Command | What it does |
|---|---|
| `/hallmark audit ./src/app` | Lists design and accessibility problems. Changes nothing |
| `/hallmark redesign ./src/app` | Rebuilds the look but keeps your content and wiring. Add "keep the layout" for a lighter restyle |
| "polish" (with redesign) | Fixes only the AI-look tells, nothing else |

Check the diff after a redesign or polish: Hallmark writes plain HTML/CSS by default, and this site must stay
Next.js + Tailwind using `src/components/ui/`.

---

## Commands

```sh
npm install
npm run dev      # local dev server
npm test         # unit tests (src/lib/*.test.ts)
npm run check    # tests + lint + build; must pass before every push
npm run preview  # serve the built site from out/
npm run deploy   # manual deploy to Cloudflare (normally: push to main)
```

## Changing the playbook or starter

- Edit the files here, run `npm run check`, commit and push.
- After changing `playbook/`, reinstall the skill on every device: `git pull && node playbook/install.mjs`.
- If a project produces something every tool should have, ask Claude to port it here.
- Every few months, update this repo's packages too: `npm outdated`, update, `npm run check`, commit.
  New projects update their own packages at creation anyway; this keeps the starting point close.

## License

[MIT](LICENSE). Use it, change it, build your own tools with it.
