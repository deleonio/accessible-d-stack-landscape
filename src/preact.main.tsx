import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';

import { render } from 'preact';
import App from './App';

const SPLASH_MIN_MS = 2000;
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
	register(DEFAULT, defineCustomElements, { translation: { name: 'de' } }),
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
