import { KolSingleSelect } from '@public-ui/preact';
import { useTranslation } from 'react-i18next';
import type { ThemePreference } from '../utils/theme';

interface ThemeSwitcherProps {
	value: ThemePreference;
	onChange: (preference: ThemePreference) => void;
}

const THEME_OPTIONS: Array<{ labelKey: string; value: ThemePreference }> = [
	{ labelKey: 'pages.settings.theme.options.light', value: 'light' },
	{ labelKey: 'pages.settings.theme.options.dark', value: 'dark' },
	{ labelKey: 'pages.settings.theme.options.system', value: 'system' },
];

export function ThemeSwitcher({ value, onChange }: ThemeSwitcherProps) {
	const { t } = useTranslation();

	return (
		<div className="theme-switcher">
			<KolSingleSelect
				_label={t('pages.settings.theme.label')}
				_options={THEME_OPTIONS.map(({ labelKey, value: optionValue }) => ({
					label: t(labelKey),
					value: optionValue,
				}))}
				_value={value}
				_on={{
					onChange: (_event: globalThis.Event, nextValue: unknown) => {
						if (nextValue === 'dark' || nextValue === 'light' || nextValue === 'system') {
							onChange(nextValue);
						}
					},
				}}
			/>
		</div>
	);
}
