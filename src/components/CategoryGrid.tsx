import { KolButton } from '@public-ui/preact';
import { Article, Category, FilterState } from '../types';
import { ArticleCard } from './ArticleCard';

interface CategoryGridProps {
	categories: Category[];
	articles: Article[];
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
	totalCount: number;
	onArticleSelect: (article: Article) => void;
}

export function CategoryGrid({ categories, articles, filters, onFilterChange, totalCount, onArticleSelect }: CategoryGridProps) {
	const activeCount = articles.length;

	return (
		<main id="main-content" className="category-container">
			<div className="category-filters" role="toolbar" aria-label="Kategorien filtern">
				<span className="category-filters__label">Kategorie:</span>

				<KolButton
					_label="Alle"
					_variant={filters.selectedCategory === null ? 'primary' : 'secondary'}
					_on={{
						onClick: () => onFilterChange({ ...filters, selectedCategory: null }),
					}}
				/>

				{categories.map((cat) => (
					<KolButton
						key={cat.id}
						_label={cat.name}
						_variant={filters.selectedCategory === cat.id ? 'primary' : 'secondary'}
						_on={{
							onClick: () =>
								onFilterChange({
									...filters,
									selectedCategory: filters.selectedCategory === cat.id ? null : cat.id,
								}),
						}}
					/>
				))}
			</div>

			<p className="results-info" aria-live="polite" aria-atomic="true">
				{filters.searchQuery || filters.selectedCategory ? (
					<>
						<strong>{activeCount}</strong> von {totalCount} Einträgen
						{filters.selectedCategory && (
							<> in <em>{categories.find((c) => c.id === filters.selectedCategory)?.name}</em></>
						)}
						{filters.searchQuery && <> für „{filters.searchQuery}"</>}
					</>
				) : (
					<>
						<strong>{totalCount}</strong> Technologien &amp; Standards
					</>
				)}
			</p>

			{articles.length === 0 ? (
				<div className="articles-grid">
					<div className="empty-state">
						<div className="empty-state__icon" aria-hidden="true">🔍</div>
						<p className="empty-state__title">Keine Einträge gefunden</p>
						<p>Bitte passen Sie Ihre Suche oder den Kategoriefilter an.</p>
					</div>
				</div>
			) : (
				<div className="articles-grid">
					{articles.map((article) => (
						<ArticleCard key={article.id} article={article} onSelect={onArticleSelect} />
					))}
				</div>
			)}
		</main>
	);
}
