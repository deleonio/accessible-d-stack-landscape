declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.scss';
declare module '*.css';
declare module 'uno.css';

interface ImportMetaEnv {
	readonly VITE_COMMIT_SHA?: string;
	readonly VITE_ASSET_BASE_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
