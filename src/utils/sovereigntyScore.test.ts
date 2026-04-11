import { describe, it, expect } from 'vitest';
import {
	computeSovereigntyScore,
	computeOwnerScore,
	computeSovereigntyScoreResult,
	getScoreCategory,
	getScoreCategoryColor,
	getScorePercentileInCategory,
} from './sovereigntyScore';
import { SovereigntyCriteria } from '../types';

describe('Sovereignty Score - Hybrid Scale', () => {
	describe('computeSovereigntyScore', () => {
		it('should return 0 for empty criteria', () => {
			const criteria: SovereigntyCriteria = {
				openSource: false,
				euHeadquartered: false,
				hasAudit: false,
				permissiveLicense: false,
				matureProject: false,
				largeEcosystem: false,
			};
			expect(computeSovereigntyScore(criteria)).toBe(0);
		});

		it('should return correct sum for all true criteria without owner', () => {
			const criteria: SovereigntyCriteria = {
				openSource: true,       // +30
				euHeadquartered: true,  // +25
				hasAudit: true,         // +20
				permissiveLicense: true,// +10
				matureProject: true,    // +10
				largeEcosystem: true,   // +5
			};
			// Total should be 100, but capped at 60 without ownerType
			expect(computeSovereigntyScore(criteria)).toBe(60);
		});

		it('should cap at 60 when ownerType is missing', () => {
			const criteria: SovereigntyCriteria = {
				openSource: true,
				euHeadquartered: true,
				hasAudit: true,
				permissiveLicense: true,
				matureProject: true,
				largeEcosystem: true,
			};
			expect(computeSovereigntyScore(criteria)).toBe(60);
		});

		it('should include ownerType points when provided', () => {
			const criteria: SovereigntyCriteria = {
				openSource: true,       // +30
				euHeadquartered: true,  // +25
				hasAudit: true,         // +20
				permissiveLicense: true,// +10
				matureProject: true,    // +10
				largeEcosystem: true,   // +5
				ownerType: 'independentConsortium', // +15
			};
			// 30+25+20+10+10+5+15 = 115, capped at 100
			expect(computeSovereigntyScore(criteria)).toBe(100);
		});

		it('should respect different owner types', () => {
			const baseTrue: SovereigntyCriteria = {
				openSource: true,       // +30
				euHeadquartered: true,  // +25
				hasAudit: true,         // +20
				permissiveLicense: true,// +10
				matureProject: true,    // +10
				largeEcosystem: true,   // +5
			};

			expect(computeSovereigntyScore({ ...baseTrue, ownerType: 'community' })).toBe(70);     // 60 (cap removed) + 10
			expect(computeSovereigntyScore({ ...baseTrue, ownerType: 'corporation' })).toBe(65);   // 60 + 5
			expect(computeSovereigntyScore({ ...baseTrue, ownerType: 'oneManShow' })).toBe(60);    // 60 + 0
		});
	});

	describe('computeOwnerScore', () => {
		it('should return 0 when ownerType is undefined', () => {
			expect(computeOwnerScore(undefined)).toBe(0);
		});

		it('should return correct scores for each owner type', () => {
			expect(computeOwnerScore('independentConsortium')).toBe(15);
			expect(computeOwnerScore('community')).toBe(10);
			expect(computeOwnerScore('corporation')).toBe(5);
			expect(computeOwnerScore('oneManShow')).toBe(0);
		});
	});

	describe('getScoreCategory', () => {
		it('should categorize scores correctly', () => {
			expect(getScoreCategory(10)).toBe('insufficient');   // 0-30
			expect(getScoreCategory(40)).toBe('minimal');        // 31-45
			expect(getScoreCategory(50)).toBe('adequate');       // 46-60
			expect(getScoreCategory(70)).toBe('good');           // 61-75
			expect(getScoreCategory(80)).toBe('excellent');      // 76-90
			expect(getScoreCategory(95)).toBe('outstanding');    // 91-100
		});

		it('should handle boundary values', () => {
			expect(getScoreCategory(0)).toBe('insufficient');
			expect(getScoreCategory(30)).toBe('insufficient');
			expect(getScoreCategory(31)).toBe('minimal');
			expect(getScoreCategory(45)).toBe('minimal');
			expect(getScoreCategory(46)).toBe('adequate');
			expect(getScoreCategory(60)).toBe('adequate');
			expect(getScoreCategory(61)).toBe('good');
			expect(getScoreCategory(75)).toBe('good');
			expect(getScoreCategory(76)).toBe('excellent');
			expect(getScoreCategory(90)).toBe('excellent');
			expect(getScoreCategory(91)).toBe('outstanding');
			expect(getScoreCategory(100)).toBe('outstanding');
		});

		it('should clamp out-of-range values', () => {
			expect(getScoreCategory(-10)).toBe('insufficient');
			expect(getScoreCategory(150)).toBe('outstanding');
		});
	});

	describe('getScoreCategoryColor', () => {
		it('should return correct colors for each category', () => {
			expect(getScoreCategoryColor(10)).toBe('#D32F2F');   // Red (insufficient)
			expect(getScoreCategoryColor(40)).toBe('#F57C00');   // Orange (minimal)
			expect(getScoreCategoryColor(50)).toBe('#F9A825');   // Yellow (adequate)
			expect(getScoreCategoryColor(70)).toBe('#7CB342');   // Light Green (good)
			expect(getScoreCategoryColor(80)).toBe('#388E3C');   // Green (excellent)
			expect(getScoreCategoryColor(95)).toBe('#1B5E20');   // Dark Green (outstanding)
		});
	});

	describe('getScorePercentileInCategory', () => {
		it('should return 0 for minimum in category', () => {
			expect(getScorePercentileInCategory(0)).toBe(0);
			expect(getScorePercentileInCategory(31)).toBe(0);
			expect(getScorePercentileInCategory(46)).toBe(0);
		});

		it('should return 100 for maximum in category', () => {
			expect(getScorePercentileInCategory(30)).toBe(100);
			expect(getScorePercentileInCategory(45)).toBe(100);
			expect(getScorePercentileInCategory(60)).toBe(100);
		});

		it('should return ~50 for midpoint in category', () => {
			// 31-45: midpoint = 38
			const percentile1 = getScorePercentileInCategory(38);
			expect(percentile1).toBeGreaterThan(45);
			expect(percentile1).toBeLessThan(55);

			// 46-60: midpoint = 53
			const percentile2 = getScorePercentileInCategory(53);
			expect(percentile2).toBeGreaterThan(45);
			expect(percentile2).toBeLessThan(55);
		});
	});

	describe('computeSovereigntyScoreResult', () => {
		it('should return complete result with all fields', () => {
			const criteria: SovereigntyCriteria = {
				openSource: true,
				euHeadquartered: true,
				hasAudit: false,
				permissiveLicense: true,
				matureProject: true,
				largeEcosystem: false,
				ownerType: 'community',
			};

			const result = computeSovereigntyScoreResult(criteria);

			expect(result).toHaveProperty('score');
			expect(result).toHaveProperty('category');
			expect(result).toHaveProperty('color');
			expect(result).toHaveProperty('percentileInCategory');

			expect(typeof result.score).toBe('number');
			expect(typeof result.category).toBe('string');
			expect(typeof result.color).toBe('string');
			expect(typeof result.percentileInCategory).toBe('number');
		});

		it('should have correct category and color for given score', () => {
			const criteria: SovereigntyCriteria = {
				openSource: true,       // +30
				euHeadquartered: false, // 0
				hasAudit: true,         // +20
				permissiveLicense: true,// +10
				matureProject: true,    // +10
				largeEcosystem: false,  // 0
				ownerType: 'community', // +10
			};

			// Score: 30+20+10+10+10 = 80
			const result = computeSovereigntyScoreResult(criteria);

			expect(result.score).toBe(80);
			expect(result.category).toBe('excellent');
			expect(result.color).toBe('#388E3C');
		});

		it('should handle missing ownerType correctly', () => {
			const criteria: SovereigntyCriteria = {
				openSource: true,       // +30
				euHeadquartered: true,  // +25
				hasAudit: true,         // +20
				permissiveLicense: true,// +10
				matureProject: true,    // +10
				largeEcosystem: true,   // +5
			};

			const result = computeSovereigntyScoreResult(criteria);

			expect(result.score).toBe(60);
			expect(result.category).toBe('adequate');
			expect(result.color).toBe('#F9A825');
		});

		it('should demonstrate real-world example: Kubernetes-like project', () => {
			const criteria: SovereigntyCriteria = {
				openSource: true,
				euHeadquartered: false,
				hasAudit: true,
				permissiveLicense: true,
				matureProject: true,
				largeEcosystem: true,
				ownerType: 'independentConsortium',
			};

			const result = computeSovereigntyScoreResult(criteria);

			expect(result.score).toBe(85);
			expect(result.category).toBe('excellent');
			expect(result.color).toBe('#388E3C');
		});

		it('should demonstrate real-world example: Proprietary software', () => {
			const criteria: SovereigntyCriteria = {
				openSource: false,
				euHeadquartered: false,
				hasAudit: true,
				permissiveLicense: false,
				matureProject: true,
				largeEcosystem: true,
				ownerType: 'corporation',
			};

			const result = computeSovereigntyScoreResult(criteria);

			expect(result.score).toBe(40);
			expect(result.category).toBe('minimal');
			expect(result.color).toBe('#F57C00');
		});
	});
});
