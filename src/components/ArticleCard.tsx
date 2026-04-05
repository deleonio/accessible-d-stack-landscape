import { KolBadge, KolButton, KolCard } from '@public-ui/preact';
import { Article } from '../types';
import { CATEGORIES } from '../data/articles';

interface ArticleCardProps {
	article: Article;
	onSelect: (article: Article) => void;
}

export function ArticleCard({ article, onSelect }: ArticleCardProps) {
	const category = CATEGORIES.find((c) => c.id === article.category);
	const categoryColor = category?.color ?? '#003d82';
	const categoryName = category?.name ?? 'Allgemein';

	return (
		<div className="article-card-wrapper">
			<KolCard _label={article.name} className="article-card">
				<div className="card-content">
					<div className="card-header">
						{article.logo && (
							<img src={article.logo} alt="" role="presentation" className="card-logo" loading="lazy" />
						)}
						<span
							className="card-category-dot"
							style={{ background: categoryColor }}
							title={categoryName}
							aria-label={`Kategorie: ${categoryName}`}
						/>
					</div>
					<p className="card-description">{article.description}</p>
					<div className="card-tags">
						{article.tags.slice(0, 4).map((tag) => (
							<KolBadge key={tag} _label={tag} _color="#e8eaed" className="tag-badge" />
						))}
					</div>
					<div className="card-actions">
						<KolButton
							_label="Details anzeigen"
							_variant="secondary"
							_on={{ onClick: () => onSelect(article) }}
						/>
					</div>
				</div>
			</KolCard>
			{article.featured && (
				<div className="featured-indicator">
					<KolBadge _label="Empfohlen" _color={{ backgroundColor: '#003d82', foregroundColor: '#ffffff' }} />
				</div>
			)}
		</div>
	);
}
