import { KolButton, KolPagination, KolSingleSelect } from '@public-ui/preact';
import { useMemo, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { FilterState, Item, Layer, Stack, StackItem } from '../types';
import { getLocalizedText } from '../utils';
import { computeSovereigntyScore } from '../utils/sovereigntyScore';
import { ArticleCard } from './ArticleCard';
import { StackStats } from './StackStats';

type ViewMode = 'tile' | 'list';
type SortField = 'name' | 'score';
type SortDir = 'asc' | 'desc';

interface CategoryGridProps {
	layers: Layer[];
	articles: Item[];
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
	totalCount: number;
	activeStack?: Stack;
	stackItemMap?: Map<string, StackItem>;
}

const ITEMS_PER_PAGE = 12;

export function CategoryGrid({ layers, articles, filters, onFilterChange, totalCount, activeStack, stackItemMap }: CategoryGridProps) {
	const { i18n, t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);
	const [viewMode, setViewMode] = useState<ViewMode>('tile');
	const [sortField, setSortField] = useState<SortField>('name');
	const [sortDir, setSortDir] = useState<SortDir>('asc');

	const sortedArticles = useMemo(
		() =>
			[...articles].sort((a, b) => {
				const cmp =
					sortField === 'name'
						? getLocalizedText(a.name, i18n.language).localeCompare(getLocalizedText(b.name, i18n.language), i18n.language)
						: computeSovereigntyScore(a.sovereigntyCriteria) - computeSovereigntyScore(b.sovereigntyCriteria);
				return sortDir === 'asc' ? cmp : -cmp;
			}),
		[articles, sortField, sortDir, i18n.language],
	);

	const activeCount = articles.length;
	const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIdx = startIdx + ITEMS_PER_PAGE;
	const paginatedArticles = sortedArticles.slice(startIdx, endIdx);

	// Reset to page 1 when filters change
	const handleFilterChange = (newFilters: FilterState) => {
		onFilterChange(newFilters);
		setCurrentPage(1);
	};

	return (
		<main id="main-content" className="category-container">
			{activeStack && stackItemMap && <StackStats stack={activeStack} items={articles} stackItemMap={stackItemMap} />}
			<div className="category-filters" role="toolbar" aria-label={t('category.toolbarAria')}>
				<span className="category-filters__label">{t('category.label')}</span>

				<KolButton
					_label={t('category.all')}
					_variant={filters.selectedLayer === null ? 'primary' : 'secondary'}
					_on={{
						onClick: () => handleFilterChange({ ...filters, selectedLayer: null }),
					}}
				/>

				{layers.map((cat) => (
					<KolButton
						key={cat.id}
						_label={getLocalizedText(cat.name, i18n.language)}
						_variant={filters.selectedLayer === cat.id ? 'primary' : 'secondary'}
						_on={{
							onClick: () =>
								handleFilterChange({
									...filters,
									selectedLayer: filters.selectedLayer === cat.id ? null : cat.id,
								}),
						}}
					/>
				))}
			</div>
			<p className="results-info" aria-live="polite" aria-atomic="true">
				{filters.searchQuery || filters.selectedLayer ? (
					<>
						<strong>{activeCount}</strong> {t('category.results.filteredPrefix')} {totalCount} {t('category.results.entries')}
						{filters.selectedLayer && (
							<>
								{' '}
								<em>
									{t('category.results.inCategory', {
										category: getLocalizedText(layers.find((c) => c.id === filters.selectedLayer)?.name ?? '', i18n.language),
									})}
								</em>
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

			<div className="view-controls" role="toolbar" aria-label={t('view.toolbarAria')}>
				<div className="view-controls__sort">
					<KolSingleSelect
						_label={t('view.sort.label')}
						_options={[
							{ label: t('view.sort.name'), value: 'name' },
							{ label: t('view.sort.score'), value: 'score' },
						]}
						_value={sortField}
						_on={{
							onChange: (_e: globalThis.Event, value: unknown) => {
								setSortField(value as SortField);
								setCurrentPage(1);
							},
						}}
					/>
					<KolButton
						_label={sortDir === 'asc' ? t('view.sort.asc') : t('view.sort.desc')}
						_variant="secondary"
						_on={{
							onClick: () => {
								setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
								setCurrentPage(1);
							},
						}}
					/>
				</div>
				<div className="view-controls__view">
					<KolButton _label={t('view.tile')} _variant={viewMode === 'tile' ? 'primary' : 'secondary'} _on={{ onClick: () => setViewMode('tile') }} />
					<KolButton _label={t('view.list')} _variant={viewMode === 'list' ? 'primary' : 'secondary'} _on={{ onClick: () => setViewMode('list') }} />
				</div>
			</div>

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
					<ul className={viewMode === 'tile' ? 'articles-grid' : 'articles-list'}>
						{paginatedArticles.map((article) => (
							<li key={article.id}>
								<ArticleCard
									article={article}
									stackItem={stackItemMap?.get(article.id)}
									stackItemMap={activeStack ? stackItemMap : undefined}
									viewMode={viewMode}
								/>
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
