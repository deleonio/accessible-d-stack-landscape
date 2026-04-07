import { CategoryGrid } from '../components/CategoryGrid';
import { SearchBar } from '../components/SearchBar';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { useFilters } from '../hooks/useFilters';

export function HomePage() {
	const { filters, setFilters, filtered } = useFilters(ARTICLES);

	return (
		<main id="main-content">
			<SearchBar filters={filters} onFilterChange={setFilters} categories={CATEGORIES} />
			<CategoryGrid categories={CATEGORIES} articles={filtered} filters={filters} onFilterChange={setFilters} totalCount={ARTICLES.length} />
		</main>
	);
}
