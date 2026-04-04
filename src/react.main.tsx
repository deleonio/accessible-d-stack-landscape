import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { KERN_V2 } from '@public-ui/theme-kern';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

register(KERN_V2, defineCustomElements, { translation: { name: 'en' } })
	.then(() => {
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
