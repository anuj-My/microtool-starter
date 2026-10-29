# DESIGN.md

> **Status: TEMPLATE.** Fill this in during the design phase (see the `microtool` skill, design reference) before
> building UI. Until it's filled, the site uses placeholder greys that must not ship.
> Once decided, this file is the authority: tokens in `globals.css` match it, and any change starts here.

## 1. Who it's for and where they use it

- Audience: (e.g. regional YouTubers on cheap Android phones; US homeowners during an outage on a laptop)
- Device / context: (phone-first? dark room? in a hurry?)
- What they must do in the first 10 seconds: (the single primary action)

## 2. Direction

One sentence that a stranger could picture, rooted in the tool's subject, not "clean and modern".
(BackupCalc: "a blueprint / engineer's worksheet: warm paper, ink outlines, amber highlights".
ThumbFont: "a dark studio stage where the thumbnails are the brightest thing on screen".)

- Direction:
- Why it fits the subject:
- Hallmark theme it started from (if any):
- Reference sites/objects (real things in the subject's world, not other SaaS sites):

## 3. Tokens

| Token | Value | Use |
|---|---|---|
| background | | page |
| foreground | | body text |
| card | | panels, tool surface |
| muted / muted-foreground | | secondary areas / secondary text |
| primary / primary-foreground | | the primary action only |
| accent | | hover, highlighted rows |
| border | | |
| ring | | focus |
| radius | | |

Light only / dark only / both: (pick one; "both" doubles the QA work, so only if the audience needs it)

## 4. Type

- Display face: (with why; not Inter, Roboto, Poppins, Montserrat or Space Grotesk unless there's a real reason)
- Body face:
- Mono (if numbers/data matter):
- Scale: (h1 / h2 / body / small in px at mobile and desktop)
- Numbers: tabular? units styled how?

## 5. The tool's UI

- Layout at 375 px: (what's above the fold: input, result)
- Layout at desktop:
- Result presentation: (how the answer is made the most prominent thing)
- Controls: (sliders? chips? steppers? which shadcn primitives, if any, and how they're restyled)

## 6. Signature details (1–3 only)

The few things that make it recognisable (BackupCalc: graph-paper banner, hard ink shadows on panels;
ThumbFont: live thumbnails as the grid).

## 7. Banned here

Start from the list in the skill's design reference, plus anything specific to this site.

## 8. Audit log

| Date | Tool | Result | Fixed |
|---|---|---|---|
| | `/hallmark audit` | | |
