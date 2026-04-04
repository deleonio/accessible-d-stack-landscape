import { page } from '@vitest/browser/context';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { ArticleCard } from '../ArticleCard';
import type { Article } from '../../types';

vi.mock('@public-ui/react-v19', () => ({
	KolCard: ({ _label, children }: { _label: string; children: React.ReactNode }) => (
		<article aria-label={_label}>{children}</article>
	),
	KolBadge: ({ _label }: { _label: string }) => <span className="badge">{_label}</span>,
}));

const mockArticle: Article = {
	id: '1',
	name: 'Test Tool',
	category: 'testing',
	description: 'A test tool for testing purposes',
	tags: ['test', 'automation'],
	featured: false,
};

const featuredArticle: Article = {
	...mockArticle,
	id: '2',
	name: 'Featured Tool',
	featured: true,
	logo: '/logo.svg',
};

describe('ArticleCard', () => {
	it('renders article name and description', async () => {
		const { getByText } = render(<ArticleCard article={mockArticle} />);

		expect(getByText('Test Tool')).toBeInTheDocument();
		expect(getByText('A test tool for testing purposes')).toBeInTheDocument();
		expect(getByText('test')).toBeInTheDocument();
		expect(getByText('automation')).toBeInTheDocument();

		await page.screenshot({ path: 'screenshots/article-card.png' });
	});

	it('shows featured indicator for featured articles', async () => {
		const { getByText } = render(<ArticleCard article={featuredArticle} />);

		expect(getByText('Featured')).toBeInTheDocument();

		await page.screenshot({ path: 'screenshots/article-card-featured.png' });
	});

	it('renders logo when provided', () => {
		const { getByAltText } = render(<ArticleCard article={featuredArticle} />);
		const img = getByAltText('Featured Tool');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', '/logo.svg');
	});

	it('does not render logo when not provided', () => {
		const { queryByRole } = render(<ArticleCard article={mockArticle} />);
		expect(queryByRole('img')).not.toBeInTheDocument();
	});

	it('has no accessibility violations', async () => {
		const { container } = render(<ArticleCard article={mockArticle} />);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
