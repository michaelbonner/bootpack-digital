import type { RequestHandler } from './$types';

export const prerender = false;
export const trailingSlash = 'ignore';

const UPSTREAM = 'https://us-assets.i.posthog.com/static';

export const GET: RequestHandler = async ({ request, params, url }) => {
	const headers = new Headers(request.headers);
	headers.delete('host');

	const upstream = await fetch(`${UPSTREAM}/${params.path}${url.search}`, {
		method: 'GET',
		headers,
		redirect: 'manual'
	});

	const responseHeaders = new Headers(upstream.headers);
	responseHeaders.delete('content-encoding');
	responseHeaders.delete('content-length');
	responseHeaders.delete('transfer-encoding');

	return new Response(upstream.body, {
		status: upstream.status,
		statusText: upstream.statusText,
		headers: responseHeaders
	});
};
