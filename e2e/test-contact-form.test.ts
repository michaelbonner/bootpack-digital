import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await page.getByRole('banner').getByRole('link', { name: 'Contact' }).click();
	await page.getByRole('textbox', { name: 'First Name*' }).click();
	await page.getByRole('textbox', { name: 'First Name*' }).fill('Test');
	await page.getByRole('textbox', { name: 'First Name*' }).press('Tab');
	await page.getByRole('textbox', { name: 'Last Name*' }).fill('Test');
	await page.getByRole('textbox', { name: 'Last Name*' }).press('Tab');
	await page.getByRole('textbox', { name: 'Email*' }).fill('test@test.test');
	await page.getByRole('textbox', { name: 'Email*' }).press('Tab');
	await page.getByRole('textbox', { name: 'Company' }).fill('Test');
	await page.getByRole('textbox', { name: 'Company' }).press('Tab');
	await page.getByRole('textbox', { name: 'Phone Number' }).fill('8012223333');
	await page.getByRole('textbox', { name: 'Phone Number' }).press('Tab');
	await page.getByRole('textbox', { name: 'How Can We Help?*' }).fill('Testing the form');
	await page.getByRole('button', { name: 'Submit' }).click();
	await expect(page.getByText('Thank you for contacting us')).toBeVisible();
});
