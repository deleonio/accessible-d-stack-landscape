import preact from '@preact/preset-vite';
import UnoCSS from '@unocss/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const isPwaEnabled = process.env.VITE_ENABLE_PWA !== 'false';

export default defineConfig({
	base: process.env.VITE_BASE_URL ?? (process.env.GITHUB_ACTIONS ? '/accessible-d-stack-landscape/' : '/'),
	build: {
		dynamicImportVarsOptions: {
			exclude: [],
		},
	},
	plugins: [
		preact(),
		UnoCSS(),
		isPwaEnabled &&
			VitePWA({
				registerType: 'autoUpdate',
				includeAssets: ['favicon.ico', 'icons/*.png', 'assets/**/*'],
				manifest: {
					name: 'D-Stack Landscape',
					short_name: 'D-Stack',
					description: 'Interaktive Technologie-Landkarte für modernes digitales Ökosystem',
					theme_color: '#004B76',
					background_color: '#ffffff',
					display: 'standalone',
					orientation: 'portrait',
					start_url: './',
					icons: [
						{
							src: 'icons/pwa-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'icons/pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'any maskable',
						},
					],
				},
				workbox: {
					maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
					globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,woff}'],
					runtimeCaching: [
						{
							urlPattern: /^https:\/\/fonts\./,
							handler: 'CacheFirst',
							options: {
								cacheName: 'fonts-cache',
								expiration: {
									maxAgeSeconds: 60 * 60 * 24 * 365,
								},
							},
						},
					],
				},
			}),
	],
});
