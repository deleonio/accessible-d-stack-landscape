import { KolSingleSelect } from '@public-ui/preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { DependencyGraph } from '../components/DependencyGraph';
import { FilterBar, SortDir, SortField, ViewMode } from '../components/FilterBar';
import { ITEMS, LAYERS, STACKS } from '../data/catalog';
import { useFilters } from '../hooks/useFilters';
import { getLocalizedText } from '../utils';

export function DependencyGraphPage() {
	const { i18n, t } = useTranslation();
	const [activeStackId, setActiveStackId] = useState<string | null>(null);
	const [selectedRootItemId, setSelectedRootItemId] = useState<string | null>(null);
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
	const dependencyOptions = useMemo(
		() => [
			{ label: t('dependencies.root.all'), value: '' },
			...baseItems
				.map((item) => ({ label: getLocalizedText(item.name, i18n.language), value: item.id }))
				.sort((a, b) => a.label.localeCompare(b.label, i18n.language)),
		],
		[baseItems, i18n.language, t],
	);

	useEffect(() => {
		if (!selectedRootItemId) return;
		if (baseItems.some((item) => item.id === selectedRootItemId)) return;
		setSelectedRootItemId(null);
	}, [baseItems, selectedRootItemId]);

	const graphItems = selectedRootItemId ? baseItems : filtered;

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
			<div className="px-3 md:px-4 lg:px-5 py-3">
				<KolSingleSelect
					className="filter-bar__select filter-bar__select--graph-root"
					_label={t('dependencies.root.label')}
					_options={dependencyOptions}
					_value={selectedRootItemId ?? ''}
					_on={{ onChange: (_event: globalThis.Event, value: unknown) => setSelectedRootItemId(value ? (value as string) : null) }}
				/>
			</div>
			<DependencyGraph items={graphItems} layers={LAYERS} filters={filters} selectedRootItemId={selectedRootItemId} />
		</main>
	);
}
