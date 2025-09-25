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
		label: 'About',
		url: '/about'
	},
	{
		label: 'Open-source',
		url: '/open-source'
	},
	{
		label: 'Contact',
		url: '/contact'
	}
];
