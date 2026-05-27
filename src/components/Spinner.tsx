import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "../lib/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-10 w-10",
} as const;

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = "md", label = "Уншиж байна…", ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      aria-live="polite"
      className={cn("inline-flex items-center gap-2 text-[var(--color-muted-foreground)]", className)}
      {...props}
    >
      <Loader2 className={cn("animate-spin", sizeMap[size])} aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  ),
);
Spinner.displayName = "Spinner";
