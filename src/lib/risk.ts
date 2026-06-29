// Canonical risk band + colour spec — the SINGLE source of truth for how a
// 0-100 risk_pct maps to a colour on every live overlay (cloud /live, agent-pc
// «Шууд харах»). The reference UX uses three bands: green → royal-blue → red,
// brand-aligned (тас хар + royal-blue #2563EB).
//
// IMPORTANT: these are VISUAL band cutoffs on the already-computed risk_pct.
// They are deliberately decoupled from the behaviour-engine score *weights*
// (calibration), which are tuned separately against the eval harness. The agent
// mirrors these exact values in Python (sentry_agent_pc/edge/overlay.py); keep
// the two in sync.

export type RiskBand = "low" | "medium" | "high";

/** risk_pct ≥ this → MEDIUM (royal-blue). */
export const RISK_MEDIUM_MIN = 30;
/** risk_pct ≥ this → HIGH (red). */
export const RISK_HIGH_MIN = 70;

/** Brand-aligned risk palette. low=green, medium=royal-blue, high=red. */
export const RISK_COLORS: Record<RiskBand, string> = {
  low: "#22C55E", // green-500
  medium: "#2563EB", // royal-blue (brand primary)
  high: "#EF4444", // red-500
};

/** Map a 0-100 risk_pct to its visual band. */
export function riskBand(pct: number): RiskBand {
  if (pct >= RISK_HIGH_MIN) return "high";
  if (pct >= RISK_MEDIUM_MIN) return "medium";
  return "low";
}

/** Map a 0-100 risk_pct directly to its hex colour. */
export function riskColor(pct: number): string {
  return RISK_COLORS[riskBand(pct)];
}
