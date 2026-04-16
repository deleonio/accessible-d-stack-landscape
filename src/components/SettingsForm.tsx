import { useTranslation } from 'react-i18next';
import type { ThemePreference } from '../utils/theme';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

interface SettingsFormProps {
	themePreference: ThemePreference;
	onThemeChange: (preference: ThemePreference) => void;
}

export function SettingsForm({ themePreference, onThemeChange }: SettingsFormProps) {
	const { t } = useTranslation();

	return (
		<div className="settings-form space-y-6">
			<p className="settings-form__description">{t('pages.settings.description')}</p>
			<ThemeSwitcher value={themePreference} onChange={onThemeChange} />
			<LanguageSwitcher />
		</div>
	);
}
