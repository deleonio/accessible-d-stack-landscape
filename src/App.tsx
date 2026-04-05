import { useState } from 'preact/hooks';
import { CardDetailsDialog } from './components/CardDetailsDialog';
import { CategoryGrid } from './components/CategoryGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ARTICLES, CATEGORIES } from './data/articles';
import { useFilters } from './hooks/useFilters';
import { Article } from './types';

function App() {
	const { filters, setFilters, filtered } = useFilters(ARTICLES);
	const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

	return (
		<div className="app">
			<Header />
			<SearchBar filters={filters} onFilterChange={setFilters} categories={CATEGORIES} />
			<CategoryGrid
				categories={CATEGORIES}
				articles={filtered}
				filters={filters}
				onFilterChange={setFilters}
				totalCount={ARTICLES.length}
				onArticleSelect={setSelectedArticle}
			/>
			<Footer />
			<CardDetailsDialog article={selectedArticle} onClose={() => setSelectedArticle(null)} />
		</div>
	);
}

export default App;
