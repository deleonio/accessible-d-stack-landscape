import { page } from '@vitest/browser/context';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { Footer } from '../Footer';

describe('Footer', () => {
	it('renders copyright text', async () => {
		const { getByRole } = render(<Footer />);

		expect(getByRole('contentinfo')).toBeInTheDocument();

		await page.screenshot({ path: 'screenshots/footer.png' });
	});

	it('has no accessibility violations', async () => {
		const { container } = render(<Footer />);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
