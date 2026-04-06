import { KolBadge, KolButton, KolCard, KolDrawer } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { Article } from '../types';

interface ArticleCardProps {
	article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [selectedArticle, setSelectedArticle] = useState(article);
	const category = CATEGORIES.find((c) => c.id === selectedArticle.category);
	const categoryColor = category?.color ?? '#003d82';
	const categoryName = category?.name ?? 'Allgemein';
	const relatedArticles = ARTICLES.filter((candidate) => candidate.category === selectedArticle.category && candidate.id !== selectedArticle.id).sort((a, b) =>
		a.name.localeCompare(b.name, 'de'),
	);

	return (
		<div className="article-card-wrapper">
			<KolCard _label={article.name} className="article-card">
				<div className="card-content">
					<div className="card-header">
						{article.logo && <img src={article.logo} alt="" role="presentation" className="card-logo" loading="lazy" />}
						<span className="card-category-dot" style={{ background: categoryColor }} title={categoryName} aria-label={`Kategorie: ${categoryName}`} />
					</div>
					<p className="card-description">{article.description}</p>
					<div className="card-tags">
						{article.tags.slice(0, 4).map((tag) => (
							<KolBadge key={tag} _label={tag} _color="#e8eaed" className="tag-badge" />
						))}
					</div>
					<KolButton
						_label="Details öffnen"
						_variant="secondary"
						_on={{
							onClick: () => {
								setSelectedArticle(article);
								setIsDrawerOpen(true);
							},
						}}
					/>
				</div>
			</KolCard>
			{article.featured && (
				<div className="featured-indicator">
					<KolBadge _label="Empfohlen" _color={{ backgroundColor: '#003d82', foregroundColor: '#ffffff' }} />
				</div>
			)}

			<KolDrawer
				_label={`Details zu ${selectedArticle.name}`}
				_align="right"
				_hasCloser
				_open={isDrawerOpen}
				_on={{
					onClose: () => setIsDrawerOpen(false),
				}}
			>
				<div className="drawer-content">
					<KolCard _label={selectedArticle.name} className="drawer-card">
						<div className="drawer-details">
							<div className="drawer-headline">
								{selectedArticle.logo && <img src={selectedArticle.logo} alt="" role="presentation" className="card-logo" loading="lazy" />}
								<div>
									<p className="drawer-category">Kategorie: {categoryName}</p>
									{selectedArticle.featured && <KolBadge _label="Empfohlen" _color={{ backgroundColor: '#003d82', foregroundColor: '#ffffff' }} />}
								</div>
							</div>
							<p className="drawer-description">{selectedArticle.description}</p>
							<div className="drawer-tags">
								{selectedArticle.tags.map((tag) => (
									<KolBadge key={`${selectedArticle.id}-${tag}`} _label={tag} _color="#e8eaed" className="tag-badge" />
								))}
							</div>
							{relatedArticles.length > 0 && (
								<div className="drawer-related">
									<p className="drawer-related__title">Verwandte Einträge aus dieser Kategorie</p>
									<ul className="drawer-related__list" role="list">
										{relatedArticles.map((relatedArticle) => (
											<li key={relatedArticle.id} className="drawer-related__item">
												<button className="drawer-related__link" onClick={() => setSelectedArticle(relatedArticle)}>
													<span className="drawer-related__link-text">{relatedArticle.name}</span>
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
