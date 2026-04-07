import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
	const { t } = useTranslation();
	const baseUrl = import.meta.env.BASE_URL;
	const commitSha = (import.meta.env.VITE_COMMIT_SHA || 'dev').slice(0, 7);
	const logoSrc = `${baseUrl}favicon.svg`;

	return (
		<>
			<a href="#main-content" className="skip-nav">
				{t('header.skipToContent')}
			</a>
			<header className="header">
				<div className="header__instance-strip" role="note" aria-label={t('header.instanceInfoAria')}>
					<span className="official-info">
						{t('header.mvpLayoutAligned')} • {t('header.commit')}: <code>{commitSha}</code>
					</span>
				</div>
				<div className="header__brand-bar">
					<a href={baseUrl} className="brand-logo" aria-label={t('header.homeLogoAria')}>
						<img src={logoSrc} alt="" aria-hidden="true" className="brand-logo__image" width="28" height="28" />
						<span className="brand-logo__text">StackAtlas</span>
					</a>
					<LanguageSwitcher />
				</div>

				<div className="header__content">
					<p className="header__eyebrow">{t('header.eyebrow')}</p>
					<h1>StackAtlas</h1>
					<p className="header__subtitle">{t('header.subtitle')}</p>
				</div>
			</header>
		</>
	);
}
