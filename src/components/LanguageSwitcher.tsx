import { useEffect, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { normalizeLanguage } from '../i18n/language';
import { AutoSingleSelect as KolSingleSelect } from './AutoSingleSelect';

const SUPPORTED_LANGUAGES = [
	{ code: 'bg', label: 'Български' },
	{ code: 'cs', label: 'Čeština' },
	{ code: 'da', label: 'Dansk' },
	{ code: 'de', label: 'Deutsch' },
	{ code: 'el', label: 'Ελληνικά' },
	{ code: 'en', label: 'English' },
	{ code: 'es', label: 'Español' },
	{ code: 'et', label: 'Eesti' },
	{ code: 'fi', label: 'Suomi' },
	{ code: 'fr', label: 'Français' },
	{ code: 'ga', label: 'Gaeilge' },
	{ code: 'hr', label: 'Hrvatski' },
	{ code: 'hu', label: 'Magyar' },
	{ code: 'it', label: 'Italiano' },
	{ code: 'lt', label: 'Lietuvių' },
	{ code: 'lv', label: 'Latviešu' },
	{ code: 'mt', label: 'Malti' },
	{ code: 'nl', label: 'Nederlands' },
	{ code: 'no', label: 'Norsk' },
	{ code: 'pl', label: 'Polski' },
	{ code: 'pt', label: 'Português' },
	{ code: 'ro', label: 'Română' },
	{ code: 'sk', label: 'Slovenčina' },
	{ code: 'sl', label: 'Slovenščina' },
	{ code: 'sv', label: 'Svenska' },
] as const;

export function LanguageSwitcher() {
	const { i18n, t } = useTranslation();
	const [displayLanguage, setDisplayLanguage] = useState(i18n.resolvedLanguage ?? i18n.language ?? '');

	// Keep display value in sync when language changes externally
	useEffect(() => {
		setDisplayLanguage(i18n.resolvedLanguage ?? i18n.language ?? '');
	}, [i18n.resolvedLanguage, i18n.language]);

	const languageOptions = SUPPORTED_LANGUAGES.map(({ code, label }) => ({
		label,
		value: code,
	}));

	return (
		<div className="language-switcher">
			<KolSingleSelect
				_label={t('header.languageSwitcher.label')}
				_accessKey={t('header.languageSwitcher.accessKey')}
				_options={languageOptions}
				_value={displayLanguage}
				_on={{
					onChange: (_event: globalThis.Event, value: unknown) => {
						const lang = typeof value === 'string' ? value : '';
						setDisplayLanguage(lang);
						if (lang) void i18n.changeLanguage(normalizeLanguage(lang));
					},
				}}
			/>
		</div>
	);
}
