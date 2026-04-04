import { KolButton } from '@public-ui/react-v19';
import { Article, Category, FilterState } from '../types';
import { ArticleCard } from './ArticleCard';

interface CategoryGridProps {
	categories: Category[];
	articles: Article[];
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
}

export function CategoryGrid({ categories, articles, filters, onFilterChange }: CategoryGridProps) {
	return (
		<div className="category-container">
			<div className="category-filters">
				{categories.map((cat) => (
					<KolButton
						key={cat.id}
						_label={cat.name}
						_variant={filters.selectedCategory === cat.id ? 'primary' : 'secondary'}
						_on={{
							onClick: () => onFilterChange({ ...filters, selectedCategory: filters.selectedCategory === cat.id ? null : cat.id }),
						}}
					/>
				))}
			</div>

			<div className="articles-grid">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</div>
	);
}
