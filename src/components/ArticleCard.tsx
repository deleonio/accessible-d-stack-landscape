import { KolBadge, KolCard } from '@public-ui/react-v19';
import { Article } from '../types';
import { CATEGORIES } from '../data/articles';

interface ArticleCardProps {
	article: Article;
}

const CATEGORY_COLORS: Record<string, string> = {
	betrieb:       'var(--ds-cat-betrieb)',       // Grün
	infrastruktur: 'var(--ds-cat-infrastruktur)', // Rot
	plattform:     'var(--ds-cat-plattform)',     // Blau
	zugang:        'var(--ds-cat-zugang)',        // Orange
};

export function ArticleCard({ article }: ArticleCardProps) {
	const categoryColor = CATEGORY_COLORS[article.category] ?? 'var(--ds-color-primary)';
	const categoryName = CATEGORIES.find((c) => c.id === article.category)?.name;

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
