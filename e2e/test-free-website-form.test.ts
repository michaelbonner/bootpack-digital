import { test, expect } from '@playwright/test';

test('free website application form', async ({ page }) => {
	await page.goto('/bootpack-for-good');
	await page.getByRole('textbox', { name: 'First Name*' }).fill('Test');
	await page.getByRole('textbox', { name: 'Last Name*' }).fill('Test');
	await page.getByRole('textbox', { name: 'Email*' }).fill('test@test.test');
	await page.getByRole('textbox', { name: 'Phone Number' }).fill('8012223333');
	await page.getByRole('textbox', { name: 'Organization Name*' }).fill('Test Org');
	await page.getByLabel('Organization Type').selectOption('Nonprofit (501c3)');
	await page.getByRole('textbox', { name: 'City / Area*' }).fill('Salt Lake City');
	await page
		.getByRole('textbox', { name: 'Tell us about your organization and the good you do*' })
		.fill('We help the local community.');
	await page
		.getByRole('textbox', { name: 'What would a website help you accomplish?*' })
		.fill('Reach more people and share our programs.');
	await page.getByRole('checkbox').check();
	await page.getByRole('button', { name: 'Apply for a free website' }).click();
	await expect(page.getByText('Application received!')).toBeVisible();
});
