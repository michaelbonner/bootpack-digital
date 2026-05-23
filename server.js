import { getHandler } from './build/handler.js';

const FICTIVEWEB_HOSTS = new Set(['fictiveweb.com', 'www.fictiveweb.com']);

const PATH_REDIRECTS = {
	'/schedule-a-call':
		'https://savvycal.com/bootpack/30-minute-project-discussion?utm_source=schedule-a-call',
	'/cms-made-simple-vs-wordpress': 'https://bootpackdigital.com/work'
};

const { fetch: sveltekitFetch, websocket } = getHandler();

// eslint-disable-next-line no-undef
const server = Bun.serve({
	hostname: process.env.HOST ?? '0.0.0.0',
	port: process.env.PORT ?? '3000',
	fetch(request, srv) {
		const url = new URL(request.url);
		const host = (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '')
			.toLowerCase()
			.split(':')[0];

		if (FICTIVEWEB_HOSTS.has(host)) {
			const target = new URL(url.pathname + url.search, 'https://bootpackdigital.com');
			target.searchParams.set('fictiveweb', 'bootpackdigital');
			return Response.redirect(target.toString(), 301);
		}

		const normalizedPath = url.pathname.replace(/\/$/, '') || '/';
		const pathTarget = PATH_REDIRECTS[normalizedPath];
		if (pathTarget) {
			return Response.redirect(pathTarget, 301);
		}

		return sveltekitFetch(request, srv);
	},
	...(websocket ? { websocket } : {})
});

console.log(`Listening on ${server.url}`);
