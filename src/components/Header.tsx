import { KolButton, KolDrawer, KolLink } from '@public-ui/preact';
import { useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { getAppVersion, getCommitDisplay } from '../utils';
import { SettingsForm } from './SettingsForm';

interface HeaderProps {
	currentUrl: string;
}

export function Header({ currentUrl }: HeaderProps) {
	const { t } = useTranslation();
	const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);

	const baseUrl = import.meta.env.BASE_URL;
	const brandUrl = import.meta.env.VITE_BRAND_URL ?? baseUrl;
	const commitDisplay = getCommitDisplay();
	const appVersion = getAppVersion();

	const isStacksActive = currentUrl === '/' || currentUrl.startsWith('/stacks');
	const isDepsActive = currentUrl.startsWith('/deps');

	return (
		<>
			<KolLink className="skip-nav" _href="#main-content" _label={t('header.skipToContent')} _icons={{ right: 'kolicon kolicon-chevron-right' }} />
			<header className="header w-full">
				{/* Instance info strip – hidden on mobile */}
				<div
					className="header__instance-strip hidden md:flex items-center justify-between gap-4 px-4 md:px-6 py-2 text-xs"
					role="note"
					aria-label={t('header.instanceInfoAria')}
				>
					<div className="flex items-center gap-2">
						<span className="flex gap-1.5" aria-hidden="true">
							<span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
							<span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
							<span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
						</span>
						{t('header.officialProjectSetup')}
					</div>
					<span className="header__instance-meta">
						{t('header.mvpLayoutAligned')} • {t('header.version')}: <code className="header__instance-code">{appVersion}</code> • {t('header.commit')}:{' '}
						<code className="header__instance-code">{commitDisplay}</code>
					</span>
				</div>

				{/* Main header container with max-width */}
				<div className="header__inner flex flex-col max-w-6xl mx-auto px-4 md:px-6 w-full">
					{/* Brand bar */}
					<div className="header__brand-bar flex items-center justify-between gap-3 py-2">
						<KolLink
							_href={brandUrl}
							className="header__brand-link flex items-center gap-2 no-underline font-bold text-base hover:opacity-90"
							_target={brandUrl.startsWith('http') ? '_blank' : undefined}
							_label="StackAtlas"
							_icons={{ left: 'kolicon kolicon-house' }}
						/>
						<nav className="header__main-nav" aria-label={t('header.mainNavigationAria')}>
							<KolLink
								_href="#/"
								className={`header__nav-link${isStacksActive ? ' header__nav-link--active' : ''}`}
								aria-current={isStacksActive ? 'page' : undefined}
								_label={t('header.nav.stacks')}
								_icons={{ left: 'kolicon kolicon-layers' }}
							/>
							<KolLink
								_href="#/deps"
								className={`header__nav-link${isDepsActive ? ' header__nav-link--active' : ''}`}
								aria-current={isDepsActive ? 'page' : undefined}
								_label={t('header.nav.deps')}
								_icons={{ left: 'kolicon kolicon-code' }}
							/>
						</nav>
						<div className="header__controls flex items-center gap-2 ml-auto">
							<KolButton
								className="header__lang-trigger"
								_label={t('header.languageSwitcher.label')}
								_hideLabel
								_icons={{ left: 'kolicon kolicon-cogwheel' }}
								_variant="ghost"
								_on={{ onClick: () => setSettingsDrawerOpen(true) }}
							/>
						</div>
					</div>

					{/* Settings drawer */}
					<KolDrawer
						_label={t('pages.settings.title')}
						_align="right"
						_hasCloser
						_open={settingsDrawerOpen}
						_on={{ onClose: () => setSettingsDrawerOpen(false) }}
					>
						<div className="header__settings-drawer-content p-4">
							<SettingsForm />
						</div>
					</KolDrawer>

					{/* Header content section */}
					<div className="header__content py-3 md:py-4">
						<p className="header__subtitle text-sm md:text-base max-w-prose leading-relaxed">{t('header.subtitle')}</p>
					</div>
				</div>
			</header>
		</>
	);
}
