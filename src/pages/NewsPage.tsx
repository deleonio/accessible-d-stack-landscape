import { KolCard } from '@public-ui/preact';
import { ComponentType } from 'preact';
import { useMemo } from 'preact/hooks';
import { useTranslation } from 'react-i18next';

type NewsModule = {
	default: ComponentType;
	metadata?: {
		title?: string;
		summary?: string;
	};
};

type NewsEntry = {
	Content: ComponentType;
	date: string;
	slug: string;
	summary: string;
	title: string;
};

const modules = import.meta.glob('../content/news/*.{md,mdx}', {
	eager: true,
}) as Record<string, NewsModule>;

function normalizeEntries(): NewsEntry[] {
	return Object.entries(modules)
		.map(([path, module]) => {
			const fileName = path.split('/').at(-1) ?? '';
			const match = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.(md|mdx)$/);

			if (!match || !module.default) {
				return null;
			}

			const [, date, slug] = match;

			return {
				Content: module.default,
				date,
				slug,
				summary: module.metadata?.summary ?? slug,
				title: module.metadata?.title ?? slug,
			};
		})
		.filter((entry): entry is NewsEntry => entry !== null)
		.sort((a, b) => b.date.localeCompare(a.date));
}

export function NewsPage() {
	const { i18n, t } = useTranslation();
	const dateFormatter = new Intl.DateTimeFormat(i18n.language, { dateStyle: 'long' });
	const entries = useMemo(() => normalizeEntries(), []);

	return (
		<main id="main-content" className="content-page" aria-labelledby="news-page-title">
			<h2 id="news-page-title">{t('pages.news.title')}</h2>
			<p>{t('pages.news.description')}</p>

			<section className="news-page" aria-label={t('pages.news.sectionAria')}>
				<p className="news-page__hint">{t('pages.news.pushHint')}</p>

				{entries.length === 0 && <p>{t('pages.news.empty')}</p>}

				<div className="news-page__reports">
					{entries.map((entry) => {
						const publishedDate = dateFormatter.format(new Date(entry.date));
						const Content = entry.Content;

						return (
							<KolCard _label={entry.title} className="news-report-card" key={entry.slug}>
								<div className="news-report-card__meta">
									<span>{t('pages.news.metaDate', { date: publishedDate })}</span>
								</div>
								<h3>{entry.title}</h3>
								<p>{entry.summary}</p>
								<div className="news-report-card__content">
									<Content />
								</div>
							</KolCard>
						);
					})}
				</div>
			</section>
		</main>
	);
}
