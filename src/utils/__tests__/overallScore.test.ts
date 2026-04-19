import { describe, expect, it } from 'vitest';
import {
	OVERALL_WEIGHT_ADOPTION,
	OVERALL_WEIGHT_SOVEREIGN_ADOPTION,
	OVERALL_WEIGHT_SOVEREIGNTY,
	computeOverallScore,
} from '../overallScore';

describe('computeOverallScore', () => {
	it('weights sum to 1.0', () => {
		const total = OVERALL_WEIGHT_SOVEREIGNTY + OVERALL_WEIGHT_SOVEREIGN_ADOPTION + OVERALL_WEIGHT_ADOPTION;
		expect(total).toBeCloseTo(1.0, 10);
	});

	it('all inputs 0 → result 0', () => {
		expect(computeOverallScore({ sovereignty: 0, sovereignAdoption: 0, adoption: 0 })).toBe(0);
	});

	it('all inputs 100 → result 100', () => {
		expect(computeOverallScore({ sovereignty: 100, sovereignAdoption: 100, adoption: 100 })).toBe(100);
	});

	it('result stays in [0, 100] for arbitrary 0–100 inputs', () => {
		const cases = [
			{ sovereignty: 0, sovereignAdoption: 0, adoption: 100 },
			{ sovereignty: 100, sovereignAdoption: 0, adoption: 0 },
			{ sovereignty: 50, sovereignAdoption: 50, adoption: 50 },
			{ sovereignty: 75, sovereignAdoption: 40, adoption: 20 },
		];
		for (const inputs of cases) {
			const result = computeOverallScore(inputs);
			expect(result).toBeGreaterThanOrEqual(0);
			expect(result).toBeLessThanOrEqual(100);
		}
	});

	it('sovereignty dominates (60% weight)', () => {
		const highSov = computeOverallScore({ sovereignty: 100, sovereignAdoption: 0, adoption: 0 });
		const highAdopt = computeOverallScore({ sovereignty: 0, sovereignAdoption: 100, adoption: 100 });
		// 100*0.60=60 vs 0*0.25+100*0.15=40 → sovereignty scenario wins
		expect(highSov).toBeGreaterThan(highAdopt);
	});

	it('result is rounded to integer', () => {
		const result = computeOverallScore({ sovereignty: 71, sovereignAdoption: 33, adoption: 17 });
		expect(Number.isInteger(result)).toBe(true);
	});
});
