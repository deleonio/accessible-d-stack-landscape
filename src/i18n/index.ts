import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import deCommon from './locales/de/common.json';
import enCommon from './locales/en/common.json';
import frCommon from './locales/fr/common.json';

void i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			de: { common: deCommon },
			en: { common: enCommon },
			fr: { common: frCommon },
		},
		defaultNS: 'common',
		ns: ['common'],
		supportedLngs: ['de', 'en', 'fr'],
		fallbackLng: 'de',
		detection: {
			caches: ['localStorage'],
			lookupQuerystring: 'lng',
			order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
		},
		interpolation: {
			escapeValue: false,
		},
	})
	.then(() => {
		document.documentElement.lang = i18next.resolvedLanguage ?? i18next.language;
	});

i18next.on('languageChanged', (lng: string) => {
	document.documentElement.lang = lng;
});
