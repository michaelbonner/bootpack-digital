import type { RouteId } from '$app/types';

export const navLinks: { label: string; url: RouteId }[] = [
	{
		label: 'Home',
		url: '/'
	},
	{
		label: 'Work',
		url: '/work'
	},
	{
		label: 'Case Studies',
		url: '/case-studies'
	},
	{
		label: 'About',
		url: '/about'
	},
	{
		label: 'Open-source',
		url: '/open-source'
	},
	{
		label: 'Blog',
		url: '/blog'
	},
	{
		label: 'Contact',
		url: '/contact'
	}
];
