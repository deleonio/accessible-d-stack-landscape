import { LanguageCode, LocalizableText, LocalizedText } from '../types';

const SUPPORTED_LANGUAGES: LanguageCode[] = ['de', 'en', 'fr'];

function isLocalizedText(value: LocalizableText): value is LocalizedText {
	return typeof value === 'object' && value !== null && ('de' in value || 'en' in value);
}

export function getLocalizedText(value: LocalizableText, lng: string, fallback: LanguageCode = 'de'): string {
	if (!isLocalizedText(value)) {
		return value;
	}

	const normalizedLng = lng.split('-')[0] as LanguageCode;

	if (SUPPORTED_LANGUAGES.includes(normalizedLng) && value[normalizedLng] != null) {
		return value[normalizedLng] ?? value[fallback] ?? '';
	}

	return value[fallback] ?? '';
}
