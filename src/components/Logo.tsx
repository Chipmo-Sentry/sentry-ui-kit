import * as React from "react";

import { cn } from "../lib/cn";

export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  /** Show the wordmark next to the glyph. */
  withWordmark?: boolean;
}

/** Chipmo Sentry logo — eye/camera glyph in brand primary.
 * The geometry is intentionally simple so it renders well at favicon size. */
export const Logo = React.forwardRef<SVGSVGElement, LogoProps>(
  ({ className, withWordmark = false, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox={withWordmark ? "0 0 160 32" : "0 0 32 32"}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto", className)}
      role="img"
      aria-label="Chipmo Sentry"
      {...props}
    >
      {/* Glyph: outer lens ring + inner aperture */}
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="var(--color-primary, currentColor)"
        strokeWidth="2.5"
      />
      <circle cx="16" cy="16" r="5" fill="var(--color-primary, currentColor)" />
      <circle cx="20" cy="11" r="1.5" fill="var(--color-background, white)" />

      {withWordmark ? (
        <text
          x="40"
          y="22"
          fontFamily="var(--font-sans, system-ui)"
          fontSize="18"
          fontWeight="600"
          fill="var(--color-foreground, currentColor)"
        >
          Chipmo Sentry
        </text>
      ) : null}
    </svg>
  ),
);
Logo.displayName = "Logo";
