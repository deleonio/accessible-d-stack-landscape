import { KolInputText, KolSingleSelect } from '@public-ui/preact';
import { Category, FilterState } from '../types';

interface SearchBarProps {
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
	categories: Category[];
}

export function SearchBar({ filters, onFilterChange, categories }: SearchBarProps) {
	const categoryOptions = [{ label: 'Alle Kategorien', value: '' }, ...categories.map((cat) => ({ label: cat.name, value: cat.id }))];

	return (
		<section className="search-bar" aria-label="Suche und Filter">
			<div className="search-bar__inner">
				<KolInputText
					_label="Suche"
					_value={filters.searchQuery}
					_placeholder="Technologie oder Stichwort suchen …"
					_on={{
						onInput: (_e: globalThis.Event, value: unknown) => onFilterChange({ ...filters, searchQuery: value as string }),
					}}
				/>
				<KolSingleSelect
					_label="Kategorie"
					_options={categoryOptions}
					_value={filters.selectedCategory || ''}
					_on={{
						onChange: (_e: globalThis.Event, value: unknown) => onFilterChange({ ...filters, selectedCategory: value ? (value as string) : null }),
					}}
				/>
			</div>
		</section>
	);
}
