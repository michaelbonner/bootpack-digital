// Custom Bun entry for the SvelteKit 3 build produced by @sveltejs/adapter-bun.
//
// The adapter's own entry (`bun ./build`) serves prerendered pages and client
// assets as native Bun routes, which match on pathname alone — a fetch wrapper
// can never see those requests. This app needs every request to pass through a
// JS handler first, because it owns two redirects that must fire before static
// content is served (verified live in production):
//
//   - fictiveweb.com hosts are 301'd to bootpackdigital.com (any path, with a
//     ?fictiveweb=... marker the site's redirect modal reads), including
//     prerendered paths like /work that native routes would otherwise serve
//     as-is
//   - a couple of legacy marketing paths are 301'd to their new homes
//
// So instead of native routes, this entry re-registers the adapter's build-time
// asset table as an in-memory map (same etags, same immutable caching) and
// consults it inside fetch. Static serving that misses falls through to the
// SvelteKit server instance, which SSR-renders prerendered routes — the same
// flow this app has always used. See node_modules/@sveltejs/adapter-bun/src for
// the logic this mirrors (handler.js, routes.js, routes-util.js).

import { posix } from 'node:path';

import {
	app_dir,
	assets,
	base,
	dir,
	origin,
	redirects,
	server,
	server_assets
} from './build/adapter-bun.js';

// The generated build module is untyped JavaScript, so its tuple-shaped exports
// widen to unions of string and meta objects on destructuring. Name the
// entries so the table loops below type-check as what the adapter writes.

/**
 * An entry of the adapter's `assets` table: `[helper, url, filename, meta]`,
 * where helper is `client_asset`, `prerendered_asset` or `prerendered_page`.
 * @typedef {[helper: string, url: string, filename: string, meta: { hash: string, mtime?: number }]} AssetEntry
 */

/**
 * An entry of the adapter's `redirects` table: `[url, status, location]`.
 * @typedef {[url: string, status: number, location: string]} RedirectEntry
 */

const FICTIVEWEB_HOSTS = new Set(['fictiveweb.com', 'www.fictiveweb.com']);

const PATH_REDIRECTS = {
	'/schedule-a-call':
		'https://bookameetingtime.com/book/michael-bonner/bootpack-project-discussion-198efa?utm_source=schedule-a-call',
	'/cms-made-simple-vs-wordpress': 'https://bootpackdigital.com/work'
};

// --- proxy/env plumbing (mirrors the adapter's handler.js) ---

const protocol_header = (Bun.env.PROTOCOL_HEADER ?? '').toLowerCase();
const host_header = (Bun.env.HOST_HEADER ?? '').toLowerCase();
const port_header = (Bun.env.PORT_HEADER ?? '').toLowerCase();
const address_header = (Bun.env.ADDRESS_HEADER ?? '').toLowerCase();
const xff_depth = Number(Bun.env.XFF_DEPTH ?? 1);

const server_file_map = new Map(
	server_assets.map(([file]) => [file, Bun.file(`${dir}/client/${file}`)])
);

await server.init({
	env: Bun.env,
	read: (file) => server_file_map.get(file)?.stream() ?? null
});

/**
 * The public origin the request was made to, so CSRF checks compare like with
 * like. TLS is assumed to terminate upstream (Cloudflare -> Dokploy), which the
 * env vars can correct when a proxy uses forwarded headers.
 * @param {Request} request
 * @param {URL} url
 * @returns {string}
 */
function get_origin(request, url) {
	if (origin) return origin;

	const protocol = decodeURIComponent(
		(protocol_header && request.headers.get(protocol_header)) || 'https'
	);
	if (!/^https?$/i.test(protocol)) {
		throw new Error(
			`The ${protocol_header} header specified ${protocol} which is an invalid protocol scheme. It should only contain the protocol scheme (e.g. \`https\`)`
		);
	}

	const host =
		(host_header && request.headers.get(host_header)) || (request.headers.get('host') ?? url.host);
	if (!host) {
		throw new Error(
			`Could not determine host from the ${host_header ? `${host_header} or ` : ''}host header`
		);
	}

	const port = port_header ? request.headers.get(port_header) : null;
	if (port && isNaN(+port)) {
		throw new Error(
			`The ${port_header} header specified ${port} which is an invalid port because it is not a number. The value should only contain the port number (e.g. \`443\`)`
		);
	}

	return new URL(`${protocol}://${host}${port ? `:${port}` : ''}`).origin;
}

/**
 * Rewrites the request onto the public origin the user actually requested.
 * @param {Request} request
 * @returns {Request | Response}
 */
function normalize_request(request) {
	try {
		// an empty Host header makes request.url relative, so parsing belongs in the try
		const url = new URL(request.url);
		const request_origin = get_origin(request, url);
		return request_origin === url.origin
			? request
			: new Request(request_origin + url.pathname + url.search, request);
	} catch (error) {
		console.error(
			`Could not determine request origin: ${error instanceof Error ? error.message : String(error)}`
		);
		return new Response('Bad Request', { status: 400 });
	}
}

/**
 * Resolves the client IP, honouring a trusted proxy header if configured.
 * @param {Request} request
 * @param {any} bun_server the Bun server instance handling the request
 * @returns {string}
 */
function get_client_address(request, bun_server) {
	if (!address_header) {
		return /** @type {string} */ (bun_server.requestIP(request)?.address);
	}

	const value = request.headers.get(address_header);
	if (value === null) {
		throw new Error(
			`Address header was specified with ADDRESS_HEADER=${address_header} but is absent from request`
		);
	}
	if (address_header !== 'x-forwarded-for') return value;

	const addresses = value.split(',');
	if (xff_depth > addresses.length) {
		throw new Error(`XFF_DEPTH is ${xff_depth}, but only found ${addresses.length} addresses`);
	}
	return addresses[addresses.length - xff_depth].trim();
}

// --- static serving (mirrors the adapter's routes.js / routes-util.js) ---

/** @type {Map<string, { file: string, etag: string, immutable: boolean }>} */
const static_files = new Map();
/** @type {Map<string, { status: number, location: string }>} */
const static_redirects = new Map();

/**
 * The path and, for directories, the path without its trailing slash — so
 * /index.html is served at /.
 * @param {string} url
 * @returns {string[]}
 */
function directory_paths(url) {
	const directory = `${posix.join(base, url).replace(/\/$/, '')}/`;
	const paths = [directory];
	if (directory !== '/') {
		paths.push(directory.slice(0, -1));
	}
	return paths;
}

for (const [helper, url, filename, meta] of /** @type {AssetEntry[]} */ (assets)) {
	const etag = `"${meta.hash}"`;

	if (helper === 'client_asset') {
		const file = `${dir}/client/${filename}`;
		const immutable = url.startsWith(`${app_dir}/immutable/`);
		const paths = [posix.join(base, url)];
		if (url.endsWith('/index.html') || url === 'index.html') {
			paths.push(...directory_paths(url.slice(0, -'index.html'.length)));
		} else if (url.endsWith('.html')) {
			// sirv also serves `page.html` at `/page`
			paths.push(posix.join(base, url.slice(0, -'.html'.length)));
		}
		for (const path of paths) {
			static_files.set(path, { file, etag, immutable });
		}
	} else if (helper === 'prerendered_asset') {
		static_files.set(posix.join(base, url), {
			file: `${dir}/prerendered/${filename}`,
			etag,
			immutable: false
		});
	} else if (helper === 'prerendered_page') {
		// page urls already contain the base
		static_files.set(url, { file: `${dir}/prerendered/${filename}`, etag, immutable: false });
		// requests for the wrong trailing-slash form redirect to the canonical one
		const inverted = url.endsWith('/') ? url.slice(0, -1) : `${url}/`;
		if (inverted) {
			static_redirects.set(inverted, { status: 308, location: url });
		}
	}
}

for (const [url, status, location] of /** @type {RedirectEntry[]} */ (redirects)) {
	static_redirects.set(url, { status, location });
}

const IMMUTABLE_CACHE_CONTROL = 'public,max-age=31536000,immutable';

/**
 * Serves a build asset with its build-time etag, honouring If-None-Match.
 * @param {Request} request
 * @param {{ file: string, etag: string, immutable: boolean }} hit
 * @returns {Response}
 */
function serve_static(request, hit) {
	const cache_control = hit.immutable ? IMMUTABLE_CACHE_CONTROL : undefined;
	const headers = { etag: hit.etag, ...(cache_control ? { 'cache-control': cache_control } : {}) };

	const if_none_match = request.headers.get('if-none-match');
	if (
		if_none_match
			?.split(',')
			.some((value) => ['*', hit.etag].includes(value.trim().replace(/^W\//, '')))
	) {
		return new Response(null, { status: 304, headers });
	}

	return new Response(Bun.file(hit.file), {
		headers: { 'content-type': Bun.file(hit.file).type, ...headers }
	});
}

// --- the server ---

const server_instance = Bun.serve({
	hostname: process.env.HOST ?? '0.0.0.0',
	port: process.env.PORT ?? '3000',
	async fetch(request, srv) {
		const host = (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '')
			.toLowerCase()
			.split(':')[0];

		if (FICTIVEWEB_HOSTS.has(host)) {
			const url = new URL(request.url);
			const target = new URL(url.pathname + url.search, 'https://bootpackdigital.com');
			target.searchParams.set('fictiveweb', 'bootpackdigital');
			return Response.redirect(target.toString(), 301);
		}

		const url = new URL(request.url);
		const normalizedPath = url.pathname.replace(/\/$/, '') || '/';
		const pathTarget = PATH_REDIRECTS[normalizedPath];
		if (pathTarget) {
			return Response.redirect(pathTarget, 301);
		}

		// static assets and prerendered pages, served from the build-time table
		// so the redirects above are consulted first, for every request
		if (request.method === 'GET' || request.method === 'HEAD') {
			const redirect = static_redirects.get(url.pathname);
			if (redirect) {
				return new Response(null, {
					status: redirect.status,
					headers: { location: redirect.location + url.search }
				});
			}

			const hit = static_files.get(url.pathname) ?? static_files.get(safe_decode(url.pathname));
			if (hit) {
				return serve_static(request, hit);
			}
		}

		// everything else: SvelteKit (SSR routes, API endpoints, 404s)
		const normalized = normalize_request(request);
		if (normalized instanceof Response) return normalized;

		const response = await server.respond(normalized, {
			platform: { server: srv },
			getClientAddress: () => get_client_address(request, srv)
		});

		if (response.headers.get('content-type')?.startsWith('text/event-stream')) {
			srv.timeout(request, 0);
			response.headers.set('x-accel-buffering', 'no');
		}

		return response;
	}
});

/**
 * @param {string} value
 * @returns {string}
 */
function safe_decode(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}

console.log(`Listening on ${server_instance.url}`);
