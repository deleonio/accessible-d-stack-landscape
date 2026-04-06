import { KolInputText, KolSingleSelect } from '@public-ui/preact';
import { useTranslation } from 'react-i18next';
import { Category, FilterState } from '../types';

interface SearchBarProps {
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
	categories: Category[];
}

export function SearchBar({ filters, onFilterChange, categories }: SearchBarProps) {
	const { t } = useTranslation();
	const categoryOptions = [{ label: t('search.allCategories'), value: '' }, ...categories.map((cat) => ({ label: cat.name, value: cat.id }))];

	return (
		<section className="search-bar" aria-label={t('search.regionAria')}>
			<div className="search-bar__inner">
				<KolInputText
					_label={t('search.inputLabel')}
					_value={filters.searchQuery}
					_placeholder={t('search.placeholder')}
					_on={{
						onInput: (_e: globalThis.Event, value: unknown) => onFilterChange({ ...filters, searchQuery: value as string }),
					}}
				/>
				<KolSingleSelect
					_label={t('search.categoryLabel')}
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
