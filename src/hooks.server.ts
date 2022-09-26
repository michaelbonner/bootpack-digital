/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('Content-Security-Policy', "default-src 'self'");
	response.headers.set('X-Content-Type-Options', 'nosniff');

	return response;
}
