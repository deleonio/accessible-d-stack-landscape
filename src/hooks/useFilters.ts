import { useMemo, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { FilterState, Item, StackItem } from '../types';
import { buildDependencyGraph, getFilteredEdges, getLocalizedText, hasDependencyWithinDepth } from '../utils';

export function useFilters(items: Item[], stackItemMap?: Map<string, StackItem>) {
	const { i18n } = useTranslation();
	const [filters, setFilters] = useState<FilterState>({
		searchQuery: '',
		selectedLayer: null,
		selectedSublayer: null,
		selectedRelation: null,
		onlyDirectDependencies: false,
		dependencyDepth: null,
		selectedDependencyType: null,
	});

	const dependencyGraph = useMemo(() => buildDependencyGraph(items), [items]);
	const dependencyEdges = useMemo(
		() => getFilteredEdges(dependencyGraph, filters.selectedDependencyType, filters.onlyDirectDependencies),
		[dependencyGraph, filters.selectedDependencyType, filters.onlyDirectDependencies],
	);
	const dependencySourceIds = useMemo(() => new Set(dependencyEdges.map((edge) => edge.source.id)), [dependencyEdges]);

	const filtered = useMemo(() => {
		const normalizedQuery = filters.searchQuery.toLowerCase();

		return items.filter((item) => {
			const localizedName = getLocalizedText(item.name, i18n.language).toLowerCase();
			const localizedDescription = getLocalizedText(item.description, i18n.language).toLowerCase();
			const matchesSearch = localizedName.includes(normalizedQuery) || localizedDescription.includes(normalizedQuery);
			const matchesLayer = !filters.selectedLayer || item.layer === filters.selectedLayer;
			const matchesSublayer = !filters.selectedSublayer || item.sublayer === filters.selectedSublayer;
			const matchesRelation = !filters.selectedRelation || stackItemMap?.get(item.id)?.role === filters.selectedRelation;
			const matchesDirectDependency = !filters.onlyDirectDependencies || dependencySourceIds.has(item.id);
			const matchesDepth =
				!filters.dependencyDepth || hasDependencyWithinDepth(item.id, dependencyGraph, filters.dependencyDepth, filters.selectedDependencyType);

			return matchesSearch && matchesLayer && matchesSublayer && matchesRelation && matchesDirectDependency && matchesDepth;
		});
	}, [items, filters, i18n.language, stackItemMap, dependencySourceIds, dependencyGraph]);

	return { filters, setFilters, filtered };
}
