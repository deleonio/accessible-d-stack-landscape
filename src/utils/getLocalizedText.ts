import { LanguageCode, LocalizableText, LocalizedText } from '../types';

const SUPPORTED_LANGUAGES: LanguageCode[] = ['de', 'en', 'fr'];

function isLocalizedText(value: LocalizableText): value is LocalizedText {
	return typeof value === 'object' && value !== null && SUPPORTED_LANGUAGES.every((lng) => typeof value[lng] === 'string');
}

export function getLocalizedText(value: LocalizableText, lng: string, fallback: LanguageCode = 'de'): string {
	if (!isLocalizedText(value)) {
		return value;
	}

	const normalizedLng = lng.split('-')[0] as LanguageCode;

	if (SUPPORTED_LANGUAGES.includes(normalizedLng)) {
		return value[normalizedLng];
	}

	return value[fallback];
}
