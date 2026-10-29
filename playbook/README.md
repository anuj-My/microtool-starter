# How to use the micro tool playbook

This repo has two parts:

- **The starter** (everything outside `playbook/`): the code every new tool starts from.
- **The playbook** (`playbook/microtool/`): a Claude Code skill with the process: research → design → build →
  launch → AdSense → growth. `playbook/` is removed from each new project; it lives only here.

## On a new device (once)

```sh
git clone https://github.com/anuj-My/microtool-starter.git
cd microtool-starter
node playbook/install.mjs     # copies the skill to ~/.claude/skills/microtool
```

Also install Hallmark (design direction + audit): `npx skills add nutlope/hallmark -g --agent claude-code`

## Starting a new tool

Open Claude Code in the folder that holds your projects and say:

> start a new micro tool: <your idea>

Claude researches the idea first (searches, competition, ad rates) and gives a go/no-go. On go, it clones this
starter into a new folder, removes `playbook/`, updates the packages to the latest versions, fills in the name and
domain, and works through the phases. The project's `README.md` and `plan.md` tick off as you go, so in a later
session (or on another device) you just say "continue" and it picks up from the first unticked item.

Useful things to say in a project:

- "continue": next unticked step
- "design the site": the design phase (Hallmark themes → DESIGN.md)
- "I'm ready to launch": domain, Cloudflare, Search Console, Bing checklist
- "set up AdSense" / "what should I write next?": the later phases

## Changing the playbook or starter

Edit the files here, commit, push. On every device: `git pull && node playbook/install.mjs`.
If you improve something inside a project that every tool should have, ask Claude to port it here.

## Keeping the starter current

Every few months: `npm outdated`, update, `npm run check`, commit. (New projects update their own packages at
creation anyway; this just keeps the starter's baseline close.)
