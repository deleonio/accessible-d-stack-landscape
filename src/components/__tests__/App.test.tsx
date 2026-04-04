import { page } from '@vitest/browser/context';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { SCREENSHOTS_DIR } from '../../test/constants';
import App from '../../App';

vi.mock('@public-ui/react-v19');

describe('App', () => {
	it('renders the full application layout', async () => {
		const { getByRole } = render(<App />);

		expect(getByRole('banner')).toBeInTheDocument();
		expect(getByRole('contentinfo')).toBeInTheDocument();
		expect(getByRole('heading', { level: 1 })).toBeInTheDocument();

		await page.screenshot({ path: `${SCREENSHOTS_DIR}/app-full.png` });
	});

	it('has no accessibility violations on initial load', async () => {
		const { container } = render(<App />);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
