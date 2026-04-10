# Cursor Rules

This folder contains `.mdc` rule files that guide Cursor's behaviour when working on prototypes. Each file covers a specific area of the stack or workflow.

---

## Files

### `prototype-workflow.mdc`
Triggered when the user says anything like "I want to make a prototype" or "Start a prototype". Drives the full setup flow — asks two questions, then runs create-next-app, Shadcn install, token import, and dev server automatically. No terminal required from the designer.

---

### `stack.mdc`
Defines the core technology stack and project conventions.

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Components:** Shadcn/ui (with TDS4 tokens applied)
- **Language:** TypeScript (relaxed — `any` is acceptable, skip types where they slow you down)
- **Database:** None by default — mock data only
- **Deployment:** Vercel

Also covers project structure, file naming conventions, mock data rules, what to skip in prototypes, common commands, and tone of voice.

---

### `design-system.mdc`
Covers the Trackman Design System (TDS4) and how to apply it to prototypes.

- TDS4 React components are not yet available — use Shadcn/ui styled with TDS4 tokens
- Contains all CSS custom properties (brand colours, surfaces, content, strokes, data visualisation)
- Rules: always use CSS variables, never hardcode hex values, brand colour is orange (`#ec691a`), page background is `#f6f6f6`

---

### `prototype-scope.mdc`
Sets expectations for what a prototype should and shouldn't include.

- Build the happy path only with realistic mock data
- Skip authentication, error states, loading states, unit tests, performance optimisation, and responsive design (unless they're specifically being tested)
- Prototypes should look like Trackman products, not generic AI output
- Includes a complexity checklist to catch over-engineering

---

### `deploy.mdc`
Handles deployment to Vercel.

- Deploy using `bash vercel-deploy-kit/deploy.sh` from the project root
- First deploy requires a browser login; subsequent deploys go straight to production
- Check for a `.vercel` folder to determine if a project has been deployed before

---

### `supabase.mdc`
Optional backend setup using Supabase. Only activated when explicitly requested.

- Walks through installing `@supabase/supabase-js`, creating the client, and adding environment variables
- RLS is disabled for prototypes
- Credentials go in `.env.local` (never committed)
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
