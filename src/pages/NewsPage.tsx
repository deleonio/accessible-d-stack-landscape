import { KolCard } from '@public-ui/preact';
import { useTranslation } from 'react-i18next';
import { ratingReports } from '../data/ratingReports';

export function NewsPage() {
	const { i18n, t } = useTranslation();
	const dateFormatter = new Intl.DateTimeFormat(i18n.language, { dateStyle: 'long' });

	return (
		<main id="main-content" className="content-page" aria-labelledby="news-page-title">
			<h2 id="news-page-title">{t('pages.news.title')}</h2>
			<p>{t('pages.news.description')}</p>

			<section className="news-page" aria-label={t('pages.news.sectionAria')}>
				<p className="news-page__hint">{t('pages.news.pushHint')}</p>
				<div className="news-page__reports">
					{ratingReports.map((report) => {
						const publishedDate = dateFormatter.format(new Date(report.publishedAt));

						return (
							<KolCard _label={t(report.titleKey)} className="news-report-card" key={report.id}>
								<div className="news-report-card__meta">
									<span>{t('pages.news.metaDate', { date: publishedDate })}</span>
									<span>{t('pages.news.metaScore', { score: report.score })}</span>
									<span>{t('pages.news.metaFocus', { focus: report.communityFocus })}</span>
								</div>
								<h3>{t(report.titleKey)}</h3>
								<p>{t(report.summaryKey)}</p>
							</KolCard>
						);
					})}
				</div>
			</section>
		</main>
	);
}
