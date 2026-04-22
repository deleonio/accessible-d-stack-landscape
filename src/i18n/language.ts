import { LanguageCode } from '../types';
import { normalizeLanguageCode } from '../utils/normalizeLanguageCode';

export const FALLBACK_LANGUAGE: LanguageCode = 'de';
export const SUPPORTED_LANGUAGES: LanguageCode[] = [
	'bg',
	'cs',
	'da',
	'de',
	'el',
	'en',
	'es',
	'et',
	'fi',
	'fr',
	'ga',
	'hr',
	'hu',
	'it',
	'lt',
	'lv',
	'mt',
	'nl',
	'no',
	'pl',
	'pt',
	'ro',
	'sk',
	'sl',
	'sv',
];

export function normalizeLanguage(language?: string): LanguageCode {
	return normalizeLanguageCode(language, SUPPORTED_LANGUAGES, FALLBACK_LANGUAGE);
}
