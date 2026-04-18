import { useTranslation } from 'react-i18next';
import { useRouteAnnouncement } from '../hooks/useRouteAnnouncement';

export function ImprintPage() {
	const { t } = useTranslation();
	useRouteAnnouncement({ pageTitle: t('pages.imprint.title') || 'Imprint' });

	return (
		<main id="main-content" className="content-page" aria-labelledby="imprint-page-title">
			<h2 id="imprint-page-title">{t('pages.imprint.title')}</h2>
			<p>{t('pages.imprint.description')}</p>
		</main>
	);
}
