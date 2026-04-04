import { KoliBriDevHelper, register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { KERN_V2 } from '@public-ui/theme-kern';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

register(KERN_V2, defineCustomElements, { translation: { name: 'de' } })
	.then(() => {
		KoliBriDevHelper.patchTheme(
			'kern-v2',
			{
				// ── Inputs – white background, brand-aligned focus ring ──────────────
				'KOL-INPUT-TEXT': `
					kol-input-text {
						--kol-input-background: #ffffff;
						--kol-color-primary: #003d82;
					}
				`,
				'KOL-SINGLE-SELECT': `
					kol-single-select {
						--kol-input-background: #ffffff;
						--kol-color-primary: #003d82;
					}
				`,
				// ── Buttons – use brand blue as primary ───────────────────────────────
				'KOL-BUTTON': `
					kol-button {
						--kol-color-primary: #003d82;
					}
				`,
				// ── Cards – subtle shadow, rounded corners ────────────────────────────
				'KOL-CARD': `
					kol-card {
						--kol-color-primary: #003d82;
						border-radius: 6px;
						box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05);
					}
				`,
				// ── Badges – compact tag appearance ──────────────────────────────────
				'KOL-BADGE': `
					kol-badge {
						font-size: 0.7rem;
						font-family: 'Fira Sans', system-ui, sans-serif;
					}
				`,
			},
			{ append: true },
		);

		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			const root = createRoot(htmlElement);
			root.render(
				<StrictMode>
					<App />
				</StrictMode>,
			);
		}
	})
	.catch(console.error);
