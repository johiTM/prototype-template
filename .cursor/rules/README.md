# Cursor Rules

This folder contains `.mdc` rule files that guide Cursor's behaviour when working on prototypes. Each file covers a specific area of the stack or workflow.

---

## Files

### `prototype-workflow.mdc`

Triggered when the user says anything like "I want to make a prototype" or "Start a prototype". Drives the full workflow — discovery, PRD, task list, then static site setup and build. The designer does not need to use the terminal themselves.

---

### `stack.mdc`

Defines the core technology stack and project conventions.

- **Markup:** HTML5
- **Styling:** Plain CSS under `css/`
- **Behaviour:** JavaScript ES modules under `js/`
- **Database:** None by default — mock data only
- **Deployment:** Vercel (static)

Also covers project structure, file naming, mock data rules, what to skip in prototypes, common commands, and tone of voice.

---

### `design-system.mdc`

Lightweight notes on Trackman Design System (TDS4) alignment for static prototypes. This template does not ship a full token CSS file — use Figma and designer handoff for fidelity.

---

### `prototype-scope.mdc`

Sets expectations for what a prototype should and shouldn't include.

- Build the happy path only with realistic mock data
- Skip authentication, error states, loading states, unit tests, performance optimisation, and responsive design (unless they're specifically being tested)
- Prototypes should look like Trackman products, not generic AI output
- Includes a complexity checklist to catch over-engineering

---

### `deploy.mdc`

**Always applied.** Handles Vercel deploys for static HTML/CSS/JS. Password protection is a hard gate.

- Do not run `npx vercel` until `middleware.js`, `vercel.json`, `package.json` (`@vercel/edge`), and `PROTO_PASSWORD` exist
- Preflight check required before every deploy; `vercel.json` is `{}` (root middleware is automatic — no `functions`/`runtime` block)
- Share links must include `?pw=` — never bare production URLs
- First deploy may require browser login; subsequent deploys use `npx vercel --prod`
- Deploy/config files are hidden from the explorer via `.vscode/settings.json` — still create them; designers should not need to see them

---

### `supabase.mdc`

Optional backend setup using Supabase. Only activated when explicitly requested.

- Walks through adding Supabase to a static or lightly tool-assisted setup
- RLS is disabled for prototypes
- Credentials must not be committed
- Seed data should use realistic Trackman values

---

### `product.mdc`

Provides business, product, and team context for the project. This file is meant to be replaced with your own product context so Cursor understands what you're building and who it's for.

- Company and product background
- What the product does and its core capabilities
- User types and their goals
- Current product health and known pain areas
- Technical context (codebase, design system, integrations)
- Team structure and capacity
- Design priorities and constraints
- Key terminology
