import WasatchFabrication from '../../images/work/wasatch-fabrication.jpg?enhanced';
import AdminDashboard from '../../images/case-study/wasatch-fabrication/admin-dashboard.jpg?enhanced';
import AdminQuote from '../../images/case-study/wasatch-fabrication/admin-quote.jpg?enhanced';
import DashboardHome from '../../images/case-study/wasatch-fabrication/dashboard-home.jpg?enhanced';
import DashboardInvoices from '../../images/case-study/wasatch-fabrication/dashboard-invoices.jpg?enhanced';
import DashboardPayInvoice from '../../images/case-study/wasatch-fabrication/dashboard-pay-invoice.jpg?enhanced';
import DashboardProfile from '../../images/case-study/wasatch-fabrication/dashboard-profile.jpg?enhanced';
import DashboardQuotes from '../../images/case-study/wasatch-fabrication/dashboard-quotes.jpg?enhanced';
import MarketingHome from '../../images/case-study/wasatch-fabrication/marketing-home.jpg?enhanced';
import MarketingService from '../../images/case-study/wasatch-fabrication/marketing-service.jpg?enhanced';

import EnergySafeKidsHome from '../../images/case-study/energysafekids/general-home.jpg?enhanced';
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
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'energy-safe-kids',
		title: 'Energy Safe Kids',
		description:
			'We built a multi-tenant platform for the National Energy Foundation that lets one team manage dozens of branded educational sites for utility partners, without the copy-paste nightmare.',
		image: EnergySafeKidsHome,
		link: 'https://energysafekids.org',
		features: [
			{
				title: 'Multi-Tenant Architecture',
				description:
					'One codebase, dozens of sites. When NEF pushes an update, every partner site gets it instantly; no deployment marathons required.',
				icon: 'lightning' // Using lightning as a metaphor for power/energy
			},
			{
				title: 'White-Label Branding',
				description:
					'Each utility partner gets a site that looks and feels like their own, right down to brand colors, logos, and regional content.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'One CMS to Rule Them All',
				content: [
					'The National Energy Foundation (NEF) works with utility companies across the country to teach kids about energy safety. The problem? Every partner needed their own site, and NEF was drowning in duplicate content and one-off updates.',
					'We built them a centralized CMS where they publish safety resources, lesson plans, and games once, then push that content to every partner site, or just specific regions. What used to take hours of copy-pasting now takes a single click.'
				],
				images: [EnergySafeKidsAbout, EnergySafeKidsTeachers]
			},
			{
				title: 'Same Platform, Different Brand',
				content: [
					"Here's the cool part: even though everything runs on one platform, each partner's site feels completely custom. Rocky Mountain Power visitors see RMP branding, colors, and local info. Pacific Power visitors get theirs. It all happens automatically.",
					"Adding a new utility partner used to mean building a whole new site. Now it's closer to flipping a switch; upload their logo, set their colors, and they're live. NEF can onboard new partners in a fraction of the time it used to take."
				],
				images: [RockyMountainPowerHome, RockyMountainPowerAbout]
			},
			{
				title: 'Growing Up: Energy Safe Leaders',
				content: [
					"The original platform was built for younger kids, but NEF wanted to reach high schoolers too. Rather than start from scratch, we built 'Energy Safe Leaders' on top of the same tech stack.",
					"It's a more mature look and feel with age-appropriate content, but under the hood it shares the same CMS and multi-tenant architecture. One platform, two audiences, and room to grow into more."
				],
				images: [EnergySafeLeadersHome, EnergySafeLeadersStudentResources]
			}
		]
	},
	{
		slug: 'wasatch-fabrication',
		title: 'Wasatch Fabrication',
		description:
			'Idea to launch in under 6 weeks. We built Wasatch Fabrication a custom platform that handles quoting, invoicing, payments, and customer communication, all in one place.',
		image: WasatchFabrication,
		link: 'https://wasatchfabrication.com',
		features: [
			{
				title: 'Rapid Development',
				description:
					'Six weeks from first conversation to production. Database, API, admin portal, customer portal, payments. The whole thing.',
				icon: 'lightning'
			},
			{
				title: 'Admin & Customer Portals',
				description:
					'Admins manage quotes, invoices, and payments. Customers track their jobs and pay online. No more email chains.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'Six Weeks, Start to Finish',
				content: [
					'Wasatch Fabrication had orders coming in and no system to manage them. They needed something fast, but "fast" usually means cutting corners. We took a different approach: focus on the features that matter most, ship daily, and iterate based on real feedback.',
					'In under six weeks we delivered the full stack: database design, API, a marketing site, an admin portal, and a customer-facing dashboard. It was tight, but the daily feedback loop kept us building the right things instead of guessing.'
				],
				images: [MarketingHome, MarketingService]
			},
			{
				title: 'A Dashboard Customers Actually Use',
				content: [
					'Before the portal, everything ran through email. Quote requests, status updates, file sharing, invoices. It worked, but things got lost. We built a customer dashboard where clients can submit quote requests, upload files, and track their jobs from start to finish.',
					'Customers can see exactly where their order stands, view and pay invoices online through Stripe, and pull up their full history. It cut way down on "hey, what\'s the status of my order?" emails.'
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
				title: 'The Admin Side',
				content: [
					'The admin portal is where the real work happens. We built it around how the team actually works: a quote comes in, gets reviewed, priced out with line items, and sent as an invoice. When the customer pays, production kicks off.',
					'Admins can generate invoices, collect payments through Stripe, and keep all communication tied to specific jobs. Nothing falls through the cracks because everything lives in one place instead of scattered across inboxes.'
				],
				images: [AdminDashboard, AdminQuote]
			}
		]
	}
];
