import { KolBadge, KolButton, KolCard, KolDrawer, KolImage } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { ITEMS, LAYERS } from '../data/catalog';
import { Item, ParticipantRole, StackItem } from '../types';
import { getLocalizedText } from '../utils';
import { computeSovereigntyScore } from '../utils/sovereigntyScore';

interface ArticleCardProps {
	article: Item;
	stackItem?: StackItem;
}

const ROLE_COLORS: Record<ParticipantRole, string> = {
	maintainer: '#1565c0',
	contributor: '#2e7d32',
	funder: '#e65100',
	consumer: '#546e7a',
};

function scoreColor(score: number): string {
	if (score >= 70) return '#2e7d32';
	if (score >= 40) return '#f57c00';
	return '#c62828';
}

export function ArticleCard({ article, stackItem }: ArticleCardProps) {
	const { i18n, t } = useTranslation();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [selectedArticle, setSelectedArticle] = useState(article);
	const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());
	const localizedArticleName = getLocalizedText(article.name, i18n.language);
	const localizedSelectedArticleName = getLocalizedText(selectedArticle.name, i18n.language);
	const category = LAYERS.find((c) => c.id === selectedArticle.layer);
	const categoryColor = category?.color ?? '#003d82';
	const categoryName = getLocalizedText(category?.name ?? { de: 'Allgemein', en: 'General', fr: 'Général' }, i18n.language);
	const relatedArticles = ITEMS.filter((candidate) => candidate.layer === selectedArticle.layer && candidate.id !== selectedArticle.id).sort((a, b) =>
		getLocalizedText(a.name, i18n.language).localeCompare(getLocalizedText(b.name, i18n.language), i18n.language),
	);

	const score = computeSovereigntyScore(article.sovereigntyCriteria);
	const selectedScore = computeSovereigntyScore(selectedArticle.sovereigntyCriteria);
	const criteriaKeys = Object.keys(article.sovereigntyCriteria) as Array<keyof typeof article.sovereigntyCriteria>;

	const renderArticleLogo = (logo: string | undefined, localizedName: string) => {
		if (!logo) {
			return null;
		}

		const src = failedLogos.has(logo) ? 'assets/broken-logo.svg' : logo;
		const handleImageError = () => {
			setFailedLogos((prev) => new Set([...prev, logo]));
		};

		return (
			<KolImage
				_src={src}
				_alt={localizedName}
				_loading="lazy"
				className="article-logo"
				_width={40}
				_height={40}
				_on={{
					error: handleImageError,
				}}
			/>
		);
	};

	return (
		<div className="article-card-wrapper">
			<KolCard _label={localizedArticleName} className="article-card">
				<div className="card-content">
					<div className="card-header">
						{renderArticleLogo(article.logo, localizedArticleName)}
						<span
							className="card-category-dot"
							style={{ background: categoryColor }}
							title={categoryName}
							aria-label={t('article.categoryAria', { category: categoryName })}
						/>{' '}
						<span
							className="card-score-badge"
							style={{ background: scoreColor(score), color: '#fff' }}
							title={t('article.scoreTitle')}
							aria-label={t('article.scoreAria', { score })}
						>
							{score}
						</span>
						{stackItem && (
							<span className="card-role-badge" style={{ background: ROLE_COLORS[stackItem.role], color: '#fff' }} title={t(`stack.roles.${stackItem.role}`)}>
								{t(`stack.roles.${stackItem.role}`)}
							</span>
						)}{' '}
					</div>
					<p className="card-description">{getLocalizedText(article.description, i18n.language)}</p>
					<div className="card-tags">
						{article.tags.slice(0, 4).map((tag) => (
							<KolBadge key={tag} _label={tag} _color="#e8eaed" className="tag-badge" />
						))}
					</div>
					<div className="card-action">
						<KolButton
							_label={t('article.openDetails')}
							_variant="secondary"
							_on={{
								onClick: () => {
									setSelectedArticle(article);
									setIsDrawerOpen(true);
								},
							}}
						/>
					</div>
				</div>
			</KolCard>

			<KolDrawer
				_label={t('article.detailsFor', { name: localizedSelectedArticleName })}
				_align="right"
				_hasCloser
				_open={isDrawerOpen}
				_on={{
					onClose: () => setIsDrawerOpen(false),
				}}
			>
				<div className="drawer-content">
					<KolCard _label={localizedSelectedArticleName} className="drawer-card">
						<div className="drawer-details">
							<div className="drawer-headline">
								{renderArticleLogo(selectedArticle.logo, localizedSelectedArticleName)}
								<div>
									<p className="drawer-category">{t('article.categoryLabel', { category: categoryName })}</p>
								</div>
							</div>{' '}
							<div className="drawer-score-section">
								<p className="drawer-score-title">{t('article.sovereigntyScore')}</p>
								<div className="drawer-score-total" style={{ color: scoreColor(selectedScore) }}>
									{selectedScore}/100
								</div>
								<ul className="drawer-criteria-list">
									{criteriaKeys.map((key) => (
										<li key={key} className={`drawer-criteria-item drawer-criteria-item--${selectedArticle.sovereigntyCriteria[key] ? 'yes' : 'no'}`}>
											<span className="drawer-criteria-icon" aria-hidden="true">
												{selectedArticle.sovereigntyCriteria[key] ? '✓' : '✗'}
											</span>
											{t(`article.criteria.${key}`)}
										</li>
									))}
								</ul>
								{stackItem?.rationale && (
									<div className="drawer-rationale">
										<p className="drawer-rationale__title">{t('stack.rationale')}</p>
										<p>{getLocalizedText(stackItem.rationale, i18n.language)}</p>
									</div>
								)}
							</div>{' '}
							<p className="drawer-description">{getLocalizedText(selectedArticle.description, i18n.language)}</p>
							<div className="drawer-tags">
								{selectedArticle.tags.map((tag) => (
									<KolBadge key={`${selectedArticle.id}-${tag}`} _label={tag} _color="#e8eaed" className="tag-badge" />
								))}
							</div>
							{relatedArticles.length > 0 && (
								<div className="drawer-related">
									<p className="drawer-related__title">{t('article.relatedTitle')}</p>
									<ul className="drawer-related__list">
										{relatedArticles.map((relatedArticle) => (
											<li key={relatedArticle.id} className="drawer-related__item">
												<button className="drawer-related__link" onClick={() => setSelectedArticle(relatedArticle)}>
													<span className="drawer-related__link-text">{getLocalizedText(relatedArticle.name, i18n.language)}</span>
													<span className="drawer-related__link-icon" aria-hidden="true">
														›
													</span>
												</button>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</KolCard>
				</div>
			</KolDrawer>
		</div>
	);
}
