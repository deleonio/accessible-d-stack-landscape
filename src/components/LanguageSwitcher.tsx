import { useTranslation } from 'react-i18next';

const SUPPORTED_LANGUAGES = [
	{ code: 'de', label: 'DE' },
	{ code: 'en', label: 'EN' },
	{ code: 'fr', label: 'FR' },
] as const;

export function LanguageSwitcher() {
	const { i18n, t } = useTranslation();

	const activeLanguage = i18n.resolvedLanguage ?? i18n.language;

	return (
		<div className="language-switcher" role="group" aria-label={t('header.languageSwitcher.ariaLabel')}>
			<span className="language-switcher__label">{t('header.languageSwitcher.label')}</span>
			<div className="language-switcher__buttons">
				{SUPPORTED_LANGUAGES.map(({ code, label }) => {
					const isActive = activeLanguage.startsWith(code);

					return (
						<button
							type="button"
							key={code}
							onClick={() => {
								void i18n.changeLanguage(code);
							}}
							className="language-switcher__button"
							aria-pressed={isActive}
						>
							{label}
						</button>
					);
				})}
			</div>
		</div>
	);
}
