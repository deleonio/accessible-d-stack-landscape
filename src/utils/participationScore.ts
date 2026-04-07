import { Participant, ParticipantRole } from '../types';

const ROLE_WEIGHTS: Record<ParticipantRole, number> = {
	maintainer: 40,
	contributor: 25,
	funder: 20,
	consumer: 5,
};

export type ParticipationResult = {
	score: number;
	hasForeignFunder: boolean;
};

export function computeParticipationScore(participants: Participant[]): ParticipationResult {
	const score = Math.min(
		100,
		participants.reduce((sum, p) => sum + (ROLE_WEIGHTS[p.role] ?? 0), 0),
	);

	const hasForeignFunder = participants.some((p) => p.role === 'funder' && p.jurisdiction != null && p.jurisdiction !== 'EU');

	return { score, hasForeignFunder };
}
