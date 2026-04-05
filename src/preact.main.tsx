import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { KERN_V2 } from '@public-ui/theme-kern';

import { render } from 'preact';
import App from './App';

register(KERN_V2, defineCustomElements, { translation: { name: 'de' } })
	.then(() => {
		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			render(<App />, htmlElement);
		}
	})
	.catch(console.error);
