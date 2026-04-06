import { useEffect, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { CategoryGrid } from './components/CategoryGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PwaWrapper } from './components/PwaWrapper';
import { SearchBar } from './components/SearchBar';
import { ARTICLES, CATEGORIES } from './data/articles';
import { useFilters } from './hooks/useFilters';

type RouteKey = 'home' | 'settings' | 'imprint';

const getRouteFromHash = (): RouteKey => {
	const hash = window.location.hash.replace('#', '');
	if (hash === 'settings') {
		return 'settings';
	}
	if (hash === 'imprint') {
		return 'imprint';
	}
	return 'home';
};

function App() {
	const { t } = useTranslation();
	const { filters, setFilters, filtered } = useFilters(ARTICLES);
	const [route, setRoute] = useState<RouteKey>(getRouteFromHash);

	useEffect(() => {
		const onHashChange = () => setRoute(getRouteFromHash());
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	}, []);

	return (
		<div className="app">
			<Header route={route} />
			{route === 'home' ? (
				<>
					<SearchBar filters={filters} onFilterChange={setFilters} categories={CATEGORIES} />
					<CategoryGrid categories={CATEGORIES} articles={filtered} filters={filters} onFilterChange={setFilters} totalCount={ARTICLES.length} />
				</>
			) : (
				<main id="main-content" className="page-content">
					{route === 'settings' ? (
						<>
							<h1>{t('pages.settings.title')}</h1>
							<p>{t('pages.settings.text')}</p>
						</>
					) : (
						<>
							<h1>{t('pages.imprint.title')}</h1>
							<p>{t('pages.imprint.text')}</p>
							<p>{t('pages.imprint.contact')}</p>
						</>
					)}
				</main>
			)}
			<Footer />
			<PwaWrapper />
		</div>
	);
}

export default App;
