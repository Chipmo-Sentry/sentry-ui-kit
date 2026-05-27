import * as React from "react";

import { cn } from "../lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-[var(--radius)] border border-[var(--color-border)] " +
          "bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-foreground)] " +
          "placeholder:text-[var(--color-muted-foreground)] " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] " +
          "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
