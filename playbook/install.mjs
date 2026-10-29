// Installs (or updates) the `microtool` Claude Code skill from this repo into ~/.claude/skills/microtool.
// Run after cloning on a new device, and after pulling changes to playbook/: `node playbook/install.mjs`
import { cpSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const from = path.join(path.dirname(fileURLToPath(import.meta.url)), "microtool");
const to = path.join(homedir(), ".claude", "skills", "microtool");

// Replace rather than merge, so files deleted from the repo don't linger in the installed copy.
rmSync(to, { recursive: true, force: true });
cpSync(from, to, { recursive: true });
console.log(`Installed the microtool skill to ${to}`);
