export type Article = {
	id: string;
	name: string;
	category: string;
	description: string;
	logo?: string;
	tags: string[];
	featured: boolean;
};

export type Category = {
	id: string;
	name: string;
	color: string;
};

export type FilterState = {
	searchQuery: string;
	selectedCategory: string | null;
};
