import type { RequestHandler } from './$types';

export const prerender = false;
export const trailingSlash = 'ignore';

const UPSTREAM = 'https://us.i.posthog.com';

const proxy: RequestHandler = async ({ request, params, url }) => {
	const headers = new Headers(request.headers);
	headers.delete('host');

	const init: RequestInit = {
		method: request.method,
		headers,
		redirect: 'manual'
	};

	if (request.method !== 'GET' && request.method !== 'HEAD') {
		init.body = request.body;
		// duplex is required when streaming a request body in fetch but not in the lib types yet
		(init as RequestInit & { duplex: 'half' }).duplex = 'half';
	}

	const upstream = await fetch(`${UPSTREAM}/${params.path}${url.search}`, init);

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

export const GET = proxy;
export const POST = proxy;
export const OPTIONS = proxy;
