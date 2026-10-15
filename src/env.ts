import { defineEnvVars } from '@sveltejs/kit/env';

// Dynamic (request-time) variables intentionally fall back to the empty string,
// matching SvelteKit 2's `$env/dynamic/private` behaviour. Every consumer
// handles the unset case itself: telegram.ts and turnstile.ts warn and skip,
// db/index.ts throws.
export const variables = defineEnvVars({
	PUBLIC_POSTHOG_ENABLED: { public: true, static: true },
	TELEGRAM_BOT_TOKEN: { schema: (input) => input ?? '' },
	TELEGRAM_CHAT_ID: { schema: (input) => input ?? '' },
	TURNSTILE_SECRET_KEY: { schema: (input) => input ?? '' },
	DATABASE_URL: { schema: (input) => input ?? '' },
	PUBLIC_TEST_CONTACT_FORM: { public: true, static: true },
	PUBLIC_TURNSTILE_SITE_KEY: { public: true, static: true }
});
