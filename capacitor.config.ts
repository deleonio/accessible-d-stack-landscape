import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'de.dstack.landscape',
	appName: 'D-Stack Landscape',
	webDir: 'dist',
	server: {
		androidScheme: 'https',
	},
};

export default config;
