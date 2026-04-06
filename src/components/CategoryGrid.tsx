import { KolButton, KolPagination } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();
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
			<div className="category-filters" role="toolbar" aria-label={t('category.toolbarAria')}>
				<span className="category-filters__label">{t('category.label')}</span>

				<KolButton
					_label={t('category.all')}
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
						<strong>{activeCount}</strong> {t('category.results.filteredPrefix')} {totalCount} {t('category.results.entries')}
						{filters.selectedCategory && (
							<>
								{' '}
								<em>{t('category.results.inCategory', { category: categories.find((c) => c.id === filters.selectedCategory)?.name })}</em>
							</>
						)}
						{filters.searchQuery && <> {t('category.results.forQuery', { query: filters.searchQuery })}</>}
					</>
				) : (
					<>
						<strong>{totalCount}</strong> {t('category.results.totalTechnologiesAndStandards')}
					</>
				)}
			</p>

			{articles.length === 0 ? (
				<div className="articles-grid">
					<div className="empty-state">
						<div className="empty-state__icon" aria-hidden="true">
							🔍
						</div>
						<p className="empty-state__title">{t('results.noneFound')}</p>
						<p>{t('results.adjustFilters')}</p>
					</div>
				</div>
			) : (
				<>
					<ul className="articles-grid">
						{paginatedArticles.map((article) => (
							<li key={article.id}>
								<ArticleCard article={article} />
							</li>
						))}
					</ul>
					{activeCount > ITEMS_PER_PAGE && (
						<KolPagination
							style={{
								background: 'transparent',
							}}
							_page={currentPage}
							_max={activeCount}
							_pageSize={ITEMS_PER_PAGE}
							_label={t('category.paginationLabel')}
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
