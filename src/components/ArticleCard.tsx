import { KolBadge, KolButton, KolCard, KolDrawer, KolImage } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { Article } from '../types';
import { getLocalizedText } from '../utils';

interface ArticleCardProps {
	article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
	const { i18n, t } = useTranslation();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [selectedArticle, setSelectedArticle] = useState(article);
	const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());
	const localizedArticleName = getLocalizedText(article.name, i18n.language);
	const localizedSelectedArticleName = getLocalizedText(selectedArticle.name, i18n.language);
	const category = CATEGORIES.find((c) => c.id === selectedArticle.category);
	const categoryColor = category?.color ?? '#003d82';
	const categoryName = getLocalizedText(category?.name ?? { de: 'Allgemein', en: 'General', fr: 'Général' }, i18n.language);
	const relatedArticles = ARTICLES.filter((candidate) => candidate.category === selectedArticle.category && candidate.id !== selectedArticle.id).sort((a, b) =>
		getLocalizedText(a.name, i18n.language).localeCompare(getLocalizedText(b.name, i18n.language), i18n.language),
	);
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
						/>
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
			{article.featured && (
				<div className="featured-indicator">
					<KolBadge _label={t('article.featured')} _color={{ backgroundColor: '#003d82', foregroundColor: '#ffffff' }} />
				</div>
			)}

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
									{selectedArticle.featured && <KolBadge _label={t('article.featured')} _color={{ backgroundColor: '#003d82', foregroundColor: '#ffffff' }} />}
								</div>
							</div>
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
