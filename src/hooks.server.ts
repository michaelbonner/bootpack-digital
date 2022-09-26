/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('Content-Security-Policy', "frame-ancestors 'none'");
	response.headers.set('X-Content-Type-Options', 'nosniff');

	return response;
}
