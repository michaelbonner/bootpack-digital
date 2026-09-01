export type Service = {
	id: string;
	eyebrow: string;
	title: string;
	shortTitle: string;
	summary: string;
	shortSummary: string;
	deliverables: string[];
	tags: string[];
	path: string;
};

export const services: Service[] = [
	{
		id: 'design',
		eyebrow: 'Design',
		title: 'Product and interface design',
		shortTitle: 'Design',
		summary:
			"Design that earns its keep. We map what your customers are trying to do, sketch the screens that get them there, and hand off a system your developers can build without guessing. If you already have a brand, we work inside it. If you don't, we'll help you land on one.",
		shortSummary:
			'User flows, prototypes, and interfaces your developers can build without guessing.',
		deliverables: [
			'Discovery workshops and user flows',
			'Wireframes and clickable prototypes',
			'High fidelity UI for web and mobile',
			'Reusable design systems and component libraries',
			'Accessibility review against WCAG 2.2 AA'
		],
		tags: ['Figma', 'Design systems', 'Prototyping', 'Accessibility'],
		path: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
	},
	{
		id: 'web-development',
		eyebrow: 'Web',
		title: 'Web design and development',
		shortTitle: 'Web development',
		summary:
			'Marketing sites, ecommerce, and custom web applications. We build fast, accessible sites on modern frameworks, wire them into the tools your team already uses, and hand you a CMS your marketing people can actually run without calling a developer every week.',
		shortSummary:
			'Marketing sites, ecommerce, and custom web applications built on modern frameworks.',
		deliverables: [
			'Marketing websites and landing pages',
			'Custom web applications and internal tools',
			'Headless CMS setup and content modeling',
			'API work, integrations, and data migrations',
			'Hosting, CI/CD, and ongoing maintenance'
		],
		tags: ['SvelteKit', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Postgres'],
		path: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
	},
	{
		id: 'mobile-apps',
		eyebrow: 'Mobile',
		title: 'Mobile app design and development',
		shortTitle: 'Mobile apps',
		summary:
			'iOS and Android apps that feel native on both platforms. We design for the phone first, build on a shared codebase so you are not paying twice for the same feature, and walk the release through App Store and Play Store review with you.',
		shortSummary:
			'iOS and Android apps from one codebase, shipped through App Store and Play Store review.',
		deliverables: [
			'iOS and Android apps from one codebase',
			'Offline support, push notifications, and deep links',
			'Native device features like camera, location, and biometrics',
			'App Store and Google Play submission and review',
			'Over the air updates and crash monitoring'
		],
		tags: ['React Native', 'Expo', 'App Store', 'Google Play'],
		path: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
	},
	{
		id: 'seo',
		eyebrow: 'SEO',
		title: 'Search engine optimization',
		shortTitle: 'SEO',
		summary:
			'SEO is not something we bolt on at the end. Clean markup, fast pages, sensible URLs, and real structured data go into every site we build. When you need more than the foundation, we run the audit, fix what is broken, and track what the changes actually did to your traffic.',
		shortSummary:
			'Technical audits, Core Web Vitals, and structured data, built in rather than bolted on.',
		deliverables: [
			'Technical SEO audits and fixes',
			'Core Web Vitals and page speed work',
			'Structured data and rich result markup',
			'On page optimization and information architecture',
			'Local SEO, Google Business Profile, and analytics setup'
		],
		tags: ['Technical SEO', 'Core Web Vitals', 'Schema.org', 'Local SEO'],
		path: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
	}
];
