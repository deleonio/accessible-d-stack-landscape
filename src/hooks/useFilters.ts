import { useMemo, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { Article, FilterState } from '../types';
import { getLocalizedText } from '../utils';

export function useFilters(articles: Article[]) {
	const { i18n } = useTranslation();
	const [filters, setFilters] = useState<FilterState>({
		searchQuery: '',
		selectedCategory: null,
	});

	const filtered = useMemo(() => {
		const normalizedQuery = filters.searchQuery.toLowerCase();

		return articles.filter((article) => {
			const localizedName = getLocalizedText(article.name, i18n.language).toLowerCase();
			const localizedDescription = getLocalizedText(article.description, i18n.language).toLowerCase();
			const matchesSearch = localizedName.includes(normalizedQuery) || localizedDescription.includes(normalizedQuery);
			const matchesCategory = !filters.selectedCategory || article.category === filters.selectedCategory;
			return matchesSearch && matchesCategory;
		});
	}, [articles, filters, i18n.language]);

	return { filters, setFilters, filtered };
}
