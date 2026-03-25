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

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: 'Introducing EasyCustomerFeedback',
		datePublished,
		dateModified: datePublished,
		description:
			'EasyCustomerFeedback is a new service from Bootpack Digital that makes it simple to collect, organize, and act on feedback from your customers.',
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
	};
</script>

<Seo
	title="Introducing EasyCustomerFeedback | Bootpack Digital"
	description="EasyCustomerFeedback is a new service from Bootpack Digital that makes it simple to collect, organize, and act on feedback from your customers."
	canonical="/blog/introducing-easy-customer-feedback"
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
			We work with a handful of companies that care a lot about what their customers have to say,
			but they didn't have an easy and affordable way to collect that feedback; so we built it.
		</p>
	</div>

	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<p>
			Visit <a href="https://easycustomerfeedback.com/"> easycustomerfeedback.com </a> to get started
			now.
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

		<h2>Custom Feedback Boards</h2>
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
			All of the submissions that come in are shown in a list, then you can prioritize them, assign
			them, or sync them with a third party ticket system.
		</p>

		<h2>Embeddable Widgets</h2>
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
			We make it easy for you to drop the widget on your existing pages. Just copy and paste the
			script from the dashboard. We give you some options to configure the text, the available
			fields, and the colors.
		</p>

		<h2>Integrations with existing systems</h2>

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
		<p>You can currently integrate with Linear, GitHub Issues, or Basecamp.</p>

		<h2>Blazing Fast</h2>
		<p>We built it from scratch with the latest tech to be as fast as possible.</p>

		<h2>Try it today and tell us what you think</h2>
		<p>
			We're excited for as many people as possible to use it. Give it a try and give us some
			feedback! <a href="https://easycustomerfeedback.com/"
				>Start collecting feedback from your customers today</a
			>
		</p>
	</div>
</div>

<ContactBanner
	textLine1="Have some web app development questions?"
	textLine2="Send us a message so we can chat."
	bgColor="bg-gray-100"
/>
