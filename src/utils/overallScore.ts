// ---------------------------------------------------------------------------
// Overall Score — default ranking signal
// ---------------------------------------------------------------------------
// Combines sovereignty (intrinsic quality) with adoption (network effect).
// All three inputs are normalized 0–100, so the result is also 0–100.
// The 6-category scale from getScoreCategory() remains valid for overallScore.

/** Weight of the raw Sovereignty Score in the combined overall ranking. */
export const OVERALL_WEIGHT_SOVEREIGNTY = 0.6;

/** Weight of the Sovereign Adoption Score (network effect among sovereign stacks). */
export const OVERALL_WEIGHT_SOVEREIGN_ADOPTION = 0.25;

/** Weight of the general Adoption Score (network effect across all stacks). */
export const OVERALL_WEIGHT_ADOPTION = 0.15;

/**
 * Compute the overall ranking score from its three components.
 * Result is in [0, 100].
 */
export function computeOverallScore({
	sovereignty,
	sovereignAdoption,
	adoption,
}: {
	sovereignty: number;
	sovereignAdoption: number;
	adoption: number;
}): number {
	return Math.round(
		OVERALL_WEIGHT_SOVEREIGNTY * sovereignty +
			OVERALL_WEIGHT_SOVEREIGN_ADOPTION * sovereignAdoption +
			OVERALL_WEIGHT_ADOPTION * adoption,
	);
}
