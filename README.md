# sentry-ui-kit

The shared design system for **Chipmo Sentry** — React 19 components + Tailwind v4 design tokens consumed by
[sentry-frontend](https://github.com/Chipmo-Sentry/sentry-frontend) and
[sentry-superadmin](https://github.com/Chipmo-Sentry/sentry-superadmin) (and mirrored by
[sentry-landing](https://github.com/Chipmo-Sentry/sentry-landing)). It is the single source of brand truth:
one orange (`#f97316`) + slate palette, Inter/JetBrains-Mono type, and the alert-level colour semantics that
appear everywhere from the live overlay to email.

Vite 6 (library mode) · React 19 · Tailwind v4 (`@theme`) · Radix UI · TypeScript · Apache-2.0

Package: `@chipmo-sentry/ui-kit` · published to **GitHub Packages** (restricted).

---

## Components

13 components (plus a `cn` class-merge helper), all exported from the `src/index.ts` barrel:

| Component | Parts |
|---|---|
| **Button** | variants `primary / secondary / ghost / danger / outline`; sizes `sm / md / lg / icon` |
| **Card** | Card · CardHeader · CardTitle · CardDescription · CardContent · CardFooter |
| **Input** | labelled text input |
| **Logo** | mark + optional wordmark |
| **Spinner** | `sm / md / lg` |
| **Badge** | alert-level + status variants |
| **Avatar** | Avatar · AvatarImage · AvatarFallback (Radix) |
| **Modal** | Radix Dialog — Trigger · Content · Header · Title · Description · Footer · Close |
| **Dropdown** | Radix Dropdown — Trigger · Content · Item · Checkbox/Radio items · Group · Label · Separator · Sub · Portal |
| **Toast** | Radix Toast — Provider · Viewport · Title · Description · Close |
| **EmptyState** | icon + title + description + action |
| **Table** | Table · Header · Body · Row · Head · Cell · Caption · Footer |

## Design tokens (`src/styles.css`)

Tailwind v4 `@theme` block — the brand contract every app inherits:

- **Primary:** `#f97316` (orange-500) + `#fff7ed` tint
- **Neutrals:** slate ramp (bg `#ffffff`, surface `#f8fafc`, text `#0f172a`, border `#e2e8f0`, …)
- **Alert levels:** `ignore` (slate) · `log` (blue) · `notify` (orange) · `review` (red) — the colours that
  drive 🟢🟡🔴 risk overlays and alert badges
- **Status:** success / warning / danger · **Fonts:** Inter (sans), JetBrains Mono (mono) · radius `0.5rem`

---

## Usage

```bash
# .npmrc — point the scope at GitHub Packages
@chipmo-sentry:registry=https://npm.pkg.github.com

npm install @chipmo-sentry/ui-kit
```

```tsx
import { Button, Card, Badge } from "@chipmo-sentry/ui-kit";
import "@chipmo-sentry/ui-kit/styles.css";   // once, at app root

<Card>
  <Button variant="primary">Хадгалах</Button>
  <Badge level="notify">Сэрэмжлүүлэг</Badge>
</Card>
```

During local development the web apps depend on this package as `file:../sentry-ui-kit`, so build it first:
`npm install && npm run build`.

---

## Develop

```bash
npm install
npm run build          # Vite library build → dist/{index.js, index.d.ts, styles.css}
npm run dev            # build --watch
npm run showcase:dev   # component playground (Vite dev server)
npm run typecheck      # tsc --noEmit
npm run lint           # ESLint (max-warnings 0)
```

```
src/
├── components/   — one file per component
├── lib/cn.ts     — clsx + tailwind-merge
├── index.ts      — barrel export (components + cn)
└── styles.css    — Tailwind v4 @theme tokens
showcase/         — deployable component gallery
```

Build outputs are ESM-only; React, lucide-react, and all `@radix-ui/*` packages are externalised as peers,
so consumers control their versions.

---

## Releasing

- **CI** (`.github/workflows`) — typecheck + build asserts on every push/PR.
- **Publish on tag** — pushing a `v*` tag publishes the package to GitHub Packages.
- **Showcase deploy** — `railway.toml` + Dockerfile deploy the showcase gallery to Railway
  (`sentry-ui-kit-production.up.railway.app`) on push.

---

## Related repos

- [sentry-frontend](https://github.com/Chipmo-Sentry/sentry-frontend) · [sentry-superadmin](https://github.com/Chipmo-Sentry/sentry-superadmin) — consumers
- [sentry-landing](https://github.com/Chipmo-Sentry/sentry-landing) — mirrors the tokens (no React dep)

Platform overview: [Sentry-v.3 README](../README.md).
