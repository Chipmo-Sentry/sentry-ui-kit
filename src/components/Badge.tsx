import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      tone: {
        neutral:
          "bg-[var(--color-muted)] text-[var(--color-foreground)]",
        ignore:
          "bg-[var(--color-level-ignore)]/15 text-[var(--color-level-ignore)]",
        log: "bg-[var(--color-level-log)]/15 text-[var(--color-level-log)]",
        notify:
          "bg-[var(--color-level-notify)]/15 text-[var(--color-level-notify)]",
        review:
          "bg-[var(--color-level-review)]/15 text-[var(--color-level-review)]",
        success:
          "bg-[var(--color-success)]/15 text-[var(--color-success)]",
        warning:
          "bg-[var(--color-warning)]/15 text-[var(--color-warning)]",
        danger:
          "bg-[var(--color-danger)]/15 text-[var(--color-danger)]",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ tone }), className)}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";

export { badgeVariants };
