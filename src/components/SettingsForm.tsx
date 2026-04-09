import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function SettingsForm() {
	const { t } = useTranslation();

	return (
		<div className="settings-form space-y-6">
			<p className="text-sm text-gray-600">{t('pages.settings.description')}</p>
			<LanguageSwitcher />
		</div>
	);
}
