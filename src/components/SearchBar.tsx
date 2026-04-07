import { KolInputText, KolSingleSelect } from '@public-ui/preact';
import { useTranslation } from 'react-i18next';
import { FilterState, Layer } from '../types';
import { getLocalizedText } from '../utils';

interface SearchBarProps {
	filters: FilterState;
	onFilterChange: (filters: FilterState) => void;
	layers: Layer[];
}

export function SearchBar({ filters, onFilterChange, layers }: SearchBarProps) {
	const { i18n, t } = useTranslation();
	const layerOptions = [
		{ label: t('search.allCategories'), value: '' },
		...layers.map((layer) => ({ label: getLocalizedText(layer.name, i18n.language), value: layer.id })),
	];

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
					_options={layerOptions}
					_value={filters.selectedLayer || ''}
					_on={{
						onChange: (_e: globalThis.Event, value: unknown) => onFilterChange({ ...filters, selectedLayer: value ? (value as string) : null }),
					}}
				/>
			</div>
		</section>
	);
}
