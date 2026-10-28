<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumbs from '../../../components/breadcrumbs.svelte';
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import cover from '../../../images/app-after-launch-costs.jpg?w=480;800;1200;1600&enhanced';

	const headline = 'What does a custom app cost after launch?';
	const description =
		'A practical way to budget for hosting, third-party services, maintenance, support, and new features after your custom app goes live.';
	const datePublished = '2026-10-25';
	const canonical = '/blog/app-after-launch-costs';
	const articleUrl = `https://bootpackdigital.com${canonical}`;

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline,
			datePublished,
			dateModified: datePublished,
			description,
			image: 'https://bootpackdigital.com/og-blog-app-after-launch-costs.jpg',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': articleUrl
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
					name: headline,
					item: articleUrl
				}
			]
		}
	];
</script>

<Seo
	title="Custom app costs after launch | Bootpack Digital"
	description={description}
	canonical={canonical}
	ogType="article"
	ogImage="/og-blog-app-after-launch-costs.jpg"
	ogImageAlt="An app connected to hosting, maintenance, email, and a cost ledger"
	jsonLd={jsonLd}
/>

<div class="px-4 mx-auto sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: headline }]} className="mb-8" />
</div>

<article class="relative pt-4 pb-24">
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h1 class="text-3xl sm:text-5xl">
			<span class="block text-base font-semibold tracking-wide uppercase text-blue-600">Blog</span>
			<span class="block">{headline}</span>
		</h1>
		<div class="text-gray-400">
			Published on <time datetime={datePublished}>October 25, 2026</time>
		</div>
		<enhanced:img
			src={cover}
			alt="An app connected to hosting, maintenance, email, and a cost ledger"
			class="mt-8 w-full rounded-lg"
			sizes="(min-width: 768px) 720px, calc(100vw - 2rem)"
			fetchpriority="high"
		></enhanced:img>
		<p class="mt-8 text-xl leading-8 text-gray-500">
			Your app is live. The build invoice is behind you, but the app still needs somewhere to run,
			people to look after it, and room to change as customers use it. What should you budget for?
		</p>
		<p>
			There is no useful flat monthly price for every custom app. A simple internal tool and an app
			that handles payments, uploads, and thousands of customer accounts have different bills. You
			can still make a useful estimate by separating the costs that keep the current app running
			from the work you choose to add next.
		</p>
	</div>

	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h2>Start with two budgets</h2>
		<p>
			The first budget is for <strong>running the app you already have</strong>: hosting, outside
			services, monitoring, backups, and maintenance. The second is for <strong>changing it</strong>:
			new features, design work, and improvements prompted by customer feedback. Mixing the two
			makes it hard to tell whether the app has become expensive to operate or you are choosing to
			invest more in the product.
		</p>
		<p>
			Ask whoever builds the app to put both budgets in writing before launch. An estimate should
			name the services, expected usage, who pays each bill, and what work a support agreement
			covers.
		</p>
		<aside class="not-prose my-10 rounded-xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
			<p class="m-0 text-sm font-semibold tracking-wide text-blue-700 uppercase">A real example</p>
			<h3 class="mt-3 text-2xl font-bold tracking-tight text-navy-700">$240 per month to run and support</h3>
			<p class="mt-4 text-base leading-7 text-gray-700">
				One ecommerce app we work on has a CRM, an order manager, and fabrication models. Its
				hosting is about <strong>$40 per month</strong>. Ongoing support is
				<strong>$200 per month</strong> for security updates and on-call coverage. Those two
				known costs total <strong>$2,880 over twelve months</strong>. The client has had no
				surprise costs.
			</p>
			<p class="mt-4 mb-0 text-base leading-7 text-gray-700">
				That figure describes this app's hosting and support arrangement. A different app's
				services, usage, and requested changes need their own estimate.
			</p>
		</aside>

		<h2>What keeps the app running?</h2>
		<p>
			Most apps pay for some combination of a server or hosting platform, a database, file
			storage, a domain, backups, and error monitoring. Many also pay outside providers to send
			email or text messages, process payments, show maps, or call an AI model. Some services charge
			a fixed monthly amount. Others charge for each message, transaction, file, or request.
		</p>
		<p>
			The service list matters more than a single hosting quote. A low server bill will not tell
			you what it costs to send appointment reminders or process a growing number of payments.
			List every provider and record what drives its bill. For payments, distinguish the
			provider's transaction fees from the cost of maintaining the checkout workflow.
		</p>
		<p>
			Get access to the accounts your business depends on. You should be able to see the bills,
			usage, and alerts yourself, even if your development partner manages the day-to-day setup.
		</p>

		<h2>What does maintenance pay for?</h2>
		<p>
			A live app needs someone to notice failures and act on them. That may include checking
			errors, applying security and dependency updates, renewing certificates, testing backups,
			and fixing problems when a connected service changes. A mobile app may also need updates to
			keep working with new iOS and Android releases.
		</p>
		<p>
			A support agreement should answer practical questions: Who receives an alert when signups
			stop working? When will they respond? Is a bug fix included? What happens outside business
			hours? How are larger changes estimated and approved? “Maintenance included” is hard to
			budget around until those answers are clear.
		</p>
		<p>
			If your team will handle support, set aside staff time for it. A provider's automated
			backups and status page help, but someone still has to investigate an incident and make a
			decision.
		</p>

		<h2>Plan for usage to change the bill</h2>
		<p>
			Work out which actions cost money. For one product it might be each text reminder. For
			another it is an uploaded video or a report generated with an AI model. Estimate how often
			a customer will take that action, then repeat the calculation for a busier month. This gives
			you a better forecast than multiplying today's hosting bill by twelve.
		</p>
		<p>
			Set spending alerts and sensible limits where a provider supports them. Check the first
			few invoices against the forecast. If a feature's usage grows faster than expected, you can
			change its design or price before the bill becomes a surprise.
		</p>

		<h2>Make a year-one estimate</h2>
		<p>Write down these amounts separately. The blanks are a prompt to get actual quotes and usage data for your app.</p>
		<div class="not-prose my-8 overflow-hidden rounded-xl border border-blue-200">
			<table class="w-full border-collapse text-left text-base text-gray-700">
				<thead class="sr-only bg-blue-50 text-navy-700 sm:not-sr-only">
					<tr>
						<th scope="col" class="px-5 py-4 font-semibold">Cost</th>
						<th scope="col" class="px-5 py-4 font-semibold">What to ask</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-blue-100">
					<tr class="block sm:table-row">
						<th scope="row" class="block px-5 pt-4 font-semibold text-navy-700 sm:table-cell sm:py-4">Base monthly services</th>
						<td class="block px-5 pb-4 sm:table-cell sm:py-4">What do we pay even in a quiet month?</td>
					</tr>
					<tr class="block sm:table-row">
						<th scope="row" class="block px-5 pt-4 font-semibold text-navy-700 sm:table-cell sm:py-4">Usage-based services</th>
						<td class="block px-5 pb-4 sm:table-cell sm:py-4">What does a normal month cost? What about a busy one?</td>
					</tr>
					<tr class="block sm:table-row">
						<th scope="row" class="block px-5 pt-4 font-semibold text-navy-700 sm:table-cell sm:py-4">Maintenance and support</th>
						<td class="block px-5 pb-4 sm:table-cell sm:py-4">What work is covered, and who responds to incidents?</td>
					</tr>
					<tr class="block sm:table-row">
						<th scope="row" class="block px-5 pt-4 font-semibold text-navy-700 sm:table-cell sm:py-4">Planned improvements</th>
						<td class="block px-5 pb-4 sm:table-cell sm:py-4">Which changes are already on the roadmap?</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p>
			For a first pass, multiply the three recurring monthly amounts by twelve, then add the
			work you plan to commission. Keep a reserve for unexpected fixes or a busier month. The
			right reserve depends on how important the app is to your business and how predictable its
			usage is. Revisit the estimate once you have real invoices and support history.
		</p>

		<h2>Questions to ask before you sign off on the build</h2>
		<ul>
			<li>Which hosting and service accounts will our business own?</li>
			<li>What will each provider bill us for, and where can we see usage?</li>
			<li>What is the expected bill in a normal month and a busy month?</li>
			<li>Who monitors the app, responds to incidents, and tests recovery from backups?</li>
			<li>What does the support agreement include, and how do we approve extra work?</li>
			<li>If we change developers, what documentation and access will we receive?</li>
		</ul>
		<p>
			A good launch plan answers these questions alongside the feature list. If you are still
			deciding whether an app is ready for customers, our
			<a href={resolve('blog/ai-builder-to-production')}>guide to moving an AI-built app into production</a>
			covers the reliability and security checks worth making before people depend on it.
		</p>

		<h2>Talk through your app's ongoing costs</h2>
		<p>
			At Bootpack Digital, we build and support custom web and mobile apps. We can review an
			existing app or scope a new one, list the services it needs, and explain the ongoing work
			before you commit to a build. Bring us what you know about your users and the tasks they
			will perform. We will turn that into a budget you can question and revise.
		</p>
		<p><a href={resolve('contact')}>Ask us about your app</a></p>
	</div>
</article>

<div class="px-4 mx-auto mt-16 mb-12 max-w-prose sm:px-6 lg:px-8">
	<h2 class="text-2xl font-bold tracking-tight text-navy-900">Related posts</h2>
	<div class="mt-6 grid gap-6">
		<a
			href={resolve('blog/ai-builder-to-production')}
			class="block p-6 rounded-lg border border-blue-200 bg-white transition-colors hover:bg-blue-50"
		>
			<p class="text-xl font-semibold text-gray-900">From Lovable to a production app you can trust</p>
			<p class="mt-3 text-base text-gray-500">
				Review security, reliability, and recovery before customers depend on an app.
			</p>
		</a>
		<a
			href={resolve('blog/how-we-work-with-you')}
			class="block p-6 rounded-lg border border-blue-200 bg-white transition-colors hover:bg-blue-50"
		>
			<p class="text-xl font-semibold text-gray-900">How we work with you on projects</p>
			<p class="mt-3 text-base text-gray-500">
				How we agree on scope and keep decisions clear while a project takes shape.
			</p>
		</a>
	</div>
</div>

<ContactBanner
	textLine1="Planning an app budget?"
	textLine2="Let's work through the costs together."
	buttonText="Talk about your app"
	bgColor="bg-gray-50"
/>
