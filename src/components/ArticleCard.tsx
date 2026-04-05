import { KolBadge, KolButton, KolCard, KolDrawer } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { CATEGORIES } from '../data/articles';
import { Article } from '../types';

interface ArticleCardProps {
	article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const category = CATEGORIES.find((c) => c.id === article.category);
	const categoryColor = category?.color ?? '#003d82';
	const categoryName = category?.name ?? 'Allgemein';

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
							onClick: () => setIsDrawerOpen(true),
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
				_label={`Details zu ${article.name}`}
				_align="right"
				_hasCloser
				_open={isDrawerOpen}
				_on={{
					onClose: () => setIsDrawerOpen(false),
				}}
			>
				<div className="drawer-content">
					<KolCard _label={article.name} className="drawer-card">
						<div className="drawer-details">
							<div className="drawer-headline">
								{article.logo && <img src={article.logo} alt="" role="presentation" className="card-logo" loading="lazy" />}
								<div>
									<p className="drawer-category">Kategorie: {categoryName}</p>
									{article.featured && <KolBadge _label="Empfohlen" _color={{ backgroundColor: '#003d82', foregroundColor: '#ffffff' }} />}
								</div>
							</div>
							<p className="drawer-description">{article.description}</p>
							<div className="drawer-tags">
								{article.tags.map((tag) => (
									<KolBadge key={`${article.id}-${tag}`} _label={tag} _color="#e8eaed" className="tag-badge" />
								))}
							</div>
						</div>
					</KolCard>
				</div>
			</KolDrawer>
		</div>
	);
}
