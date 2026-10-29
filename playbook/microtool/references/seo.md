# SEO and content standards

The technical SEO is in the starter (metadata helper, sitemap, robots, canonical, share images, FAQ/Breadcrumb/
Article/WebApplication structured data). This file is about **what pages to make and how to write them**.

## Page types

| Type | Targets | Example |
|---|---|---|
| Main tool (homepage) | the head term: "<x> generator/calculator" | ThumbFont homepage |
| Tool variant / niche landing | "<x> for <niche/language/platform>" | `/hindi-fonts-for-thumbnails/`, `/gaming-thumbnail-fonts/` |
| Entity pages from data | "<item> specs / is <item> free for commercial use" | `/power-stations/<model>/`, `/font/<id>/` |
| Guides | one how/what/why question each | "how long will a power station run a fridge" |
| Trust pages | AdSense + E-E-A-T | About, Contact, Privacy, Terms |

Landing and entity pages must each carry something specific (their own data, tips, FAQ, a preloaded tool state),
never a name-swapped copy of a sibling. Google penalises that as scaled content abuse.

## Every page

- `pageMetadata({ title, description, path })`: title < 60 chars in the searcher's words; description ~150 chars.
- One h1 matching the query. URL slug = the query in kebab case, trailing slash.
- The answer or the tool in the first screen. Then the explanation, then FAQ.
- 3+ internal links: to the tool, to related guides/pages, from 2–3 older pages to this one.
- FAQ from real questions (People Also Ask, autocomplete), answered in 1–3 self-contained sentences.
- Shown "Last reviewed <date>" where data can go stale.
- Added to the sitemap automatically via its data array; check it's there.

## Guides

- "Quick answer" box first (2–3 sentences, key number in bold). Google snippets and AI answers quote this.
- Show the working: the formula, the steps, the numbers. It's the difference from thin listicles.
- Embed or link the tool preloaded for that case (`?preset=…`).
- 600–1,500 words is typical; length follows the question, not a target.
- Cite primary sources for facts (manufacturer pages, official docs, licences).

## Picking what to write next

1. Search Console → Performance → queries at position 5–30 with impressions → improve or create the page for them.
2. Autocomplete / People Also Ask around the tool's subject.
3. Seasonal: publish 4–6 weeks before the season.
Record the backlog in `plan.md` §5.1 with the query each page targets.

## AI search

Direct answers at the top, FAQ schema, clean HTML (server-rendered text, not client-only), Bing indexed,
robots.txt open. These are all already in the starter; keep them.
