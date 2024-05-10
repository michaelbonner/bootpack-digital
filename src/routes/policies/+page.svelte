<script lang="ts">
	import ContactBanner from '../../components/contact-banner.svelte';
	import PrivacyPolicy from './privacy-policy.svelte';
	import CookiePolicy from './cookie-policy.svelte';

	const seoTitle = 'Privacy Policy and Terms of Service | Bootpack Digital';
	const seoDescription =
		'We are committed to protecting your privacy. This Privacy Policy describes how we collect and use information about you when you use our website.';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
	<script src="https://app.termageddon.com/js/termageddon.js"></script>

	<link rel="canonical" href="https://bootpackdigital.com/policies" />
</svelte:head>

<div class="bg-white pb-16 pt-8">
	<div class="container mx-auto mt-16 max-w-5xl px-4 text-gray-700">
		<h1 class="text-3xl font-extrabold leading-9 tracking-tight text-navy-600 sm:leading-10">
			Privacy Policy and Terms of Service
		</h1>
		<h2 class="mt-12 text-2xl font-extrabold leading-9 text-navy-600 sm:leading-10">
			Privacy Policy
		</h2>
		<div class="prose max-w-3xl pt-4 lg:mx-24">
			<PrivacyPolicy />
		</div>
		<h2 class="mt-12 text-2xl font-extrabold leading-9 text-navy-600 sm:leading-10">
			Cookie Policy
		</h2>
		<div class="prose max-w-3xl pt-4 lg:mx-24">
			<CookiePolicy />
		</div>
		<h2 class="mt-12 text-2xl font-extrabold leading-9 text-navy-600 sm:leading-10">
			Terms of Service
		</h2>
		<div class="max-w-3xl pt-4 lg:mx-24">
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				1. Terms
			</h3>
			<p class="mt-4">
				By accessing the website at{` `}
				<a class="underline" href={`/`}>https://bootpackdigital.com/</a>
				, you are agreeing to be bound by these terms of service, all applicable laws and regulations,
				and agree that you are responsible for compliance with any applicable local laws. If you do not
				agree with any of these terms, you are prohibited from using or accessing this site. The materials
				contained in this website are protected by applicable copyright and trademark law.
			</p>
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				2. Use License
			</h3>
			<ol class="ml-8 list-roman" type="a">
				<li class="mt-2">
					Permission is granted to temporarily download one copy of the materials (information or
					software) on Bootpack Digital, LLC's website for personal, non-commercial transitory
					viewing only. This is the grant of a license, not a transfer of title, and under this
					license you may not:
					<ol class="ml-8 list-decimal" type="i">
						<li class="mt-2">modify or copy the materials;</li>
						<li class="mt-2">
							use the materials for any commercial purpose, or for any public display (commercial or
							non-commercial);
						</li>
						<li class="mt-2">
							attempt to decompile or reverse engineer any software contained on Bootpack Digital,
							LLC's website;
						</li>
						<li class="mt-2">
							remove any copyright or other proprietary notations from the materials; or
						</li>
						<li class="mt-2">
							transfer the materials to another person or "mirror" the materials on any other
							server.
						</li>
					</ol>
				</li>
				<li class="mt-2">
					This license shall automatically terminate if you violate any of these restrictions and
					may be terminated by Bootpack Digital, LLC at any time. Upon terminating your viewing of
					these materials or upon the termination of this license, you must destroy any downloaded
					materials in your possession whether in electronic or printed format.
				</li>
			</ol>
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				3. Disclaimer
			</h3>
			<ol class="ml-8 list-roman" type="a">
				<li class="mt-2">
					The materials on Bootpack Digital, LLC's website are provided on an 'as is' basis.
					Bootpack Digital, LLC makes no warranties, expressed or implied, and hereby disclaims and
					negates all other warranties including, without limitation, implied warranties or
					conditions of merchantability, fitness for a particular purpose, or non-infringement of
					intellectual property or other violation of rights.
				</li>
				<li class="mt-2">
					Further, Bootpack Digital, LLC does not warrant or make any representations concerning the
					accuracy, likely results, or reliability of the use of the materials on its website or
					otherwise relating to such materials or on any sites linked to this site.
				</li>
			</ol>
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				4. Limitations
			</h3>
			<p class="mt-4">
				In no event shall Bootpack Digital, LLC or its suppliers be liable for any damages
				(including, without limitation, damages for loss of data or profit, or due to business
				interruption) arising out of the use or inability to use the materials on Bootpack Digital,
				LLC's website, even if Bootpack Digital, LLC or a Bootpack Digital, LLC authorized
				representative has been notified orally or in writing of the possibility of such damage.
				Because some jurisdictions do not allow limitations on implied warranties, or limitations of
				liability for consequential or incidental damages, these limitations may not apply to you.
			</p>
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				5. Accuracy of materials
			</h3>
			<p class="mt-4">
				The materials appearing on Bootpack Digital, LLC's website could include technical,
				typographical, or photographic errors. Bootpack Digital, LLC does not warrant that any of
				the materials on its website are accurate, complete or current. Bootpack Digital, LLC may
				make changes to the materials contained on its website at any time without notice. However
				Bootpack Digital, LLC does not make any commitment to update the materials.
			</p>
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				6. Links
			</h3>
			<p class="mt-4">
				Bootpack Digital, LLC has not reviewed all of the sites linked to its website and is not
				responsible for the contents of any such linked site. The inclusion of any link does not
				imply endorsement by Bootpack Digital, LLC of the site. Use of any such linked website is at
				the user's own risk.
			</p>
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				7. Modifications
			</h3>
			<p class="mt-4">
				Bootpack Digital, LLC may revise these terms of service for its website at any time without
				notice. By using this website you are agreeing to be bound by the then current version of
				these terms of service.
			</p>
			<h3 class="mt-8 text-2xl font-bold leading-9 text-navy-600 sm:text-2xl sm:leading-10">
				8. Governing Law
			</h3>
			<p class="mt-4">
				These terms and conditions are governed by and construed in accordance with the laws of UT
				and you irrevocably submit to the exclusive jurisdiction of the courts in that State or
				location.
			</p>
		</div>
	</div>
</div>

<ContactBanner textLine1="Ready to get started?" textLine2="Send us a message so we can chat." />
