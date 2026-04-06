export type LanguageCode = 'de' | 'en' | 'fr';

export type LocalizedText = {
	de: string;
	en: string;
	fr: string;
};

export type LocalizableText = string | LocalizedText;

export type Article = {
	id: string;
	name: LocalizableText;
	category: string;
	description: LocalizableText;
	logo?: string;
	tags: string[];
	featured: boolean;
};

export type Category = {
	id: string;
	name: LocalizableText;
	color: string;
};

export type FilterState = {
	searchQuery: string;
	selectedCategory: string | null;
};
