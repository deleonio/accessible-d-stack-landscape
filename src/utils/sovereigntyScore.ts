import { SovereigntyCriteria } from '../types';

const WEIGHTS: Record<keyof SovereigntyCriteria, number> = {
	openSource: 30,
	euHeadquartered: 25,
	hasAudit: 20,
	permissiveLicense: 10,
	matureProject: 10,
	largeEcosystem: 5,
};

export function computeSovereigntyScore(criteria: SovereigntyCriteria): number {
	return (Object.keys(WEIGHTS) as Array<keyof SovereigntyCriteria>).reduce((sum, key) => sum + (criteria[key] ? WEIGHTS[key] : 0), 0);
}
