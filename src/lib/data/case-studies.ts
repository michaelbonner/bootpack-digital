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
			'We built a multi-tenant platform for the National Energy Foundation that lets one team manage dozens of branded educational sites for utility partners — without the copy-paste nightmare.',
		image: EnergySafeKidsHome,
		link: 'https://energysafekids.org',
		features: [
			{
				title: 'Multi-Tenant Architecture',
				description:
					'One codebase, dozens of sites. When NEF pushes an update, every partner site gets it instantly — no deployment marathons required.',
				icon: 'lightning' // Using lightning as a metaphor for power/energy
			},
			{
				title: 'White-Label Branding',
				description:
					'Each utility partner gets a site that looks and feels like their own — right down to brand colors, logos, and regional content.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'One CMS to Rule Them All',
				content: [
					'The National Energy Foundation (NEF) works with utility companies across the country to teach kids about energy safety. The problem? Every partner needed their own site, and NEF was drowning in duplicate content and one-off updates.',
					'We built them a centralized CMS where they publish safety resources, lesson plans, and games once, then push that content to every partner site — or just specific regions. What used to take hours of copy-pasting now takes a single click.'
				],
				images: [EnergySafeKidsAbout, EnergySafeKidsTeachers]
			},
			{
				title: 'Same Platform, Different Brand',
				content: [
					"Here's the cool part: even though everything runs on one platform, each partner's site feels completely custom. Rocky Mountain Power visitors see RMP branding, colors, and local info. Pacific Power visitors get theirs. It all happens automatically.",
					"Adding a new utility partner used to mean building a whole new site. Now it's closer to flipping a switch — upload their logo, set their colors, and they're live. NEF can onboard new partners in a fraction of the time it used to take."
				],
				images: [RockyMountainPowerHome, RockyMountainPowerAbout]
			},
			{
				title: 'Growing Up: Energy Safe Leaders',
				content: [
					"The original platform was built for younger kids, but NEF wanted to reach high schoolers too. Rather than start from scratch, we built 'Energy Safe Leaders' on top of the same tech stack.",
					"It's a more mature look and feel with age-appropriate content, but under the hood it shares the same CMS and multi-tenant architecture. One platform, two audiences — and room to grow into more."
				],
				images: [EnergySafeLeadersHome, EnergySafeLeadersStudentResources]
			}
		]
	},
	{
		slug: 'wasatch-fabrication',
		title: 'Wasatch Fabrication',
		description:
			'From concept to launch in under 6 weeks. We partnered with Wasatch Fabrication to build a custom platform that manages their entire workflow.',
		image: WasatchFabrication,
		link: 'https://wasatchfabrication.com',
		features: [
			{
				title: 'Rapid Development',
				description:
					"We went from the initial idea to a fully launched product in under 6 weeks, proving that quality software doesn't have to take years to build.",
				icon: 'lightning'
			},
			{
				title: 'Admin & Customer Portals',
				description:
					'A powerful admin section for communication, invoicing, and payments, paired with a customer dashboard for tracking quote requests and progress.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'Rapid Development',
				content: [
					'Speed was of the essence for Wasatch Fabrication. They needed to get their business operations up and running quickly to handle an influx of orders. We adopted an agile approach, prioritizing core features that delivered immediate value.',
					'By keeping the feedback loop tight and iterating daily, we were able to go from an idea to a fully functional production application in under 6 weeks. This included database design, API development, and the front-end user interfaces for both administrators and customers.'
				],
				images: [MarketingHome, MarketingService]
			},
			{
				title: 'Customer Portal',
				content: [
					'The customer portal is designed to provide transparency and ease of use for Wasatch Fabrication clients. Instead of relying on scattered emails, customers can log in to a centralized dashboard.',
					'From this dashboard, they can submit new quote requests, track the status of existing jobs, and communicate directly with the fabrication team. This self-service model reduces administrative overhead and improves customer satisfaction by providing real-time updates.'
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
				title: 'Admin Dashboard',
				content: [
					'Behind the scenes, the admin portal serves as the command center for the business. We built custom workflows to manage the entire lifecycle of a job, from initial inquiry to final delivery.',
					'Admins can quickly generate PDF invoices, collect payments via Stripe integration, and manage production schedules. The system also consolidates all communication, ensuring that no customer request falls through the cracks.'
				],
				images: [AdminDashboard, AdminQuote]

			}
		]
	}
];
