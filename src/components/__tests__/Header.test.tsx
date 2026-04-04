import { page } from '@vitest/browser/context';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { Header } from '../Header';

describe('Header', () => {
	it('renders heading and subtitle', async () => {
		const { getByRole, getByText } = render(<Header />);

		expect(getByRole('banner')).toBeInTheDocument();
		expect(getByRole('heading', { level: 1 })).toBeInTheDocument();
		expect(getByText('Interactive visualization of the ecosystem')).toBeInTheDocument();

		await page.screenshot({ path: 'screenshots/header.png' });
	});

	it('has no accessibility violations', async () => {
		const { container } = render(<Header />);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
