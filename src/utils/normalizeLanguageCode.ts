export function normalizeLanguageCode<T extends string>(language: string | undefined, supportedLanguages: readonly T[], fallbackLanguage: T): T {
	const baseLanguage = language?.trim().toLowerCase().split('-')[0];
	return supportedLanguages.find((supportedLanguage) => supportedLanguage === baseLanguage) ?? fallbackLanguage;
}
