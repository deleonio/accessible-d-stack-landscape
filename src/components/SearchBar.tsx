import { KolInputText } from '@public-ui/react-v19';
import { FilterState } from '../types';

interface SearchBarProps {
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
}

export function SearchBar({ filters, onFilterChange }: SearchBarProps) {
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
		</div>
	);
}
