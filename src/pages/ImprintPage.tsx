import { useTranslation } from 'react-i18next';

export function ImprintPage() {
	const { t } = useTranslation();

	return (
		<main id="main-content" className="content-page" aria-labelledby="imprint-page-title">
			<h2 id="imprint-page-title">{t('pages.imprint.title')}</h2>
			<p>{t('pages.imprint.description')}</p>
		</main>
	);
}
