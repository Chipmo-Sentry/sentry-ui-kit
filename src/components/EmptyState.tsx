import type { LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "../lib/cn";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon: Icon, title, description, action, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-[var(--radius)] " +
          "border-2 border-dashed border-[var(--color-border)] p-12 text-center",
        className,
      )}
      {...props}
    >
      {Icon ? (
        <div className="rounded-full bg-[var(--color-muted)] p-3 text-[var(--color-muted-foreground)]">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
      ) : null}
      <h3 className="text-base font-semibold text-[var(--color-foreground)]">{title}</h3>
      {description ? (
        <p className="max-w-sm text-sm text-[var(--color-muted-foreground)]">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  ),
);
EmptyState.displayName = "EmptyState";
