import { AlertTriangle, type LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "../lib/cn";
import { Button } from "./Button";

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Error message to show. Defaults to a generic Mongolian message. */
  message?: string;
  /** Optional title above the message. */
  title?: string;
  /** Icon override. Defaults to a warning triangle. */
  icon?: LucideIcon;
  /** When provided, renders a "Дахин оролдох" retry button that calls this. */
  onRetry?: () => void;
}

export const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  (
    {
      className,
      message = "Алдаа гарлаа. Дахин оролдоно уу.",
      title = "Алдаа гарлаа",
      icon: Icon = AlertTriangle,
      onRetry,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-[var(--radius)] " +
          "border-2 border-dashed border-[var(--color-danger)]/40 p-12 text-center",
        className,
      )}
      {...props}
    >
      <div className="rounded-full bg-[var(--color-danger)]/10 p-3 text-[var(--color-danger)]">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-base font-semibold text-[var(--color-foreground)]">
        {title}
      </h3>
      <p className="max-w-sm text-sm text-[var(--color-muted-foreground)]">
        {message}
      </p>
      {onRetry ? (
        <Button variant="outline" size="sm" className="mt-2" onClick={onRetry}>
          Дахин оролдох
        </Button>
      ) : null}
    </div>
  ),
);
ErrorState.displayName = "ErrorState";
