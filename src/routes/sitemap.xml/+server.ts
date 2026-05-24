import { caseStudies } from '$lib/data/case-studies';
import { blogPosts } from '$lib/data/blog-posts';

const routes = [
	{
		route: '/',
		priority: 1
	},
	{
		route: '/about',
		priority: 0.5
	},
	{
		route: '/contact',
		priority: 0.5
	},
	{
		route: '/open-source',
		priority: 0.5
	},
	{
		route: '/work',
		priority: 0.5
	},
	{
		route: '/bootpack-for-good',
		priority: 0.7
	},
	{
		route: '/blog',
		priority: 0.7
	},
	...blogPosts.map((post) => ({
		route: `/blog/${post.slug}`,
		priority: 0.7
	})),
	{
		route: '/case-studies',
		priority: 0.7
	},
	...caseStudies.map((study) => ({
		route: `/case-studies/${study.slug}`,
		priority: 0.7
	})),
	{
		route: '/policies',
		priority: 0.5
	},
	{
		route: '/policies/privacy-policy',
		priority: 0.3
	},
	{
		route: '/policies/cookie-policy',
		priority: 0.3
	},
	{
		route: '/policies/terms-of-service',
		priority: 0.3
	}
];

export async function GET() {
	const website = `https://bootpackdigital.com`;
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      >
        ${routes
					.map(
						(route) => `
            <url>
                <loc>${website}${route.route}</loc>
                <changefreq>weekly</changefreq>
                <priority>${route.priority}</priority>
            </url>
        `
					)
					.join('')}
      </urlset>`,
		{ headers: headers }
	);
}
