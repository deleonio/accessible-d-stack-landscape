import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
	route: 'home' | 'settings' | 'imprint';
}

export function Header({ route }: HeaderProps) {
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
					<div className="official-label">
						<span className="official-label__emblem" aria-hidden="true">
							<span />
							<span />
							<span />
						</span>
						{t('header.officialProjectSetup')}
					</div>
					<span className="official-info">
						{t('header.mvpLayoutAligned')} • {t('header.commit')}: <code>{commitSha}</code>
					</span>
				</div>
				<div className="header__brand-bar">
					<a href="#home" className="brand-logo" aria-label={t('header.homeLogoAria')}>
						<img src={logoSrc} alt="" aria-hidden="true" className="brand-logo__image" width="28" height="28" />
						<span className="brand-logo__text">StackAtlas</span>
					</a>
					<nav className="header__nav" aria-label={t('header.mainNavigationAria')}>
						<a href="#home" aria-current={route === 'home' ? 'page' : undefined}>
							{t('header.nav.home')}
						</a>
						<a href="#settings" aria-current={route === 'settings' ? 'page' : undefined}>
							{t('header.nav.settings')}
						</a>
						<a href="#imprint" aria-current={route === 'imprint' ? 'page' : undefined}>
							{t('header.nav.imprint')}
						</a>
					</nav>
					<LanguageSwitcher />
				</div>

				{route === 'home' && (
					<div className="header__content">
						<p className="header__eyebrow">{t('header.eyebrow')}</p>
						<h1>StackAtlas</h1>
						<p className="header__subtitle">{t('header.subtitle')}</p>
					</div>
				)}
			</header>
		</>
	);
}
