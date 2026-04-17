import { useMemo, useState } from 'preact/hooks';
import { DependencyGraph } from '../components/DependencyGraph';
import { FilterBar, SortDir, SortField, ViewMode } from '../components/FilterBar';
import { ITEMS, LAYERS, STACKS } from '../data/catalog';
import { useFilters } from '../hooks/useFilters';

export function DependencyGraphPage() {
	const [activeStackId, setActiveStackId] = useState<string | null>(null);
	const [sortField, setSortField] = useState<SortField>('score');
	const [sortDir, setSortDir] = useState<SortDir>('desc');
	const [viewMode, setViewMode] = useState<ViewMode>('tile');

	const activeStack = useMemo(() => STACKS.find((stack) => stack.id === activeStackId) ?? null, [activeStackId]);
	const stackItemMap = useMemo(() => new Map((activeStack?.items ?? []).map((stackItem) => [stackItem.itemId, stackItem])), [activeStack]);

	const baseItems = useMemo(() => {
		if (!activeStack) return ITEMS;
		return ITEMS.filter((item) => stackItemMap.has(item.id));
	}, [activeStack, stackItemMap]);

	const { filters, setFilters, filtered } = useFilters(baseItems, activeStack ? stackItemMap : undefined);

	return (
		<main id="main-content">
			<FilterBar
				filters={filters}
				onFilterChange={setFilters}
				layers={LAYERS}
				stacks={STACKS}
				activeStackId={activeStackId}
				onStackChange={setActiveStackId}
				items={baseItems}
				sortField={sortField}
				onSortFieldChange={setSortField}
				sortDir={sortDir}
				onSortDirToggle={() => setSortDir((direction) => (direction === 'asc' ? 'desc' : 'asc'))}
				viewMode={viewMode}
				onViewModeChange={setViewMode}
			/>
			<DependencyGraph items={filtered} layers={LAYERS} filters={filters} />
		</main>
	);
}
