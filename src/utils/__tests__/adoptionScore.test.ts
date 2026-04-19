import { describe, expect, it } from 'vitest';
import { AdoptionResult, Item, Stack } from '../../types';
import { SOVEREIGN_THRESHOLD, computeAdoptionScores } from '../adoptionScore';

// ---------------------------------------------------------------------------
// Test fixtures
// ---------------------------------------------------------------------------

function makeItem(id: string, sovereigntyScore = 50): Item {
	return {
		id,
		name: { de: id, en: id },
		layer: 'infrastructure',
		description: { de: id, en: id },
		oss: true,
		tags: [],
		sovereigntyCriteria: {
			openSource: true,
			euHeadquartered: false,
			hasAudit: false,
			permissiveLicense: true,
			matureProject: false,
			selfHostable: true,
			dataPortability: false,
			openStandards: false,
			noTelemetryByDefault: false,
		},
		sovereigntyScore,
	};
}

function makeStack(id: string, country: string | undefined, items: Stack['items']): Stack {
	return {
		id,
		name: { de: id, en: id },
		version: '1.0.0',
		country,
		items,
	};
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('computeAdoptionScores', () => {
	it('item without any stack occurrence → adoptionScore === 0', () => {
		const items = [makeItem('alpha'), makeItem('beta')];
		const stacks = [makeStack('s1', 'DE', [{ itemId: 'beta', status: 'recommended', role: 'maintainer' }])];
		const result = computeAdoptionScores(items, stacks, {});
		expect(result.get('alpha')?.score).toBe(0);
	});

	it('item only as deprecated/consumer in 1 stack → small score (< 10)', () => {
		const items = [makeItem('alpha'), makeItem('beta')];
		// beta is in many stacks with high weights → will be max
		const stacks = [
			makeStack('s1', 'DE', [
				{ itemId: 'alpha', status: 'deprecated', role: 'consumer' },
				{ itemId: 'beta', status: 'recommended', role: 'maintainer' },
			]),
			makeStack('s2', 'FR', [{ itemId: 'beta', status: 'recommended', role: 'maintainer' }]),
			makeStack('s3', 'AT', [{ itemId: 'beta', status: 'recommended', role: 'maintainer' }]),
		];
		const result = computeAdoptionScores(items, stacks, {});
		const alphaScore = result.get('alpha')?.score ?? 0;
		expect(alphaScore).toBeGreaterThanOrEqual(0);
		expect(alphaScore).toBeLessThan(10);
	});

	it('item as maintainer/recommended in many stacks → score near 100', () => {
		const items = [makeItem('alpha'), makeItem('beta')];
		const stacks = Array.from({ length: 10 }, (_, i) =>
			makeStack(`s${i}`, `C${i}`, [
				{ itemId: 'alpha', status: 'recommended', role: 'maintainer' },
				{ itemId: 'beta', status: 'deprecated', role: 'consumer' },
			]),
		);
		const result = computeAdoptionScores(items, stacks, {});
		const alphaScore = result.get('alpha')?.score ?? 0;
		expect(alphaScore).toBe(100); // alpha dominates so it gets the max
	});

	it('SIZE_DAMP: 19-item stack and 380-item stack give comparable contributions', () => {
		// If we add one item to both a tiny and a huge stack, the huge stack's
		// contribution should be meaningfully smaller (at least 30% less).
		const items = [makeItem('alpha')];

		const smallItems: Stack['items'] = Array.from({ length: 19 }, (_, i) => ({ itemId: `item${i}`, status: 'approved' as const, role: 'consumer' as const }));
		smallItems.push({ itemId: 'alpha', status: 'recommended', role: 'maintainer' });
		const smallStack = makeStack('small', 'DE', smallItems);

		const largeItems: Stack['items'] = Array.from({ length: 380 }, (_, i) => ({ itemId: `item${i}`, status: 'approved' as const, role: 'consumer' as const }));
		largeItems.push({ itemId: 'alpha', status: 'recommended', role: 'maintainer' });
		const largeStack = makeStack('large', 'FR', largeItems);

		const resultSmall = computeAdoptionScores(items, [smallStack], {});
		const resultLarge = computeAdoptionScores(items, [largeStack], {});

		// Both should have score 100 (they're the only item being measured)
		// But directCoverage should differ showing dampening worked
		const dcSmall = resultSmall.get('alpha')?.directCoverage ?? 0;
		const dcLarge = resultLarge.get('alpha')?.directCoverage ?? 0;
		// Large stack (380 items / 20 = 19 → log10(19) ≈ 1.28) → damp ≈ 0.44
		// Small stack (20 items / 20 = 1 → log10(1) = 0) → damp = 1.0
		// So large should be significantly smaller
		expect(dcSmall).toBeGreaterThan(dcLarge * 1.5);
	});

	it('transitive coverage: item used as dependency of popular items gets credit', () => {
		const items = [makeItem('base'), makeItem('popular')];
		const stacks = Array.from({ length: 8 }, (_, i) =>
			makeStack(`s${i}`, `C${i}`, [{ itemId: 'popular', status: 'recommended', role: 'maintainer' }]),
		);
		// base has no direct stack presence but is a dependency of popular
		const reverseDeps = {
			base: [{ sourceItemId: 'popular', type: 'runtime' }],
		};
		const result = computeAdoptionScores(items, stacks, reverseDeps);
		const baseTc = result.get('base')?.transitiveCoverage ?? 0;
		const baseDc = result.get('base')?.directCoverage ?? 0;
		expect(baseDc).toBe(0);
		expect(baseTc).toBeGreaterThan(0);
	});

	it('sovereignAdoptionScore: item with sovereigntyScore < threshold gets 0', () => {
		const lowSovItem = makeItem('low', SOVEREIGN_THRESHOLD - 1);
		const highSovItem = makeItem('high', SOVEREIGN_THRESHOLD + 10);
		const items = [lowSovItem, highSovItem];

		// High-sovereignty stack (all items have high sov)
		const stacks = [
			makeStack('s1', 'DE', [
				{ itemId: 'low', status: 'recommended', role: 'maintainer' },
				{ itemId: 'high', status: 'recommended', role: 'maintainer' },
			]),
		];
		const result = computeAdoptionScores(items, stacks, {});
		// low sov item should have sovereignScore 0 (gated by item threshold)
		expect(result.get('low')?.sovereignScore).toBe(0);
		// high sov item may or may not get sovereignScore depending on stack avg sov
		const highAdoption = result.get('high') as AdoptionResult;
		expect(highAdoption).toBeDefined();
	});

	it('usedInStacks contains all stack IDs where item appears', () => {
		const items = [makeItem('alpha')];
		const stacks = [
			makeStack('stackA', 'DE', [{ itemId: 'alpha', status: 'recommended', role: 'consumer' }]),
			makeStack('stackB', 'FR', [{ itemId: 'alpha', status: 'approved', role: 'contributor' }]),
		];
		const result = computeAdoptionScores(items, stacks, {});
		const usedIn = result.get('alpha')?.usedInStacks ?? [];
		expect(usedIn).toContain('stackA');
		expect(usedIn).toContain('stackB');
		expect(usedIn).toHaveLength(2);
	});

	it('diversity: item in stacks from different countries scores higher than all in one country', () => {
		const countries = ['DE', 'FR', 'AT', 'NL', 'BE'];
		const items = [makeItem('diverse'), makeItem('homogeneous')];

		const diverseStacks = countries.map((c) =>
			makeStack(`s_${c}`, c, [{ itemId: 'diverse', status: 'recommended', role: 'maintainer' }]),
		);
		const homogeneousStacks = countries.map((_, i) =>
			makeStack(`sh_${i}`, 'DE', [{ itemId: 'homogeneous', status: 'recommended', role: 'maintainer' }]),
		);

		const resultDiverse = computeAdoptionScores(items, [...diverseStacks], {});
		const resultHomogeneous = computeAdoptionScores(items, [...homogeneousStacks], {});

		const diverseDiversity = resultDiverse.get('diverse')?.diversity ?? 0;
		const homoDiversity = resultHomogeneous.get('homogeneous')?.diversity ?? 0;
		expect(diverseDiversity).toBeGreaterThan(homoDiversity);
	});
});
