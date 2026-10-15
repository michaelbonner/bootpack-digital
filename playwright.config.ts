import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		// The command builds the whole site first, and a cold build on a CI
		// runner spends ~3 minutes re-encoding enhanced-img variants (the
		// playwright workflow has no imagetools cache), so the timeout needs
		// headroom for the build plus the preview server's startup.
		command: 'bun run build && bun run preview',
		port: 4173,
		timeout: 420_000
	},
	testDir: 'e2e',
	outputDir: 'playwright-report'
});
