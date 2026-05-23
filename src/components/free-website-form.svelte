<script lang="ts">
	import { PUBLIC_TEST_CONTACT_FORM, PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import clsx from 'clsx';

	let submitted = $state(false);
	let isSubmitting = $state(false);
	let errorMessage = $state('');

	const inputClass =
		'block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-100 rounded-sm border border-gray-100 appearance-none focus:bg-white focus:border-gray-500 focus:outline-hidden';
	const labelClass = 'block mb-2 text-xs font-bold tracking-wide text-gray-700';

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		if (PUBLIC_TEST_CONTACT_FORM === 'true') {
			submitted = true;
			return;
		}

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const turnstileToken = formData.get('cf-turnstile-response');

		if (!turnstileToken) {
			errorMessage = 'Please complete the captcha before submitting';
			return;
		}

		const payload = {
			firstName: formData.get('firstName'),
			lastName: formData.get('lastName'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			organizationName: formData.get('organizationName'),
			organizationType: formData.get('organizationType'),
			website: formData.get('website'),
			city: formData.get('city'),
			mission: formData.get('mission'),
			goals: formData.get('goals'),
			turnstileToken
		};

		isSubmitting = true;
		errorMessage = '';

		try {
			const response = await fetch('/api/free-website', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (response.ok) {
				submitted = true;
			} else {
				const data = await response.json().catch(() => ({}));
				errorMessage = data?.error ?? 'Oops! There was a problem submitting your application';
				if (typeof window !== 'undefined' && window.turnstile) {
					window.turnstile.reset();
				}
			}
		} catch (error) {
			console.error(error);
			errorMessage = 'Oops! There was a problem submitting your application';
			if (typeof window !== 'undefined' && window.turnstile) {
				window.turnstile.reset();
			}
		} finally {
			isSubmitting = false;
		}
	};
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<form class={submitted ? `hidden` : `visible`} name="free-website" onsubmit={handleSubmit}>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
			<label class={labelClass} for="firstName">First Name*</label>
			<input
				aria-required="true"
				class={inputClass}
				id="firstName"
				name="firstName"
				placeholder="Jane"
				required
				type="text"
			/>
		</div>
		<div class="px-3 w-full md:w-1/2">
			<label class={labelClass} for="lastName">Last Name*</label>
			<input
				aria-required="true"
				class={inputClass}
				id="lastName"
				name="lastName"
				placeholder="Doe"
				required
				type="text"
			/>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
			<label class={labelClass} for="email">Email*</label>
			<input
				aria-required="true"
				class={inputClass}
				id="email"
				name="email"
				placeholder="jane@organization.org"
				required
				type="email"
			/>
		</div>
		<div class="px-3 w-full md:w-1/2">
			<label class={labelClass} for="phone">Phone Number</label>
			<input class={inputClass} id="phone" name="phone" placeholder="801-111-2222" type="text" />
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
			<label class={labelClass} for="organizationName">Organization Name*</label>
			<input
				aria-required="true"
				class={inputClass}
				id="organizationName"
				name="organizationName"
				placeholder="Wasatch Community Project"
				required
				type="text"
			/>
		</div>
		<div class="px-3 w-full md:w-1/2">
			<label class={labelClass} for="organizationType">Organization Type</label>
			<select class={inputClass} id="organizationType" name="organizationType">
				<option value="">Select one</option>
				<option value="Nonprofit (501c3)">Nonprofit (501(c)(3))</option>
				<option value="Community organization">Community organization</option>
				<option value="Mutual aid / grassroots group">Mutual aid / grassroots group</option>
				<option value="Faith-based organization">Faith-based organization</option>
				<option value="School / education">School / education</option>
				<option value="Other">Other</option>
			</select>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
			<label class={labelClass} for="city">City / Area*</label>
			<input
				aria-required="true"
				class={inputClass}
				id="city"
				name="city"
				placeholder="Salt Lake City"
				required
				type="text"
			/>
		</div>
		<div class="px-3 w-full md:w-1/2">
			<label class={labelClass} for="website">Current Website (if any)</label>
			<input
				class={inputClass}
				id="website"
				name="website"
				placeholder="https://example.org"
				type="text"
			/>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 w-full">
			<label class={labelClass} for="mission">Tell us about your organization and the good you do*</label>
			<textarea
				aria-required="true"
				class={inputClass}
				id="mission"
				name="mission"
				placeholder="What's your mission? Who do you serve, and what impact are you trying to make in the community?"
				required
				rows={6}
			></textarea>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 w-full">
			<label class={labelClass} for="goals">What would a website help you accomplish?*</label>
			<textarea
				aria-required="true"
				class={inputClass}
				id="goals"
				name="goals"
				placeholder="What pages or content do you need (home, about, programs, contact)? What should visitors be able to do?"
				required
				rows={6}
			></textarea>
		</div>
	</div>
	<div class="flex items-start px-3 mb-6">
		<input
			class="mt-1 mr-3 w-4 h-4"
			id="ownership"
			name="ownership"
			required
			type="checkbox"
		/>
		<label class="text-sm text-gray-600" for="ownership">
			I understand that we'll own the website's Git repository and control its deployment, so we can
			maintain and update it ourselves later.*
		</label>
	</div>
	<div class={clsx('mb-6 flex justify-start', 'xl:justify-end')}>
		<div class="cf-turnstile" data-sitekey={PUBLIC_TURNSTILE_SITE_KEY} data-theme="light"></div>
	</div>
	{#if errorMessage}
		<p class="px-2 pt-1 text-xs italic text-red-500">
			{errorMessage}
		</p>
	{/if}
	<div class={clsx('flex justify-start', 'xl:justify-end')}>
		<button
			class={clsx(
				'py-3 px-5 w-full text-base font-medium leading-6 text-white bg-orange-700 rounded-md border border-transparent transition duration-150 ease-in-out',
				'lg:w-auto',
				'hover:bg-orange-600',
				'focus:outline-hidden focus:shadow-outline'
			)}
			disabled={isSubmitting}
			type="submit"
		>
			Apply for a free website
		</button>
	</div>
</form>
<div class={submitted ? `visible` : `hidden`}>
	<h2 class="text-navy-600">Application received!</h2>
	<p class="text-gray-600">
		Thank you for telling us about your organization. We review applications every quarter and will
		be in touch if you're selected. In the meantime, keep up the good work.
	</p>
</div>
