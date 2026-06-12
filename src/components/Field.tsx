import * as React from "react";

import { cn } from "../lib/cn";

export interface FieldProps {
  /** Visible label text above the control. */
  label: string;
  /** Marks the field as required with a red asterisk. */
  required?: boolean;
  /** Muted helper text under the control. */
  hint?: string;
  /** Validation error under the control; takes priority over `hint`. */
  error?: string;
  className?: string;
  /** The form control(s) being labeled. */
  children: React.ReactNode;
}

/** Labeled form field wrapper: label + control + hint/error text. */
export function Field({
  label,
  required,
  hint,
  error,
  className,
  children,
}: FieldProps) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1 block text-sm font-medium">
        {label}
        {required ? (
          <span className="text-[var(--color-danger)]"> *</span>
        ) : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-[var(--color-danger)]">
          {error}
        </span>
      ) : hint ? (
        <span className="mt-1 block text-xs text-[var(--color-muted-foreground)]">
          {hint}
        </span>
      ) : null}
    </label>
  );
}
