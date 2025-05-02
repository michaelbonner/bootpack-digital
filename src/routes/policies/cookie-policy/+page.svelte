<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Links from '../links.svelte';

	const seoTitle = 'Privacy Policy and Terms of Service | Bootpack Digital';
	const seoDescription =
		'We are committed to protecting your privacy. This Privacy Policy describes how we collect and use information about you when you use our website.';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:url" content="https://bootpackdigital.com/policies/cookie-policy" />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />

	<link rel="canonical" href="https://bootpackdigital.com/policies/cookie-policy" />
</svelte:head>

<div class="pt-8 pb-16 bg-white">
	<div class="container px-4 mx-auto mt-8 max-w-5xl text-gray-700">
		<Links />

		<h1 class="mt-10 text-3xl font-extrabold tracking-tight leading-9 sm:leading-10 text-navy-600">
			Cookie Policy
		</h1>

		<div class="pt-4 max-w-3xl prose">
			<article>
				<p class="tg-last-updated-date">Last updated: Jul 17, 2024 1:29 PM</p>
				<p>
					We value your privacy very highly. Please read this Cookie Policy carefully before using
					the https://bootpackdigital.com/ Website (the "Website") operated by Bootpack Digital,
					LLC, a(n) Limited Liability Company formed in Delaware, United States ("us," "we," "our")
					as this Cookie Policy contains important information regarding our use of cookies and
					other tracking technologies, your privacy and how we may use the information that we
					collect about you. Please also read our Privacy Policy, which provides more information
					about our privacy practices, your choices and your privacy rights.
				</p>

				<h2 class="">What are cookies?</h2>
				<p>
					A cookie is a small piece of data sent from a Website and stored on your device by your
					browser.
				</p>
				<h2 class="">Our collection and classification of cookies</h2>
				<p>
					This Website collects the cookies identified below. We have classified the cookies that we
					collect by the purpose that they serve.
				</p>
				<h2 class="">Essential cookies</h2>
				<p>
					Essential cookies are cookies that are essential for you to browse this Website and use
					its features. For example, these cookies may be used for maintaining security,
					authenticating users, and preventing fraudulent actions. These cookies are enabled by
					default, and without them, the Website may not be fully functional. This Website collects
					the following strictly necessary/essential cookies:
				</p>
				<div class="table-responsive">
					<table class="table table-bordered">
						<thead
							><tr
								><th>Cookie name</th><th>Provider of the cookie</th><th>Provenance</th><th
									>Purpose</th
								><th>Duration</th></tr
							></thead
						><tbody
							><tr
								><td>Usercentrics Consent Management Platform</td><td>Usercentrics GmbH</td><td
									>Third party</td
								><td
									><ul>
										<li>Compliance with legal obligations;</li>
										<li>Consent storage.</li>
									</ul></td
								><td>Perpetual</td></tr
							></tbody
						>
					</table>
				</div>
				<h2 class="">Functional cookies</h2>
				<p>
					Functional cookies are cookies that allow a Website to remember the choices that you have
					made in the past and how you use the Website. For example, these cookies may be used for
					remembering what language you prefer, which pages you clicked on, or what your username
					and password are so that you can automatically log in to your account. This Website does
					not collect any functional cookies.
				</p>
				<h2 class="">Marketing cookies</h2>
				<p>
					Marketing cookies are cookies that track your online activity to, for example, help
					advertisers deliver more relevant advertisements or to limit how many times you see an
					advertisement. This Website does not collect any marketing cookies.
				</p>
				<h2 class="">Your choices regarding cookies</h2>
				<p>
					You have certain choices when it comes to the placing of cookies on your device. You may
					choose to accept or deny any functional or marketing cookies. If you consent to the use of
					these cookies but would then like to withdraw your consent, you may do so at any time
					through our cookie consent tool, which can be found on the Website's home page. You can
					control your cookie choices using the following means:
				</p>
				<ul>
					<li>
						Through our cookie consent tool, where you can select the categories of cookies that you
						allow to be placed on your device and withdraw that consent; and
					</li>
					<li>
						Through your browser, where you can instruct it to delete or refuse cookies. You can
						visit the help center of your browser, the "Tools", "Edit", or "Help" pages to set your
						cookie preferences and delete cookies. We also encourage you to visit aboutcookies.org
						to learn more about how to opt out of cookies.
					</li>
				</ul>
				<h2 class="">Questions</h2>
				<p>
					If you have any questions about this Cookie Policy, please contact us at
					hey@bootpackdigital.com.
				</p>
			</article>
		</div>
	</div>
</div>

<ContactBanner textLine1="Ready to get started?" textLine2="Send us a message so we can chat." />
