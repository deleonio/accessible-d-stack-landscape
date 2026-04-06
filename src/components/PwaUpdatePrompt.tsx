import { KolButton } from '@public-ui/preact';
import { useTranslation } from 'react-i18next';
import { useRegisterSW } from 'virtual:pwa-register/preact';

export function PwaUpdatePrompt() {
	const { t } = useTranslation();

	const {
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegisteredSW(swUrl, registration) {
			if (registration) {
				// Check for updates every 15 minutes
				setInterval(
					() => {
						registration.update();
					},
					15 * 60 * 1000,
				);
			}
			console.log(`[PWA] Service Worker registered: ${swUrl}`);
		},
		onRegisterError(error) {
			console.error('[PWA] Service Worker registration failed:', error);
		},
	});

	function close() {
		setNeedRefresh(false);
	}

	if (!needRefresh) return null;

	return (
		<div className="pwa-update-prompt" role="alert" aria-live="assertive">
			<p className="pwa-update-prompt__text">{t('pwa.updateAvailable')}</p>
			<div className="pwa-update-prompt__actions">
				<KolButton _label={t('pwa.update')} _variant="primary" _on={{ onClick: () => updateServiceWorker(true) }} />
				<KolButton _label={t('pwa.dismiss')} _variant="tertiary" _on={{ onClick: close }} />
			</div>
		</div>
	);
}
