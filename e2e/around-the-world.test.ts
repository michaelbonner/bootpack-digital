import { expect, test } from '@playwright/test';

test('can load all pages', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/about');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/work');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/open-source');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/contact');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/policies');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/policies/privacy-policy');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/policies/cookie-policy');
	await expect(page.locator('h1')).toBeVisible();

	await page.goto('/policies/terms-of-service');
	await expect(page.locator('h1')).toBeVisible();
});
