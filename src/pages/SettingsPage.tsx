import { useTranslation } from 'react-i18next';

export function SettingsPage() {
	const { t } = useTranslation();

	return (
		<main id="main-content" className="content-page" aria-labelledby="settings-page-title">
			<h2 id="settings-page-title">{t('pages.settings.title')}</h2>
			<p>{t('pages.settings.description')}</p>
		</main>
	);
}
