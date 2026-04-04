import { useState, useMemo } from 'react';
import { Article, FilterState } from '../types';

export function useFilters(articles: Article[]) {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedCategory: null,
  });

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = article.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                           article.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesCategory = !filters.selectedCategory || article.category === filters.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, filters]);

  return { filters, setFilters, filtered };
}
