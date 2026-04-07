import { useMemo, useState } from 'preact/hooks';
import { CategoryGrid } from '../components/CategoryGrid';
import { SearchBar } from '../components/SearchBar';
import { ITEMS, LAYERS, STACKS } from '../data/catalog';
import { useFilters } from '../hooks/useFilters';
import { StackItem } from '../types';

export function HomePage() {
	const [activeStackId, setActiveStackId] = useState<string | null>(null);

	const activeStack = useMemo(() => STACKS.find((s) => s.id === activeStackId) ?? null, [activeStackId]);

	const stackItemMap = useMemo<Map<string, StackItem>>(() => {
		if (!activeStack) return new Map();
		return new Map(activeStack.items.map((si) => [si.itemId, si]));
	}, [activeStack]);

	const baseItems = useMemo(() => {
		if (!activeStack) return ITEMS;
		return ITEMS.filter((item) => stackItemMap.has(item.id));
	}, [activeStack, stackItemMap]);

	const { filters, setFilters, filtered } = useFilters(baseItems);

	return (
		<main id="main-content">
			<SearchBar filters={filters} onFilterChange={setFilters} layers={LAYERS} stacks={STACKS} activeStackId={activeStackId} onStackChange={setActiveStackId} />
			<CategoryGrid
				layers={LAYERS}
				articles={filtered}
				filters={filters}
				onFilterChange={setFilters}
				totalCount={baseItems.length}
				activeStack={activeStack ?? undefined}
				stackItemMap={stackItemMap}
			/>
		</main>
	);
}
