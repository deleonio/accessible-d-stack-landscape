import { describe, expect, it } from 'vitest';
import { computeOverallScore, OVERALL_WEIGHT_ADOPTION, OVERALL_WEIGHT_SOVEREIGN_ADOPTION, OVERALL_WEIGHT_SOVEREIGNTY } from '../overallScore';

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

	it('high sovereignty cannot be reduced below sovereigntyScore', () => {
		const highSov = computeOverallScore({ sovereignty: 100, sovereignAdoption: 0, adoption: 0 });
		// Even with zero adoption, score = max(100, 0.60*100 + 0.25*0 + 0.15*0) = max(100, 60) = 100
		expect(highSov).toBe(100);
	});

	it('adoption can boost score above sovereigntyScore', () => {
		const withAdoption = computeOverallScore({ sovereignty: 50, sovereignAdoption: 100, adoption: 100 });
		// 0.60*50 + 0.25*100 + 0.15*100 = 30 + 25 + 15 = 70 > 50
		expect(withAdoption).toBe(70);
		expect(withAdoption).toBeGreaterThan(50);
	});

	it('result is rounded to integer', () => {
		const result = computeOverallScore({ sovereignty: 71, sovereignAdoption: 33, adoption: 17 });
		expect(Number.isInteger(result)).toBe(true);
	});
});
