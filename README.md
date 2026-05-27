# sentry-ui-kit

Shared design system for **Chipmo Sentry** — React 19 components + Tailwind v4 design tokens used by [sentry-landing](https://github.com/Chipmo-Sentry/sentry-landing), [sentry-frontend](https://github.com/Chipmo-Sentry/sentry-frontend), and [sentry-superadmin](https://github.com/Chipmo-Sentry/sentry-superadmin).

React 19 · Vite library mode · Tailwind CSS v4 (CSS-first `@theme`) · Radix UI primitives · Lucide icons · Apache 2.0

---

## Install (consumer-side)

This package is published to **GitHub Packages**, not the public npm registry. Each consumer repo needs an `.npmrc`:

```ini
# .npmrc in the consumer repo
@chipmo-sentry:registry=https://npm.pkg.github.com
```

Then:

```bash
npm install @chipmo-sentry/ui-kit
```

CI auth uses `NODE_AUTH_TOKEN` (read-only PAT for downloads).

---

## Usage

```tsx
// 1. Import the stylesheet once at the app's root
import "@chipmo-sentry/ui-kit/styles.css";

// 2. Use components
import { Button, Card, CardHeader, CardTitle, Input, Logo, Spinner } from "@chipmo-sentry/ui-kit";

export function Login() {
  return (
    <Card className="mx-auto mt-20 w-96">
      <CardHeader>
        <Logo withWordmark />
        <CardTitle>Нэвтрэх</CardTitle>
      </CardHeader>
      <form className="space-y-3 p-6 pt-0">
        <Input type="email" placeholder="email@chipmo.mn" />
        <Input type="password" placeholder="••••••••" />
        <Button className="w-full">Нэвтрэх</Button>
      </form>
    </Card>
  );
}
```

The CSS file provides Tailwind v4 `@theme` design tokens (brand colors, typography, radius). Consumers can reference them in their own Tailwind utilities — `bg-primary`, `text-foreground`, `bg-level-notify`, etc.

---

## Components (M1 — 5 of 12)

| Component | Variants / props |
|---|---|
| `Button` | variant: `primary`/`secondary`/`ghost`/`danger`/`outline`; size: `sm`/`md`/`lg`/`icon`; `asChild` |
| `Card` + `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` | composable card |
| `Input` | standard HTML props |
| `Logo` | `withWordmark` boolean |
| `Spinner` | size: `sm`/`md`/`lg`; `label` (a11y) |

Planned for Session 2 (M2 milestone): Badge, Avatar, Modal (Radix Dialog), Dropdown, Toast, EmptyState, Table.

---

## Design tokens (excerpt)

CSS custom properties exposed via Tailwind v4 `@theme`:

```css
--color-primary           /* Chipmo orange */
--color-primary-foreground
--color-background
--color-foreground
--color-muted
--color-muted-foreground
--color-border
--color-ring

/* Alert level palette — semantic */
--color-level-ignore
--color-level-log
--color-level-notify
--color-level-review

--color-success / --color-warning / --color-danger

--font-sans   /* Inter */
--font-mono   /* JetBrains Mono */
--radius      /* 0.5rem */
```

---

## Develop

```bash
npm install
npm run typecheck      # tsc --noEmit
npm run build          # vite build → dist/{index.js,index.d.ts,styles.css}
npm run dev            # vite build --watch
```

The build emits **ESM-only**, with externalized React and Radix peers so consumers bring their own copies.

---

## Publish

Bump version, then push a git tag matching `v<x.y.z>` — GitHub Actions builds + publishes to `@chipmo-sentry` on GitHub Packages (workflow TBD next session).

---

## Related repos

Platform overview: [Sentry-v.3 README](../README.md) (local workspace)
