# Phase 2: design without AI slop

The goal is a site that looks made **for this subject by a person**, not a template. Tool sites have one extra
rule: **the tool is the hero.** The first screen on a phone shows the input and the result, not a marketing
banner about the tool.

## Tooling: Hallmark (direction + audit), not a pipeline

Hallmark (github.com/nutlope/hallmark, MIT) is the design skill used here. Install once, globally:
`npx skills add nutlope/hallmark -g --agent claude-code`
(or in Claude Code: `/plugin marketplace add nutlope/hallmark` then `/plugin install hallmark@hallmark`).
If it isn't installed when this phase starts, tell the owner the command; don't proceed as if it ran.

Hallmark's build mode writes standalone HTML/CSS, and these sites are Next.js + Tailwind. So use it for these two things only:
1. **Direction:** run Hallmark's build on a throwaway `scratch/` homepage mock to get three themes dealt for this
   tool's subject. Pick one with the owner. Translate the chosen theme's palette, type, components and texture into
   DESIGN.md and `globals.css` tokens. Delete the scratch mock (never commit it).
2. **Audit:** `/hallmark audit <url or file>` on the homepage and one guide before launch, and after any redesign.
   Fix Floor findings (contrast, focus, reduced motion, phone layout, invented facts) always; Reflex findings
   unless DESIGN.md records why not. Log the run in DESIGN.md §8.

`/hallmark polish` is fine for a final pass on a single page if it keeps the Next/Tailwind code intact; check the diff.

## Deciding the direction (fill DESIGN.md)

1. **Ground it in the subject's real world.** What do the people and objects of this niche look like? Workshop
   manuals, YouTube's own UI, a lab notebook, a receipt, a sports scoreboard, a seed packet. BackupCalc took
   "engineer's worksheet / blueprint"; ThumbFont took "dark studio stage where thumbnails glow".
   A direction that could describe any SaaS ("clean, modern, friendly") is not a direction.
2. **Pick type with a reason.** One display face with character + one readable body face (+ mono for numbers if
   the tool is numeric). Load with `next/font`. Check the scripts the audience types in are covered.
3. **Small palette, used with discipline.** Background, text, one accent for the primary action, one highlight.
   The result of the tool gets the most visual weight on the page.
4. **1–3 signature details**, no more. Everything else stays quiet.
5. Show the owner the direction in words + a quick mock of the tool screen at 375 px before building pages.

## Banned (the tells that make a site look AI-generated)

Layout and decoration:
- Marketing hero with a gradient blob and a "Get started" button above the actual tool
- Eyebrow/kicker label above every heading ("✦ FEATURES"), tracked-out all-caps labels everywhere
- One word in the headline coloured or gradient-filled; gradient text in general
- Purple/indigo/violet → cyan/pink gradients; mesh gradients; glassmorphism; glow orbs
- Three-feature cards with an icon each ("⚡ Fast · 🔒 Secure · 🎯 Accurate"); emoji as icons
- Cards inside cards; every section in a rounded-2xl card with the same shadow
- Coloured left-border accent stripes on cards/callouts
- Testimonials, logos, "trusted by", star ratings, user counts that aren't real (never invent these)
- Newsletter signup box at the bottom of every page
- Stock 3D illustrations, floating shapes, decorative blurred circles
- Default shadcn look left unstyled (zinc greys, uniform rounded-md, default ring)

Type and copy:
- Inter/Roboto/Poppins/Montserrat/system UI as the "design decision"
- Centred everything; every paragraph in muted grey
- "Unlock", "Elevate", "Seamless", "Supercharge", "Effortlessly", "Your all-in-one", "Say goodbye to",
  "Whether you're a … or a …", "In today's fast-paced world", rhetorical-question headlines, em-dash chains
- Headings that describe the section ("Features", "How It Works") when they could say something

What good looks like instead:
- The tool first, working, with sensible defaults so the result shows before any input
- Real content shapes: tables of actual numbers, worked examples, the real output previewed
- Left-aligned reading text at ~65 characters; hierarchy from size and weight, not colour
- Copy that sounds like the owner explaining it to a friend: short, specific, concrete numbers

## Checks before calling the design done

- 375 px: tool usable one-handed, result visible without scrolling far, touch targets ≥ 44 px, no sideways scroll
- Keyboard: every control reachable, focus visible
- Contrast ≥ 4.5:1 for text (check muted text especially)
- `prefers-reduced-motion` respected
- Hallmark audit run and logged
- Squint test: would someone recognise this site from a cropped screenshot? If not, the signature details are too weak.
