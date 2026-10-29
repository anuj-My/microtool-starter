# {{SiteName}} launch & growth plan

Everything to get **{{domain}}** live, indexed, ranking and earning from AdSense.
Work top to bottom. Tick boxes as you go (`[ ]` → `[x]`, with the date).
Replace `{{SiteName}}` / `{{domain}}` / `{{repo}}` when the project starts.

> **Expectations.** A new domain usually takes **3–6 months** before Google sends meaningful traffic, and
> **6–12 months** before it earns real money. That's normal. Sites win by adding useful pages every week.

---

## Phase 0 — Before launch

### 0.1 Data and content

- [ ] Every fact, spec and number in `src/lib/` and `src/content/` checked against a primary source (date: ____).
- [ ] No "coming soon", lorem ipsum, `TODO`, empty sections or example guide left.
- [ ] At least the core content from the README feature list is built (tool + ~5–10 guides is a good launch size).

### 0.2 Make it yours

- [ ] About page: 2–4 sentences **in your own words**: who you are, why you built it. Real first-hand experience
      is the strongest trust signal (Google calls it E-E-A-T).
- [ ] `src/lib/site.ts`: name, tagline, description, url, contactEmail, author, lastReviewed all real.
- [ ] Logo/favicon (`src/app/icon.svg`, `apple-icon.tsx`) and share image (`src/lib/shareImage.tsx`) match DESIGN.md.

### 0.3 Design check

- [ ] `/hallmark audit` run on the homepage and one guide; findings fixed or noted in DESIGN.md's audit log.
- [ ] Checked by eye at 375 px, 768 px and desktop. Nothing looks like the starter's placeholder grey.

### 0.4 Final checks

- [ ] `npm run check` passes (tests, lint, build).
- [ ] `npm run preview`, then open it on your **phone** (same Wi-Fi, PC's IP address) and use every tool.
- [ ] Lighthouse (Chrome DevTools, mobile) on the homepage and a guide: all four scores ≥ 95.
- [ ] Every sitemap URL loads; no broken internal links; no console errors.

---

## Phase 1 — Domain (Cloudflare Registrar)

Cloudflare sells domains at cost (~$10–11/year for a .com, the same price on renewal), and hosting is on
Cloudflare anyway, so there's no nameserver step and everything is in one dashboard.

- [ ] <https://dash.cloudflare.com> → **Domain Registration → Register Domains** → search `{{domain}}`, buy it.
      Prefer `.com`. Check the name isn't a trademark (search it + the USPTO/WIPO trademark databases).
- [ ] **Auto-renew ON**, and a card on file that won't expire soon. Losing the domain loses all the SEO.
- [ ] WHOIS privacy (redaction) is on by default at Cloudflare. Check it.

### 1.1 Email

- [ ] Cloudflare → domain → **Email → Email Routing** → enable, forward `hello@{{domain}}` to your Gmail. Free.
      Accept the DNS records it adds (MX, SPF, DKIM).
- [ ] Add a DMARC record if it suggests one.
- [ ] Send a test email to it.

---

## Phase 2 — Hosting on Cloudflare Workers (free)

The site is static: `npm run build` writes plain HTML to `out/`, and `wrangler.jsonc` tells Cloudflare to serve it.

### 2.1 GitHub

- [ ] Create a **private or public** repo `{{repo}}`, push `main`.
- [ ] `wrangler.jsonc` → `"name"` set to the project name.

### 2.2 Connect a Worker

- [ ] Cloudflare → **Workers & Pages → Create → Workers → Import a repository** → choose the repo.
- [ ] Build settings:
  - Build command: `npm run build`
  - Deploy command: `npx wrangler deploy`
  - Production branch: `main`
  - Environment variable: `NODE_VERSION` = `24`
- [ ] Deploy. Check the `*.workers.dev` address works.

If the menus have moved, search Cloudflare's docs for "Workers static assets" / "Workers Builds".
`public/_headers` is applied automatically.

### 2.3 Attach the domain

- [ ] Worker → **Settings → Domains & Routes** → add `{{domain}}` and `www.{{domain}}` as custom domains.
- [ ] **Rules → Redirect Rules** → template "Redirect from WWW to root". The canonical address has no `www`.
- [ ] **SSL/TLS**: mode **Full (strict)** (or Full), **Always Use HTTPS** on.
- [ ] `https://{{domain}}`, `http://{{domain}}` and `https://www.{{domain}}` all end at `https://{{domain}}/`.

### 2.4 Analytics

- [ ] Cloudflare → **Analytics & Logs → Web Analytics** → enable for the site. No cookies, so no consent banner needed for it.

From now on every `git push` to `main` rebuilds and publishes in 1–2 minutes.
`npm run deploy` is the manual fallback (`npx wrangler login` once first).

---

## Phase 3 — Get found (Google, Bing, AI search)

### 3.1 Google Search Console

- [ ] <https://search.google.com/search-console> → **Add property → Domain** → `{{domain}}`.
- [ ] Verify with the DNS TXT record (Cloudflare → DNS → Add record → TXT). Usually minutes.
- [ ] **Sitemaps** → submit `https://{{domain}}/sitemap.xml`.
- [ ] **URL Inspection** → homepage → **Request indexing**. Then the main tool pages; the rest over the next days (daily limit).
- [ ] **Rich Results Test** (<https://search.google.com/test/rich-results>) on a guide: FAQ, Breadcrumb, Article detected.

### 3.2 Bing Webmaster Tools

Bing also feeds DuckDuckGo, Yahoo and ChatGPT's web search.

- [ ] <https://www.bing.com/webmasters> → **Import from Google Search Console**. Check the sitemap came across.

### 3.3 What's normal

- New pages appear within days to a few weeks. Watch Search Console → **Pages** → "Indexed".
- "Discovered – currently not indexed" on a new site is normal; it clears as trust and links grow.

---

## Phase 4 — AdSense

### 4.1 When to apply

No official minimum. Approval comes from **original, useful content** on a site that looks finished: the tool,
~15–20+ quality pages, About/Contact/Privacy/Terms, no broken or empty pages.

- [ ] Live on the domain and indexed (Phase 3). Apply **2–4 weeks after launch**.

### 4.2 Apply

- [ ] <https://adsense.google.com> → add `{{domain}}` (one AdSense account covers all your sites: **Sites → Add site**).
- [ ] Publisher ID (`ca-pub-…`, same for every site) into `site.adsense.publisherId` in `src/lib/site.ts`, push.
      This adds the verification meta tag and `/ads.txt` automatically.
- [ ] **Request review**. Takes days to ~4 weeks.
- [ ] **Privacy & messaging → European regulations**: create the GDPR consent message for this site (required for EEA/UK/CH visitors).

### 4.3 If rejected

Usually "Low value content": add more genuinely useful guides, strengthen About, wait for more pages to be indexed, re-apply.

### 4.4 After approval

- [ ] `site.adsense.enabled = true`, push.
- [ ] AdSense → **Auto ads** on for the site.
- [ ] Optional: 3 display units → slot IDs into `site.adsense.slots` (`afterTool`, `inContent`, `bottom`).

### 4.5 Never (account bans)

- Click your own ads or ask anyone to. Text like "support us by clicking the ads".
- Buy traffic (exchanges, bots, "10,000 visitors for $5").
- Ads where people tap them by accident (next to the tool's buttons, inside the tool).

---

## Phase 5 — Ranking: ongoing

SEO = **useful content** + **links from other sites** + **patience**. The technical part is done in the code.

### 5.1 Content (the biggest lever)

- [ ] **1–2 new guides or landing pages a week** for the first 6 months. Pick them from real searches
      (autocomplete, People Also Ask, Search Console queries). Ideas backlog:

| Page | Search it targets | Why |
|---|---|---|
| | | |

### 5.2 Links

- [ ] Answer real questions on the subreddits/forums where the audience is: {{communities}}. Full answer in the
      comment; link only when it genuinely helps; read each sub's rules.
- [ ] Shareable result links (URL state) when answering, so people see the exact answer.
- [ ] Email creators/bloggers in the niche offering the tool as a free resource.
- [ ] Optional: an embeddable widget (`(embed)/`) with a normal "by {{SiteName}}" link under the iframe.
- [ ] Journalist request services (Qwoted, Featured.com) if the niche is newsworthy.
- Never buy links or "link packages".

### 5.3 Monthly routine (~1 hour)

- [ ] Search Console → **Performance** → queries at position **5–30** → improve those pages (answer that exact
      question, add an FAQ, add internal links).
- [ ] Search Console → **Pages** → fix errors.
- [ ] Re-check data; update `site.lastReviewed`.

### 5.4 AI search (ChatGPT, Perplexity, AI Overviews)

- Keep direct answers at the top of pages and FAQ structured data. Be in Bing. Leave `robots.txt` open.

---

## Phase 6 — Extra income (optional, later)

- Affiliate links where the niche sells products (Amazon Associates after some traffic; brand programs).
- If added: a disclosure on the site, `rel="sponsored"` on links, privacy policy updated. Never bend results to sell.

---

## Timeline

| When | What |
|---|---|
| Week 1 | Data check, About, domain, deploy, Search Console + Bing |
| Weeks 2–4 | 3–6 new pages, start answering in communities, apply to AdSense |
| Months 2–3 | 1–2 pages a week; first impressions; AdSense approved |
| Months 3–6 | Traffic builds; monthly Search Console routine |
| Months 6–12 | Traffic compounds; consider affiliates |
