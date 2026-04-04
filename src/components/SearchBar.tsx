import { KolInputText, KolSingleSelect } from '@public-ui/react-v19';
import { Category, FilterState } from '../types';

interface SearchBarProps {
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
	categories: Category[];
}

export function SearchBar({ filters, onFilterChange, categories }: SearchBarProps) {
	const categoryOptions = [{ label: 'All Categories', value: '' }, ...categories.map((cat) => ({ label: cat.name, value: cat.id }))];

	return (
		<div className="search-bar">
			<KolInputText
				_label="Search"
				_value={filters.searchQuery}
				_placeholder="Search articles..."
				_on={{
					onInput: (e, value) => onFilterChange({ ...filters, searchQuery: value as string }),
				}}
			/>
			<KolSingleSelect
				_label="Filter by Category"
				_options={categoryOptions}
				_value={filters.selectedCategory || ''}
				_on={{
					onChange: (e, value) => onFilterChange({ ...filters, selectedCategory: value ? (value as string) : null }),
				}}
			/>
		</div>
	);
}
