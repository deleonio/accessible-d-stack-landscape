import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';

import { render } from 'preact';
import App from './App';

register(DEFAULT, defineCustomElements, { translation: { name: 'de' } })
	.then(() => {
		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			render(<App />, htmlElement);
		}
	})
	.catch(console.error);
