import { KolBadge } from '@public-ui/react-v19';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <kol-card className="article-card">
      <div slot="header" className="card-header">
        {article.logo && <img src={article.logo} alt={article.name} className="card-logo" />}
        <div className="card-title">
          <h3>{article.name}</h3>
          {article.featured && (
            <KolBadge _label="Featured" _color="#003d82" className="featured-badge" />
          )}
        </div>
      </div>
      <p className="card-description">{article.description}</p>
      <div slot="footer" className="card-tags">
        {article.tags.map((tag) => (
          <KolBadge key={tag} _label={tag} _color="#f0f0f0" className="tag-badge" />
        ))}
      </div>
    </kol-card>
  );
}
