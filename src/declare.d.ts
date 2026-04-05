declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.scss';
declare module '*.css';
declare module 'uno.css';

interface ImportMetaEnv {
	readonly BASE_URL: string;
	readonly VITE_COMMIT_SHA?: string;
	readonly VITE_ASSET_BASE_URL?: string;
	readonly VITE_BRAND_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
