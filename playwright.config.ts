import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'bun run build && bun run preview',
		port: 4173,
		timeout: 180_000
	},
	testDir: 'e2e',
	outputDir: 'playwright-report'
});
