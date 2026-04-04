import { KolBadge, KolCard } from '@public-ui/react-v19';
import { Article } from '../types';

interface ArticleCardProps {
	article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
	return (
		<div className="article-card-wrapper">
			<KolCard _label={article.name} className="article-card">
				<div className="card-content">
					{article.logo && <img src={article.logo} alt={article.name} className="card-logo" />}
					<p className="card-description">{article.description}</p>
					<div className="card-tags">
						{article.tags.map((tag) => (
							<KolBadge key={tag} _label={tag} _color="#f0f0f0" className="tag-badge" />
						))}
					</div>
				</div>
			</KolCard>
			{article.featured && (
				<div className="featured-indicator">
					<KolBadge _label="Featured" _color="#003d82" />
				</div>
			)}
		</div>
	);
}
