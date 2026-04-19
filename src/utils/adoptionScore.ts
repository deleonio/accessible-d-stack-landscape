import { AdoptionResult, Item, ParticipantRole, Stack, StackItemStatus } from '../types';

// ---------------------------------------------------------------------------
// Adoption Score — network-effect signal (independent of Sovereignty Score)
// ---------------------------------------------------------------------------
// Formula constants — named for transparency and easy adjustment.

/** Contribution weight per participant role. Higher = more responsibility. */
export const ROLE_W: Record<ParticipantRole, number> = {
	maintainer: 1.0,
	contributor: 0.8,
	consumer: 0.5,
	funder: 0.4,
};

/** Contribution weight per item status in a stack. */
export const STATUS_W: Record<StackItemStatus, number> = {
	recommended: 1.0,
	approved: 0.7,
	deprecated: 0.1,
};

/**
 * Size dampening factor for a stack.
 * Large stacks (e.g. Germany ~380 items) must not dominate small stacks
 * (e.g. EBSI ~19 items). Scales from 1.0 at 20 items down to ~0.54 at 380 items.
 */
export function sizeDamp(stackSize: number): number {
	return 1 / (1 + Math.log10(Math.max(1, stackSize / 20)));
}

/** Transitive coverage multiplier (1-hop only). */
export const GAMMA = 0.3;

/** Diversity multiplier base (contribution when diversity = 0). */
export const DIVERSITY_BASE = 0.6;

/** Diversity multiplier coefficient (added when diversity = 1). */
export const DIVERSITY_WEIGHT = 0.4;

/**
 * Minimum sovereignty score for an item or stack average to qualify
 * as "sovereign" for the sovereignAdoptionScore.
 */
export const SOVEREIGN_THRESHOLD = 61;

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

type StackPresence = {
	stackId: string;
	role: ParticipantRole;
	status: StackItemStatus;
	stackSize: number;
	stackCountry: string; // '_unknown' when stack.country is absent
	stackAvgSovereignty: number;
};

/** Compute the average sovereignty score of a stack's items (raw scores). */
function stackAvgSov(stack: Stack, itemById: Map<string, Item>): number {
	let sum = 0;
	let count = 0;
	for (const si of stack.items) {
		const item = itemById.get(si.itemId);
		if (item?.sovereigntyScore !== undefined) {
			sum += item.sovereigntyScore;
			count++;
		}
	}
	return count > 0 ? sum / count : 0;
}

/** Simpson diversity index over a list of country buckets (0 = homogeneous, 1 = diverse). */
function simpsonDiversity(presences: StackPresence[]): number {
	if (presences.length === 0) return 0;
	const countryCounts = new Map<string, number>();
	for (const p of presences) {
		countryCounts.set(p.stackCountry, (countryCounts.get(p.stackCountry) ?? 0) + 1);
	}
	const total = presences.length;
	let sumSquares = 0;
	for (const count of countryCounts.values()) {
		const proportion = count / total;
		sumSquares += proportion * proportion;
	}
	return 1 - sumSquares;
}

/** Weighted direct coverage for a list of stack presences. */
function directCov(presences: StackPresence[]): number {
	let dc = 0;
	for (const p of presences) {
		dc += ROLE_W[p.role] * STATUS_W[p.status] * sizeDamp(p.stackSize);
	}
	return dc;
}

/**
 * Build rawAdoption value from direct coverage, transitive coverage, and diversity.
 */
function rawAdoption(dc: number, tc: number, diversity: number): number {
	return Math.log1p(dc + tc) * (DIVERSITY_BASE + DIVERSITY_WEIGHT * diversity);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export type ReverseDependencyEntry = {
	sourceItemId: string;
	type: string;
	scope?: string;
};

/**
 * Compute adoption scores for all items.
 *
 * @param items    Full item catalog (with sovereigntyScore pre-computed)
 * @param stacks   All curated stacks
 * @param reverseDeps  Reverse-dependency index: reverseDeps[itemId] = items that depend on itemId
 * @returns        Map from itemId to AdoptionResult (score 0–100, normalized across all items)
 */
export function computeAdoptionScores(items: Item[], stacks: Stack[], reverseDeps: Record<string, ReverseDependencyEntry[]>): Map<string, AdoptionResult> {
	const itemById = new Map<string, Item>(items.map((i) => [i.id, i]));

	// Precompute average sovereignty score per stack
	const stackSovMap = new Map<string, number>();
	for (const stack of stacks) {
		stackSovMap.set(stack.id, stackAvgSov(stack, itemById));
	}

	// Build per-item list of stack presences (all stacks)
	const presenceMap = new Map<string, StackPresence[]>();
	for (const item of items) {
		presenceMap.set(item.id, []);
	}
	for (const stack of stacks) {
		const stackSize = stack.items.length;
		const avgSov = stackSovMap.get(stack.id) ?? 0;
		const country = stack.country ?? '_unknown';
		for (const si of stack.items) {
			const list = presenceMap.get(si.itemId);
			if (list) {
				list.push({
					stackId: stack.id,
					role: si.role,
					status: si.status,
					stackSize,
					stackCountry: country,
					stackAvgSovereignty: avgSov,
				});
			}
		}
	}

	// Direct coverage (all stacks)
	const dcMap = new Map<string, number>();
	for (const item of items) {
		dcMap.set(item.id, directCov(presenceMap.get(item.id) ?? []));
	}

	// Transitive coverage (all stacks, 1-hop)
	// item gets credit for being a dependency of widely-used items
	const tcMap = new Map<string, number>();
	for (const item of items) {
		const revDeps = reverseDeps[item.id] ?? [];
		let tc = 0;
		for (const rev of revDeps) {
			tc += GAMMA * (dcMap.get(rev.sourceItemId) ?? 0);
		}
		tcMap.set(item.id, tc);
	}

	// Diversity (all stacks)
	const divMap = new Map<string, number>();
	for (const item of items) {
		divMap.set(item.id, simpsonDiversity(presenceMap.get(item.id) ?? []));
	}

	// Raw adoption (all stacks)
	const rawMap = new Map<string, number>();
	for (const item of items) {
		rawMap.set(item.id, rawAdoption(dcMap.get(item.id) ?? 0, tcMap.get(item.id) ?? 0, divMap.get(item.id) ?? 0));
	}
	const maxRaw = Math.max(0, ...(rawMap.values() as Iterable<number>));

	// Sovereign presences: stacks with avgSovereignty >= SOVEREIGN_THRESHOLD
	const sovPresenceMap = new Map<string, StackPresence[]>();
	for (const item of items) {
		const itemSov = item.sovereigntyScore ?? 0;
		if (itemSov < SOVEREIGN_THRESHOLD) {
			sovPresenceMap.set(item.id, []);
		} else {
			sovPresenceMap.set(
				item.id,
				(presenceMap.get(item.id) ?? []).filter((p) => p.stackAvgSovereignty >= SOVEREIGN_THRESHOLD),
			);
		}
	}

	// Sovereign direct coverage
	const sovDcMap = new Map<string, number>();
	for (const item of items) {
		sovDcMap.set(item.id, directCov(sovPresenceMap.get(item.id) ?? []));
	}

	// Sovereign transitive coverage
	const sovTcMap = new Map<string, number>();
	for (const item of items) {
		const itemSov = item.sovereigntyScore ?? 0;
		if (itemSov < SOVEREIGN_THRESHOLD) {
			sovTcMap.set(item.id, 0);
			continue;
		}
		const revDeps = reverseDeps[item.id] ?? [];
		let tc = 0;
		for (const rev of revDeps) {
			const sourceItemSov = itemById.get(rev.sourceItemId)?.sovereigntyScore ?? 0;
			if (sourceItemSov >= SOVEREIGN_THRESHOLD) {
				tc += GAMMA * (sovDcMap.get(rev.sourceItemId) ?? 0);
			}
		}
		sovTcMap.set(item.id, tc);
	}

	// Sovereign diversity
	const sovDivMap = new Map<string, number>();
	for (const item of items) {
		sovDivMap.set(item.id, simpsonDiversity(sovPresenceMap.get(item.id) ?? []));
	}

	// Sovereign raw adoption
	const sovRawMap = new Map<string, number>();
	for (const item of items) {
		sovRawMap.set(item.id, rawAdoption(sovDcMap.get(item.id) ?? 0, sovTcMap.get(item.id) ?? 0, sovDivMap.get(item.id) ?? 0));
	}
	const maxSovRaw = Math.max(0, ...(sovRawMap.values() as Iterable<number>));

	// Assemble results
	const result = new Map<string, AdoptionResult>();
	for (const item of items) {
		const raw = rawMap.get(item.id) ?? 0;
		const sovRaw = sovRawMap.get(item.id) ?? 0;
		result.set(item.id, {
			score: maxRaw > 0 ? Math.round((100 * raw) / maxRaw) : 0,
			sovereignScore: maxSovRaw > 0 ? Math.round((100 * sovRaw) / maxSovRaw) : 0,
			directCoverage: dcMap.get(item.id) ?? 0,
			transitiveCoverage: tcMap.get(item.id) ?? 0,
			diversity: divMap.get(item.id) ?? 0,
			usedInStacks: (presenceMap.get(item.id) ?? []).map((p) => p.stackId),
		});
	}
	return result;
}
