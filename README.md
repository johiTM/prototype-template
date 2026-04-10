# Trackman Prototype Template

A starting point for Trackman product prototypes. Includes design tokens, Cursor rules, and project conventions so you can focus on the product — not the setup.

---

## What's included

| File / Folder | What it is |
|---|---|
| `design-tokens.all.css` | All TDS4 design tokens — colours, spacing, typography, radii. Import this into every prototype. |
| `CLAUDE.md` | Project context for Claude Code. Read automatically when you start a session. |
| `.cursor/rules/` | Cursor rules — loaded automatically when you open the project in Cursor. |
| `.cursor/templates/` | Optional workflow templates for PRDs, task lists, and code reviews. |

---

## How to start a new prototype

### Step 1 — Copy this template folder

Duplicate this folder and rename it for your prototype. No terminal needed — do it in Finder.

### Step 2 — Open the folder in Cursor

File → Open Folder → select your copy of the template.

### Step 3 — Say this in the Cursor chat

> "I want to make a prototype"

Cursor will ask you two questions (name and purpose), then handle all the setup automatically — no terminal required.

---

## The full flow

| What you say | What happens |
|---|---|
| "I want to make a prototype" | Cursor sets everything up — Next.js, components, tokens, dev server |
| Describe what you're building | Cursor builds it, using your design tokens and product context |
| "Add a backend" | Cursor walks you through Supabase setup |
| "Deploy this" | Cursor publishes to Vercel and gives you a shareable link |

> **First deploy only:** Vercel will open a browser window for a one-time login. After that, all deploys are instant with no prompts.

---

## Key rules to know

- **Never hardcode hex values** — always use `var(--tds-color-*)` tokens
- **Brand colour is orange** (`#ec691a`) — not blue, not grey
- **Page background** is `--tds-color-surface-elevation-0-default` (#f6f6f6) — not plain white
- **Mock data lives in** `lib/mockData.ts` — keep it realistic, no "Lorem Ipsum"
- **Happy path only** — skip auth, error states, loading states unless you're specifically testing them

---

## Tools

| Tool | How this template helps |
|---|---|
| **Cursor** | `.cursor/rules/` files load automatically and guide all AI output |
| **Claude Code** | `CLAUDE.md` at the root is read automatically at session start |
| **Figma** | Use `design-tokens.all.css` as the reference for matching token values |

---

## Questions?

Check `.cursor/rules/README.md` for a breakdown of what each rule file does.
