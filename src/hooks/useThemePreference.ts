import { useEffect, useMemo, useState } from 'preact/hooks';
import { applyThemeToDocument, getStoredThemePreference, getThemeStorageKey, setStoredThemePreference, type ThemePreference } from '../utils/theme';

export function useThemePreference() {
	const [preference, setPreference] = useState<ThemePreference>(() => getStoredThemePreference());

	useEffect(() => {
		applyThemeToDocument(preference);
		setStoredThemePreference(preference);
	}, [preference]);

	useEffect(() => {
		if (preference !== 'system') {
			return;
		}

		const mediaQuery = globalThis.matchMedia?.('(prefers-color-scheme: dark)');
		if (!mediaQuery) {
			return;
		}

		const handleChange = () => {
			applyThemeToDocument('system');
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [preference]);

	useEffect(() => {
		const onStorage = (event: StorageEvent) => {
			if (event.key === getThemeStorageKey() && event.newValue) {
				if (event.newValue === 'dark' || event.newValue === 'light' || event.newValue === 'system') {
					setPreference(event.newValue);
				}
			}
		};

		window.addEventListener('storage', onStorage);
		return () => {
			window.removeEventListener('storage', onStorage);
		};
	}, []);

	return useMemo(
		() => ({
			preference,
			setPreference,
		}),
		[preference],
	);
}
