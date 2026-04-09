import presetMini from '@unocss/preset-mini';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [presetMini()],
	theme: {
		colors: {
			// Brand colours (brand-primary palette)
			'brand-primary': '#003d82',
			'brand-primary-dark': '#002d62',
			'brand-primary-light': '#1a56a0',
			'brand-accent': '#0070cb',

			// Neutral palette
			'neutral-bg': '#f6f7f8',
			'neutral-bg-white': '#fff',
			'neutral-surface': '#fff',
			'neutral-border': '#d0d3d9',
			'neutral-border-light': '#e8eaed',

			// Text
			'text-primary': '#1d2129',
			'text-muted': '#6b7280',
			'text-inverse': '#fff',

			// Category colours
			'cat-betrieb': '#00883d',
			'cat-infrastruktur': '#c5192d',
			'cat-plattform': '#003d82',
			'cat-zugang': '#f39c12',
		},
		spacing: {
			0: '0',
			1: '0.25rem', // 4px
			2: '0.5rem', // 8px
			3: '0.75rem', // 12px
			4: '1rem', // 16px
			6: '1.5rem', // 24px
			8: '2rem', // 32px
			12: '3rem', // 48px
			14: '3.5rem',
		},
		borderRadius: {
			sm: '2px',
			md: '4px',
			lg: '8px',
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
		},
		lineHeight: {
			body: '1.6',
			heading: '1.2',
			tight: '1.3',
		},
		boxShadow: {
			card: '0 1px 3px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 5%)',
			'card-hover': '0 8px 16px rgb(0 0 0 / 10%)',
			elevated: '0 2px 8px rgb(0 0 0 / 8%)',
		},
		fontFamily: {
			body: `'Fira Sans', system-ui, -apple-system, sans-serif`,
			mono: `'Fira Code', 'Courier New', monospace`,
		},
	},
	shortcuts: [
		['btn-base', 'inline-flex items-center justify-center px-3 py-2 rounded-md font-500 transition-all duration-150 ease-in-out'],
		['btn-primary', 'btn-base bg-brand-primary text-text-inverse hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-accent'],
		[
			'btn-secondary',
			'btn-base border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-text-inverse focus:outline-2 focus:outline-offset-2 focus:outline-brand-primary',
		],
		['badge-base', 'inline-flex items-center px-2 py-1 rounded-sm text-xs font-600'],
		['card-base', 'rounded-md border border-neutral-border bg-neutral-surface shadow-card transition-all duration-150'],
		['form-group', 'mb-4 flex flex-col gap-1'],
		['visually-hidden', 'absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-[rect(0,0,0,0)] border-0 whitespace-nowrap'],
	],
	safelist: [
		// Common utility combinations
		'bg-brand-primary',
		'text-text-inverse',
		'border-brand-primary',
		'animate-slide-up',
	],
});
