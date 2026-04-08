export type RatingReport = {
	communityFocus: string;
	id: string;
	publishedAt: string;
	score: number;
	titleKey: string;
	summaryKey: string;
};

export const ratingReports: RatingReport[] = [
	{
		communityFocus: 'open-data-governance',
		id: '2026-03-open-data-governance',
		publishedAt: '2026-03-18',
		score: 74,
		titleKey: 'pages.news.reports.openDataGovernance.title',
		summaryKey: 'pages.news.reports.openDataGovernance.summary',
	},
	{
		communityFocus: 'identity-wallet-interoperability',
		id: '2026-02-identity-wallet-interoperability',
		publishedAt: '2026-02-05',
		score: 68,
		titleKey: 'pages.news.reports.identityWalletInteroperability.title',
		summaryKey: 'pages.news.reports.identityWalletInteroperability.summary',
	},
	{
		communityFocus: 'public-cloud-exit-readiness',
		id: '2025-12-public-cloud-exit-readiness',
		publishedAt: '2025-12-11',
		score: 61,
		titleKey: 'pages.news.reports.publicCloudExitReadiness.title',
		summaryKey: 'pages.news.reports.publicCloudExitReadiness.summary',
	},
];
