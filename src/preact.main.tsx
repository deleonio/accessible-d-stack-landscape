import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';
import { KERN_V2 } from '@public-ui/theme-kern';

import { render } from 'preact';
import App from './App';
import './i18n';

/**
 * Splash minimum display time (ms).
 * Derived from CSS timing: layer-3 (0s) + layer-4 (1.2s) + sovereign (2.4s) + sov-duration (1.5s) + 1s hold + title fade.
 */
const SPLASH_MIN_MS = 6000;
const splashStart = performance.now();

function dismissSplash(): void {
	const splash = document.getElementById('splash');
	if (!splash) return;

	const status = document.getElementById('splash-status');
	if (status) status.textContent = 'Anwendung bereit';

	splash.classList.add('splash--exiting');
	const cleanup = () => splash.remove();
	splash.addEventListener('transitionend', cleanup, { once: true });
	// Fallback if transitionend doesn't fire (e.g. reduced motion)
	setTimeout(cleanup, 600);
}

Promise.all([
	register([KERN_V2, DEFAULT], defineCustomElements, { translation: { name: 'de' } }),
	new Promise<void>((resolve) => setTimeout(resolve, SPLASH_MIN_MS)),
])
	.then(() => {
		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			render(<App />, htmlElement);
		}

		const elapsed = performance.now() - splashStart;
		const remaining = Math.max(0, SPLASH_MIN_MS - elapsed);
		setTimeout(dismissSplash, remaining);
	})
	.catch(console.error);
