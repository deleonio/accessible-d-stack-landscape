export type ThemePreference = 'dark' | 'light' | 'system';

const THEME_STORAGE_KEY = 'theme-preference';

function isThemePreference(value: string): value is ThemePreference {
	return value === 'dark' || value === 'light' || value === 'system';
}

export function getStoredThemePreference(): ThemePreference {
	const storedTheme = globalThis.localStorage?.getItem(THEME_STORAGE_KEY);
	if (storedTheme && isThemePreference(storedTheme)) {
		return storedTheme;
	}

	return 'system';
}

export function setStoredThemePreference(preference: ThemePreference): void {
	globalThis.localStorage?.setItem(THEME_STORAGE_KEY, preference);
}

function getSystemTheme(): Exclude<ThemePreference, 'system'> {
	return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveTheme(preference: ThemePreference): Exclude<ThemePreference, 'system'> {
	return preference === 'system' ? getSystemTheme() : preference;
}

export function applyThemeToDocument(preference: ThemePreference): void {
	const resolvedTheme = resolveTheme(preference);
	document.documentElement.dataset.theme = resolvedTheme;
	document.documentElement.style.colorScheme = resolvedTheme;
}

export function getThemeStorageKey(): string {
	return THEME_STORAGE_KEY;
}
