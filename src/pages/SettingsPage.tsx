import { useTranslation } from 'react-i18next';
import { SettingsForm } from '../components/SettingsForm';
import type { ThemePreference } from '../utils/theme';

interface SettingsPageProps {
	themePreference: ThemePreference;
	onThemeChange: (preference: ThemePreference) => void;
}

export function SettingsPage({ themePreference, onThemeChange }: SettingsPageProps) {
	const { t } = useTranslation();

	return (
		<main id="main-content" className="content-page max-w-2xl mx-auto px-4 md:px-6 py-8 md:py-12" aria-labelledby="settings-page-title">
			<h1 id="settings-page-title" className="text-3xl md:text-4xl font-bold mb-8">
				{t('pages.settings.title')}
			</h1>
			<SettingsForm themePreference={themePreference} onThemeChange={onThemeChange} />
		</main>
	);
}
