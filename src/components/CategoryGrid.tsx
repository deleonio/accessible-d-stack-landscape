import { KolButton, KolPagination } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { Article, Category, FilterState } from '../types';
import { ArticleCard } from './ArticleCard';

interface CategoryGridProps {
	categories: Category[];
	articles: Article[];
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
	totalCount: number;
}

const ITEMS_PER_PAGE = 12;

export function CategoryGrid({ categories, articles, filters, onFilterChange, totalCount }: CategoryGridProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const activeCount = articles.length;
	const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIdx = startIdx + ITEMS_PER_PAGE;
	const paginatedArticles = articles.slice(startIdx, endIdx);

	// Reset to page 1 when filters change
	const handleFilterChange = (newFilters: FilterState) => {
		onFilterChange(newFilters);
		setCurrentPage(1);
	};

	return (
		<main id="main-content" className="category-container">
			<div className="category-filters" role="toolbar" aria-label="Kategorien filtern">
				<span className="category-filters__label">Kategorie:</span>

				<KolButton
					_label="Alle"
					_variant={filters.selectedCategory === null ? 'primary' : 'secondary'}
					_on={{
						onClick: () => handleFilterChange({ ...filters, selectedCategory: null }),
					}}
				/>

				{categories.map((cat) => (
					<KolButton
						key={cat.id}
						_label={cat.name}
						_variant={filters.selectedCategory === cat.id ? 'primary' : 'secondary'}
						_on={{
							onClick: () =>
								handleFilterChange({
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
							<>
								{' '}
								in <em>{categories.find((c) => c.id === filters.selectedCategory)?.name}</em>
							</>
						)}
						{filters.searchQuery && <> für „{filters.searchQuery}“</>}
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
						<div className="empty-state__icon" aria-hidden="true">
							🔍
						</div>
						<p className="empty-state__title">Keine Einträge gefunden</p>
						<p>Bitte passen Sie Ihre Suche oder den Kategoriefilter an.</p>
					</div>
				</div>
			) : (
				<>
					<div className="articles-grid">
						{paginatedArticles.map((article) => (
							<ArticleCard key={article.id} article={article} />
						))}
					</div>
					{activeCount > ITEMS_PER_PAGE && (
						<KolPagination
							_page={currentPage}
							_max={activeCount}
							_pageSize={ITEMS_PER_PAGE}
							_label="Navigiere durch die Artikel"
							_on={{
								onChangePage: (_event: unknown, page: number) => setCurrentPage(page),
							}}
						/>
					)}
				</>
			)}
		</main>
	);
}
