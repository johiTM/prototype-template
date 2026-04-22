# Trackman Prototype Template

This is a starting point for Trackman product prototypes. Read this file before generating any code.

---

## What this is

A prototype template for Trackman product designers. The goal is always something testable with real users, built fast. Optimise for speed over production hardening (error handling, accessibility passes, performance tuning, edge-case coverage) — but layout, typography, spacing and colour should still match the agreed Figma frames unless the PRD says otherwise.

---

## Starting a new prototype

When the user says anything like "I want to make a prototype", "start a prototype", or "set up a prototype":

**Follow `.cursor/rules/prototype-workflow.mdc` exactly.** That file defines the full sequence:

1. **Discovery** — ask all kickoff questions in one message (what, who, Figma link, out of scope, backend or mock)
2. **Figma** — if a link was provided, inspect it with the Figma MCP and summarise findings before writing anything
3. **PRD** — write the PRD using `.cursor/templates/1. create-prd.md`, get explicit designer approval before continuing
4. **Task list** — generate it using `.cursor/templates/2. generate-tasks.md`, get explicit designer approval before continuing
5. **Setup** — only after approval: create the Next.js app, install Shadcn, import tokens, set up fonts, start dev server
6. **Build** — work through the task list one task at a time using `.cursor/templates/3. process-task-list.md`, check in after each parent task
7. **Wrap-up** — offer to deploy to Vercel or continue tweaking

**Do not run any commands or write any code until Steps 1–4 are complete and approved.**

---

## Stack

| Decision | Chosen |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Components | Shadcn/ui styled with TDS4 tokens |
| Language | TypeScript (relaxed — `any` is fine, skip types where they slow you down) |
| Database | None by default — mock data only |
| Deployment | Vercel |

**Key conventions**

- Components: PascalCase → `ScoreCard.tsx`
- Pages: lowercase → `page.tsx` (Next.js convention)
- Utilities: camelCase → `formatScore.ts`
- Mock data: `lib/mockData.ts`
- Use `any` freely — don't waste time on perfect types

---

## Design System — Trackman Design System (TDS4)

**IMPORTANT:** Design tokens live in `design-tokens.all.css` at the project root. Read this file before generating any CSS or component styling.

Import it in `globals.css`:
```css
@import "../design-tokens.all.css";
```

The file includes light mode (`:root`), dark mode (`[data-mode="dark"]`), and system-preference support (`@media (prefers-color-scheme: dark)`).

### Token naming

All tokens follow: `--tds-{category}-{subcategory}-{variant}`

| Category | What it covers |
|---|---|
| `color-surface-*` | Backgrounds — elevations, brand, danger, selected, neutral, inverse, disabled |
| `color-content-*` | Text and icon colours |
| `color-stroke-*` | Borders, focus rings, dividers |
| `color-data-*` | Data visualisation — categorical, diverging, optimizer |
| `color-arbitrary-*` | Decorative palette with shades 1–4 |
| `spacing-*` | Spacing scale (xs → 11xl) and semantic spacing tokens |
| `radius-*` | Border radii — scale and semantic tokens |
| `text-style-*` | Font shorthand — label, body, heading, display sizes |
| `stroke-weight-*` | Border widths |
| `window-size-*` | Breakpoints (sm → 2xl) |
| `opacity-*` | Disabled and loading opacity |

### Most-used tokens

| Purpose | Token | Light value |
|---|---|---|
| Page background | `--tds-color-surface-elevation-0-default` | #f6f6f6 |
| Card / panel background | `--tds-color-surface-elevation-1-default` | #ffffff |
| Modal / dropdown background | `--tds-color-surface-elevation-2-default` | #ffffff |
| Brand surface | `--tds-color-surface-brand-default` | #ec691a |
| Danger surface | `--tds-color-surface-danger-default` | #d4001c |
| Primary text | `--tds-color-content-primary` | #1f1f1f |
| Secondary text | `--tds-color-content-secondary` | #5c5c5c |
| Helper text | `--tds-color-content-helper` | #818181 |
| Text on colour | `--tds-color-content-on-color` | #ffffff |
| Subtle border | `--tds-color-stroke-subtle` | #1919191f |
| Focus ring | `--tds-color-stroke-focus` | #ec691a |

### Design token rules

- Always use CSS variables — never hardcode hex values
- The brand colour is orange (`#ec691a`) — not blue, not grey
- Page background is `--tds-color-surface-elevation-0-default` (#f6f6f6) — never plain white
- Cards and panels sit on `--tds-color-surface-elevation-1-default` (#ffffff)
- Modals and dropdowns use `--tds-color-surface-elevation-2-default` (#ffffff)
- For data visualisation, always use categorical colours in order (1→8)
- Positive = green, Negative = red, Neutral = yellow — always

### Mapping Figma values to TDS tokens

Figma Inspect shows raw values (hex, px, font sizes). These must be translated to TDS tokens, not pasted in as-is.

- Colours: match the Figma hex to the nearest token in `design-tokens.all.css`. If the hex does not match any token, do not invent a new colour — flag it to the designer and ask which token to use.
- Spacing and radius: round to the nearest `--tds-spacing-*` / `--tds-radius-*` step. If a Figma value is more than one step away from the nearest token, flag it rather than approximating silently.
- Typography: map to the nearest `--tds-text-style-*` shorthand. Do not compose ad-hoc font-size / line-height pairs if a text style already covers it.
- If Figma specs a value that has no reasonable token equivalent, stop and ask the designer — do not hardcode and do not guess.

### TDS4 fonts

TDS4 uses three typefaces. Always load these — never use the Next.js default Geist fonts.

| Role | Font | Used for |
|---|---|---|
| Body & labels | `Inter` | All body text, labels, UI copy |
| Headings | `Inter` | Headings |
| Display | `Oswald` | Large display text, scores, stats |

**Setup in `app/layout.tsx`:**
```ts
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });
```

Apply both variables to the `<html>` element and set Inter as the base body font in `globals.css`:
```css
body {
  font-family: var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif;
}
```

**Do NOT** use Geist, Geist Mono, or any other font not listed above.

### TDS4 components

TDS4 React components are in progress. For now, use Shadcn/ui for all components. Apply TDS4 tokens to override Shadcn defaults so prototypes look on-brand.

---

## Prototype Scope

### What to build

- The happy path only
- Realistic mock data (no "Lorem Ipsum", no "User 1, User 2")
- Enough visual fidelity to feel like a real Trackman product
- Interactions that are relevant to what's being tested

### What to skip

- Authentication — use a hardcoded mock user
- Error states — unless the error handling IS what's being tested
- Loading states — unless the loading experience IS what's being tested
- Form validation — keep it minimal
- Unit tests — not needed
- Performance optimisation — not needed
- Responsive design — build the breakpoints listed in the PRD. If Figma includes mobile/tablet frames and the PRD has them in scope, they must be built. Default to desktop only when the PRD does not specify.
- Animations — build motion that is specced in the Figma frames in scope, or that IS what's being tested. Skip decorative motion not in the PRD.

### The one question to ask before building anything

> "Does this help test the idea with a user, or am I just over-engineering?"

If it doesn't help test the idea — skip it.

### Complexity check

If you're about to suggest any of the following unprompted — stop and ask whether it's needed:
- Setting up authentication or user sessions
- Complex state management (Redux, Zustand)
- API integrations beyond what's being tested
- Database setup
- Abstracting components into a shared library

---

## Mock Data

- Keep mock data in `lib/mockData.ts`
- Use realistic Trackman values: distances in yards, speeds in mph, real-sounding player names
- Make it realistic — a designer showing this to a PO or user should not have to say "ignore the dummy data"

---

## Project Structure

```
my-prototype/
  app/
    layout.tsx        ← global layout, import TDS4 tokens here
    page.tsx          ← entry point
    [feature]/
      page.tsx
  components/         ← prototype-specific components
  lib/
    mockData.ts       ← all mock data goes here
  public/             ← static assets
```

---

## Deployment

When the user asks to deploy, publish, or share the prototype:

1. Run `npm run build` first — fix any build errors before deploying
2. Check whether a `.vercel` folder exists in the project root:
   - **Yes** → project is already linked. Run: `npx vercel --prod`
   - **No** → first deploy. Run: `npx vercel` and follow the prompts (a browser window will open for login)
3. Confirm the production URL and share it with the user

**Rules:**
- Always run `npm run build` before deploying
- Environment variables from `.env.local` are not deployed automatically — remind the user to add them in the Vercel dashboard under Project Settings → Environment Variables
- The entry point must be `app/page.tsx` (Next.js App Router convention)

---

## Supabase (optional backend)

Only set up Supabase when the user explicitly asks for a backend, real data, or persistence. Mock data is the default.

If requested:
1. Ask: "What data does this prototype need to store?" and "Do multiple users need to interact with the same data?"
2. Install: `npm install @supabase/supabase-js`
3. Create `lib/supabase.ts` with the Supabase client
4. Add credentials to `.env.local` (never commit this file)
5. Disable RLS — not needed for prototypes
6. Use realistic Trackman seed data (distances in yards, speeds in mph, real-sounding names)

Direct the user to https://supabase.com to create a free project. Use West EU (Ireland) as the region.

---

## Product Context

> **Replace this section with context specific to what you're building.**

Add here:
- What the product does and who it's for
- Key user types and their goals
- Terminology specific to this product area
- Any known constraints or design decisions already made

Without this, output will be generic. The more context, the better the output.

---

## Tone of Voice

- Act as a senior full-stack developer and senior product designer
- Assume the reader is a product designer — not a developer
- Be short and to the point — no long explanations unless asked
- When something needs a decision, present options clearly rather than assuming
- Ask before assuming on anything product or data related

---

## Definition of Done for a Prototype

- A user can click through the relevant flow
- It looks like a Trackman product
- It uses realistic data
- It can be deployed to Vercel and shared via a link
