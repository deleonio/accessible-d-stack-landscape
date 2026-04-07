import { CategoryGrid } from './components/CategoryGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PwaWrapper } from './components/PwaWrapper';
import { SearchBar } from './components/SearchBar';
import { ITEMS, LAYERS } from './data/catalog';
import { useFilters } from './hooks/useFilters';

function App() {
	const { filters, setFilters, filtered } = useFilters(ITEMS);

	return (
		<div className="app">
			<Header />
			<SearchBar filters={filters} onFilterChange={setFilters} layers={LAYERS} />
			<CategoryGrid layers={LAYERS} articles={filtered} filters={filters} onFilterChange={setFilters} totalCount={ITEMS.length} />
			<Footer />
			<PwaWrapper />
		</div>
	);
}

export default App;
