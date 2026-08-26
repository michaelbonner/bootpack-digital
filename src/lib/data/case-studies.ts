import WasatchFabrication from '../../images/work/wasatch-fabrication.jpg?w=320;480;640;800;960;1200;1440&enhanced';
import AdminDashboard from '../../images/case-study/wasatch-fabrication/admin-dashboard.jpg?enhanced';
import AdminQuote from '../../images/case-study/wasatch-fabrication/admin-quote.jpg?enhanced';
import DashboardHome from '../../images/case-study/wasatch-fabrication/dashboard-home.jpg?enhanced';
import DashboardInvoices from '../../images/case-study/wasatch-fabrication/dashboard-invoices.jpg?enhanced';
import DashboardPayInvoice from '../../images/case-study/wasatch-fabrication/dashboard-pay-invoice.jpg?enhanced';
import DashboardProfile from '../../images/case-study/wasatch-fabrication/dashboard-profile.jpg?enhanced';
import DashboardQuotes from '../../images/case-study/wasatch-fabrication/dashboard-quotes.jpg?enhanced';
import MarketingHome from '../../images/case-study/wasatch-fabrication/marketing-home.jpg?enhanced';
import MarketingService from '../../images/case-study/wasatch-fabrication/marketing-service.jpg?enhanced';

import EnergySafeKidsHome from '../../images/case-study/energysafekids/general-home.jpg?w=320;480;640;800;960;1200&enhanced';
import EnergySafeKidsAbout from '../../images/case-study/energysafekids/general-about.jpg?enhanced';
import EnergySafeKidsTeachers from '../../images/case-study/energysafekids/general-teachers.jpg?enhanced';
import RockyMountainPowerHome from '../../images/case-study/energysafekids/rmp-home.jpg?enhanced';
import RockyMountainPowerAbout from '../../images/case-study/energysafekids/rmp-about.jpg?enhanced';
import EnergySafeLeadersHome from '../../images/case-study/energysafekids/esl-home.jpg?enhanced';
import EnergySafeLeadersStudentResources from '../../images/case-study/energysafekids/esl-student-resources.jpg?enhanced';
import type { Picture } from 'vite-imagetools';

export interface CaseStudy {
	slug: string;
	title: string;
	description: string;
	image: Picture;
	link: string;
	features: {
		title: string;
		description: string;
		icon?: string;
	}[];
	htmlContent?: string;
	sections?: {
		title: string;
		content: string[]; // Array of paragraphs
		image?: Picture;
		images?: Picture[];
		imageAlt?: string;
	}[];
	testimonial?: {
		quote: string;
		author: string;
		company?: string;
	};
	relatedBlogPost?: {
		href: string;
		title: string;
		description: string;
	};
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'energy-safe-kids',
		title: 'Energy Safe Kids',
		description:
			'We built one platform that lets the National Energy Foundation manage more than 30 educational sites for utility partners without maintaining each site separately.',
		image: EnergySafeKidsHome,
		link: 'https://energysafekids.org',
		features: [
			{
				title: 'One platform, more than 30 sites',
				description:
					'Every partner site runs on the same system. NEF can publish an update across the network or send it only to selected regions.',
				icon: 'lightning' // Using lightning as a metaphor for power/energy
			},
			{
				title: 'A distinct brand for every partner',
				description:
					'Each utility partner has its own colors, logo, and regional content. NEF can launch a new branded site without rebuilding the platform.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'Publish once, update many sites',
				content: [
					'The National Energy Foundation (NEF) works with utility companies across the country to teach children about energy safety. Each partner needed its own site, which left NEF maintaining duplicate content and repeating the same updates.',
					'We built a central content management system for safety resources, lesson plans, and games. NEF can publish an item to every partner site or select specific regions, replacing hours of copying and pasting with one update.'
				],
				images: [EnergySafeKidsAbout, EnergySafeKidsTeachers]
			},
			{
				title: 'One system, distinct partner brands',
				content: [
					"A shared platform does not require a shared look. Rocky Mountain Power visitors see that utility's logo, colors, and local information. Pacific Power visitors see its brand and content, all from the same system.",
					'A new utility partner once required about four weeks of development. Now NEF can upload a logo, choose the brand colors, and launch the site in about an hour. The organization has used that process to onboard 30 partners.'
				],
				images: [RockyMountainPowerHome, RockyMountainPowerAbout]
			},
			{
				title: 'Reaching high school students',
				content: [
					'NEF also wanted to reach high school students. We built Energy Safe Leaders on the existing platform instead of creating and maintaining another system.',
					'The program has its own age-appropriate content and visual design, while sharing the same content management system and infrastructure as Energy Safe Kids. NEF can serve both audiences without duplicating the work behind the sites.'
				],
				images: [EnergySafeLeadersHome, EnergySafeLeadersStudentResources]
			}
		]
	},
	{
		slug: 'wasatch-fabrication',
		title: 'Wasatch Fabrication',
		description:
			"In under six weeks, we turned Wasatch Fabrication's idea into a custom platform for quotes, invoices, payments, job updates, and customer communication.",
		image: WasatchFabrication,
		link: 'https://wasatchfabrication.com',
		features: [
			{
				title: 'Launched in under six weeks',
				description:
					'We designed and shipped the database, API, marketing site, admin portal, customer dashboard, and payment flow in under six weeks.',
				icon: 'lightning'
			},
			{
				title: 'One workflow for staff and customers',
				description:
					'Staff manage quotes, invoices, and payments while customers request quotes, track jobs, share files, and pay online.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'From first conversation to launch in under six weeks',
				content: [
					'Wasatch Fabrication had orders coming in but no central system to manage them. The team needed software quickly, so we focused on the essential workflow, shipped updates daily, and used their feedback to decide what to build next.',
					'In under six weeks, we delivered the database, API, marketing site, admin portal, customer dashboard, and payment flow. Daily feedback kept the scope grounded in the work Wasatch Fabrication was already doing.'
				],
				images: [MarketingHome, MarketingService]
			},
			{
				title: 'A clear view for every customer',
				content: [
					'Before the portal, quote requests, status updates, files, and invoices all moved through email. Details were easy to lose. We built a customer dashboard where clients can request quotes, upload files, and follow each job from start to finish.',
					"Customers can check an order's status, review past work, and pay invoices through Stripe. They no longer need to email the team whenever they want an update."
				],
				images: [
					DashboardHome,
					DashboardQuotes,
					DashboardInvoices,
					DashboardPayInvoice,
					DashboardProfile
				]
			},
			{
				title: 'An admin portal built around the real workflow',
				content: [
					"We shaped the admin portal around Wasatch Fabrication's workflow. The team reviews each quote request, adds line-item pricing, sends the invoice, and starts production after payment.",
					'Staff can generate invoices, collect payments through Stripe, and keep messages and files attached to the right job. The full record stays in one place instead of being split across inboxes.'
				],
				images: [AdminDashboard, AdminQuote]
			}
		],
		testimonial: {
			quote:
				"We gave Bootpack an idea and a loose outline, and they turned it into a site ready to take orders in no time! We've already seen a big uptick in customers sending in quote requests.",
			author: 'Alvin',
			company: 'Wasatch Fabrication'
		},
		relatedBlogPost: {
			href: '/blog/ai-product-iteration',
			title: 'Rapid product iteration with AI',
			description:
				'How we build working prototypes in isolated sandboxes so clients can test an idea and learn from it before committing to a full build.'
		}
	}
];
