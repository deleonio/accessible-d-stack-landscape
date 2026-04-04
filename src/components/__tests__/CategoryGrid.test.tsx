import { page } from '@vitest/browser/context';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { CategoryGrid } from '../CategoryGrid';
import type { Article, Category, FilterState } from '../../types';

vi.mock('@public-ui/react-v19', () => ({
	KolButton: ({
		_label,
		_on,
		_variant,
	}: {
		_label: string;
		_on?: { onClick?: () => void };
		_variant?: string;
	}) => (
		<button onClick={_on?.onClick} data-variant={_variant}>
			{_label}
		</button>
	),
	KolCard: ({ _label, children }: { _label: string; children: React.ReactNode }) => (
		<article aria-label={_label}>{children}</article>
	),
	KolBadge: ({ _label }: { _label: string }) => <span className="badge">{_label}</span>,
}));

const categories: Category[] = [
	{ id: 'cat1', name: 'Category 1', color: '#ff0000' },
	{ id: 'cat2', name: 'Category 2', color: '#00ff00' },
];

const articles: Article[] = [
	{
		id: 'a1',
		name: 'Article 1',
		category: 'cat1',
		description: 'Description 1',
		tags: ['tag1'],
		featured: false,
	},
	{
		id: 'a2',
		name: 'Article 2',
		category: 'cat2',
		description: 'Description 2',
		tags: ['tag2'],
		featured: true,
	},
];

const defaultFilters: FilterState = { searchQuery: '', selectedCategory: null };

describe('CategoryGrid', () => {
	it('renders all category filter buttons', async () => {
		const { getByText } = render(
			<CategoryGrid
				categories={categories}
				articles={articles}
				filters={defaultFilters}
				onFilterChange={vi.fn()}
			/>,
		);

		expect(getByText('Category 1')).toBeInTheDocument();
		expect(getByText('Category 2')).toBeInTheDocument();

		await page.screenshot({ path: 'screenshots/category-grid.png' });
	});

	it('renders all articles', () => {
		const { getByText } = render(
			<CategoryGrid
				categories={categories}
				articles={articles}
				filters={defaultFilters}
				onFilterChange={vi.fn()}
			/>,
		);

		expect(getByText('Article 1')).toBeInTheDocument();
		expect(getByText('Article 2')).toBeInTheDocument();
	});

	it('calls onFilterChange when category button is clicked', async () => {
		const onFilterChange = vi.fn();
		const { getByText } = render(
			<CategoryGrid
				categories={categories}
				articles={articles}
				filters={defaultFilters}
				onFilterChange={onFilterChange}
			/>,
		);

		getByText('Category 1').click();
		expect(onFilterChange).toHaveBeenCalledWith({ searchQuery: '', selectedCategory: 'cat1' });
	});

	it('deselects category when active button is clicked', () => {
		const onFilterChange = vi.fn();
		const { getByText } = render(
			<CategoryGrid
				categories={categories}
				articles={articles}
				filters={{ ...defaultFilters, selectedCategory: 'cat1' }}
				onFilterChange={onFilterChange}
			/>,
		);

		getByText('Category 1').click();
		expect(onFilterChange).toHaveBeenCalledWith({ searchQuery: '', selectedCategory: null });
	});

	it('has no accessibility violations', async () => {
		const { container } = render(
			<CategoryGrid
				categories={categories}
				articles={articles}
				filters={defaultFilters}
				onFilterChange={vi.fn()}
			/>,
		);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
