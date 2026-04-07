import { KolButton, KolDrawer } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
	const { t } = useTranslation();
	const [langDrawerOpen, setLangDrawerOpen] = useState(false);
	const baseUrl = import.meta.env.BASE_URL;
	const brandUrl = import.meta.env.VITE_BRAND_URL ?? baseUrl;
	const commitSha = (import.meta.env.VITE_COMMIT_SHA || 'dev').slice(0, 7);

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
					<a href={brandUrl} className="brand-logo" rel="noopener noreferrer">
						<span className="brand-logo__mark">
							<img src={`${baseUrl}favicon.svg`} alt="" width="28" height="28" loading="eager" decoding="async" />
						</span>
						<span>StackAtlas</span>
						<span className="brand-logo__badge">MVP</span>
					</a>
					<div className="header__controls">
						<KolButton
							className="lang-drawer-trigger"
							_label={t('header.languageSwitcher.label')}
							_hideLabel
							_icons={{ left: 'kolicon kolicon-cogwheel' }}
							_variant="ghost"
							_on={{ onClick: () => setLangDrawerOpen(true) }}
						/>
					</div>
				</div>

				<KolDrawer
					_label={t('header.languageSwitcher.label')}
					_align="right"
					_hasCloser
					_open={langDrawerOpen}
					_on={{ onClose: () => setLangDrawerOpen(false) }}
				>
					<div className="lang-drawer-content">
						<LanguageSwitcher />
					</div>
				</KolDrawer>

				<div className="header__content">
					<p className="header__eyebrow">{t('header.eyebrow')}</p>
					<h1>StackAtlas</h1>
					<p className="header__subtitle">{t('header.subtitle')}</p>
				</div>
			</header>
		</>
	);
}
