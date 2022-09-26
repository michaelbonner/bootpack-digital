import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set('Content-Security-Policy', "frame-src 'self'");
	response.headers.set('X-Content-Type-Options', 'nosniff');

	return response;
};
