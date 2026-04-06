import { CategoryGrid } from './components/CategoryGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PwaUpdatePrompt } from './components/PwaUpdatePrompt';
import { SearchBar } from './components/SearchBar';
import { ARTICLES, CATEGORIES } from './data/articles';
import { useFilters } from './hooks/useFilters';

function App() {
	const { filters, setFilters, filtered } = useFilters(ARTICLES);

	return (
		<div className="app">
			<Header />
			<SearchBar filters={filters} onFilterChange={setFilters} categories={CATEGORIES} />
			<CategoryGrid categories={CATEGORIES} articles={filtered} filters={filters} onFilterChange={setFilters} totalCount={ARTICLES.length} />
			<Footer />
			<PwaUpdatePrompt />
		</div>
	);
}

export default App;
