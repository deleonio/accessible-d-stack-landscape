import { KolLinkButton } from '@public-ui/preact';
import { useTranslation } from 'react-i18next';
import { getAppVersion, getCommitDisplay } from '../utils';

export function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();
	const commitDisplay = getCommitDisplay();
	const appVersion = getAppVersion();

	return (
		<footer className="footer w-full border-t mt-auto">
			<div className="footer__inner flex flex-col max-w-6xl mx-auto px-4 md:px-6 w-full">
				{/* Navigation flex */}
				<div className="footer__nav flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8 py-8 md:py-12 border-b">
					{/* Brand section */}
					<div className="footer__brand">
						<p className="footer__title font-bold text-sm mb-2">StackAtlas</p>
						<p className="footer__subtitle text-xs">{t('footer.subtitle')}</p>
					</div>

					{/* Links navigation */}
					<nav className="footer__nav-section flex flex-wrap gap-4 md:gap-6 text-sm" aria-label={t('footer.navigationAria')}>
						<KolLinkButton
							_href="https://github.com/deleonio/accessible-d-stack-landscape/blob/main/docs/README.md"
							_target="_blank"
							className="footer__link"
							_label={t('footer.links.documentation')}
							_variant="ghost"
							_icons={{ right: 'kolicon kolicon-external-link' }}
						/>
						<KolLinkButton _href="#/news" className="footer__link" _label={t('footer.links.news')} _variant="ghost" _icons={{ left: 'kolicon kolicon-news' }} />
						<KolLinkButton
							_href="#/stacks"
							className="footer__link"
							_label={t('footer.links.stacks')}
							_variant="ghost"
							_icons={{ left: 'kolicon kolicon-layers' }}
						/>
						<KolLinkButton
							_href="https://github.com/deleonio/accessible-d-stack-landscape"
							_target="_blank"
							className="footer__link"
							_label={t('footer.links.github')}
							_variant="ghost"
							_icons={{ right: 'kolicon kolicon-external-link' }}
						/>
						<KolLinkButton
							_href="https://github.com/deleonio/accessible-d-stack-landscape/issues/new"
							_target="_blank"
							className="footer__link"
							_label={t('footer.links.community')}
							_variant="ghost"
							_icons={{ right: 'kolicon kolicon-external-link' }}
						/>
						<KolLinkButton
							_href="#/settings"
							className="footer__link"
							_label={t('footer.links.settings')}
							_variant="ghost"
							_icons={{ left: 'kolicon kolicon-cogwheel' }}
						/>
					</nav>
				</div>
			</div>

			{/* Footer Abschlussleiste (volle Breite) */}
			<div className="footer__meta py-3 px-4 md:px-6">
				<div className="footer__meta-inner flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
					<p className="footer__copy">
						© {year} StackAtlas · Lizenz: EUPL-1.2 · Built with{' '}
						<KolLinkButton
							_href="https://public-ui.github.io/en/"
							_target="_blank"
							className="footer__copy-link underline"
							_label="KoliBri"
							_variant="tertiary"
							_icons={{ right: 'kolicon kolicon-external-link' }}
						/>
						, {t('footer.and')}{' '}
						<KolLinkButton
							_href="https://designsystem.gov.de/"
							_target="_blank"
							className="footer__copy-link underline"
							_label="KERN-UX"
							_variant="tertiary"
							_icons={{ right: 'kolicon kolicon-external-link' }}
						/>
					</p>
					<p className="footer__build-info" aria-label={t('footer.buildInfoAria', { commit: commitDisplay, version: appVersion })}>
						<span className="footer__build-label">{t('footer.buildVersionLabel')}</span> <code className="footer__build-code">{appVersion}</code> ·{' '}
						<span className="footer__build-label">{t('footer.buildCommitLabel')}</span> <code className="footer__build-code">{commitDisplay}</code>
					</p>
				</div>
			</div>
		</footer>
	);
}
