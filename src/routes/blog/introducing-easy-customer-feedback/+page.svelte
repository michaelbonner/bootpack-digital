<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import Breadcrumbs from '../../../components/breadcrumbs.svelte';

	import homepageHero from '../../../images/easycustomerfeedback-screenshots/homepage-hero.jpg?enhanced';
	import dashboardOverview from '../../../images/easycustomerfeedback-screenshots/dashboard-overview.jpg?enhanced';
	import submissionsList from '../../../images/easycustomerfeedback-screenshots/submissions-list.jpg?enhanced';
	import submissionDetail from '../../../images/easycustomerfeedback-screenshots/submission-detail.jpg?enhanced';
	import widgetProjectsList from '../../../images/easycustomerfeedback-screenshots/widget-projects-list.jpg?enhanced';
	import featuresPage from '../../../images/easycustomerfeedback-screenshots/features-page.jpg?enhanced';
	import embeddableWidget from '../../../images/easycustomerfeedback-screenshots/embeddable-widget.jpg?enhanced';
	import widgetCustomization from '../../../images/easycustomerfeedback-screenshots/widget-customization.jpg?enhanced';
	import integrationsSyncTargets from '../../../images/easycustomerfeedback-screenshots/integrations-sync-targets.jpg?enhanced';

	const datePublished = '2026-03-09';

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: 'Introducing EasyCustomerFeedback',
			datePublished,
			dateModified: datePublished,
			description:
				'EasyCustomerFeedback puts an embeddable feedback form, a shared inbox, and integrations with Linear, GitHub Issues, and Basecamp in one service.',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': 'https://bootpackdigital.com/blog/introducing-easy-customer-feedback'
			},
			author: {
				'@type': 'Organization',
				name: 'Bootpack Digital',
				url: 'https://bootpackdigital.com'
			},
			publisher: {
				'@type': 'Organization',
				name: 'Bootpack Digital',
				logo: {
					'@type': 'ImageObject',
					url: 'https://bootpackdigital.com/images/bootpack-horizontal.png'
				}
			}
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Blog',
					item: 'https://bootpackdigital.com/blog'
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Introducing EasyCustomerFeedback',
					item: 'https://bootpackdigital.com/blog/introducing-easy-customer-feedback'
				}
			]
		}
	];
</script>

<Seo
	title="Introducing EasyCustomerFeedback | Bootpack Digital"
	description="EasyCustomerFeedback puts an embeddable feedback form, a shared inbox, and integrations with Linear, GitHub Issues, and Basecamp in one service."
	canonical="/blog/introducing-easy-customer-feedback"
	ogType="article"
	ogImage="/og-blog-introducing-easy-customer-feedback.jpg"
	ogImageAlt="Introducing EasyCustomerFeedback"
	{jsonLd}
/>

<div class="px-4 mx-auto sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[{ label: 'Blog', href: '/blog' }, { label: 'Introducing EasyCustomerFeedback' }]}
		className="mb-8"
	/>
</div>
<div class="relative pt-4 pb-24">
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h1>
			<span class="block text-base font-semibold tracking-wide uppercase text-blue-600">
				Blog
			</span>
			<span class="block"> Introducing EasyCustomerFeedback </span>
		</h1>
		<div class="text-gray-400">
			Published on <time datetime={datePublished}>March 9, 2026</time>
		</div>
		<p class="mt-8 text-xl leading-8 text-gray-500">
			Customer feedback tends to arrive everywhere: email, support tickets, calls, and chat. We built
			EasyCustomerFeedback to collect it in one place and move useful submissions into the tools
			your team already uses.
		</p>
	</div>

	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<p>
			Visit <a href="https://easycustomerfeedback.com/">easycustomerfeedback.com</a> to see it in
			action.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={homepageHero}
					alt="EasyCustomerFeedback homepage"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={featuresPage}
					alt="EasyCustomerFeedback features overview"
				/>
			</figure>
		</div>

		<h2>One inbox for customer feedback</h2>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={widgetProjectsList}
					alt="EasyCustomerFeedback widget projects list"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={dashboardOverview}
					alt="EasyCustomerFeedback dashboard overview"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={submissionsList}
					alt="EasyCustomerFeedback submissions list"
				/>
			</figure>
		</div>
		<p>
			Every submission appears in a shared inbox. Your team can review the details, set a priority,
			assign an owner, and send the item to the system where the work will happen.
		</p>

		<h2>Add the form to your existing site</h2>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={embeddableWidget}
					alt="EasyCustomerFeedback embeddable widget"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={widgetCustomization}
					alt="EasyCustomerFeedback widget customization"
				/>
			</figure>
		</div>
		<p>
			Copy one script from the dashboard to add the feedback form to an existing page. You can choose
			the fields, rewrite the prompts, and match the colors to your site without rebuilding the
			form yourself.
		</p>

		<h2>Send accepted feedback to the right tool</h2>

		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={submissionDetail}
					alt="EasyCustomerFeedback submission detail view"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={integrationsSyncTargets}
					alt="EasyCustomerFeedback integrations and sync targets"
				/>
			</figure>
		</div>
		<p>
			Turn a submission into a Linear issue, GitHub issue, or Basecamp to-do without copying the
			details by hand. The original feedback remains available for reference.
		</p>

		<h2>A small tool with a focused job</h2>
		<p>
			EasyCustomerFeedback does not try to replace your project tracker or support desk. It collects
			feedback, helps your team sort it, and passes accepted work to the tools you already trust.
		</p>

		<h2>Collect your first submission</h2>
		<p>
			Create a board, customize the form, and add it to your site at
			<a href="https://easycustomerfeedback.com/">easycustomerfeedback.com</a>. And yes, you can use
			it to tell us what needs work.
		</p>
	</div>
</div>

<ContactBanner
	textLine1="Need a focused tool for your team's workflow?"
	textLine2="Tell us where the current process breaks down."
	bgColor="bg-gray-100"
/>
