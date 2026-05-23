<script lang="ts">
	import { PUBLIC_TEST_CONTACT_FORM, PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import clsx from 'clsx';

	let submitted = $state(false);
	let isSubmitting = $state(false);
	let errorMessage = $state('');

	const inputClass =
		'block py-3 px-4 w-full text-base text-gray-700 bg-gray-100 rounded-md border border-gray-200 appearance-none transition-colors focus:bg-white focus:outline-2 focus:-outline-offset-1 focus:outline-blue-500';
	const labelClass = 'block mb-2 text-sm font-semibold tracking-wide text-gray-700';

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

<form class={clsx(submitted && 'hidden')} name="free-website" onsubmit={handleSubmit}>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		<div>
			<label class={labelClass} for="firstName">
				First Name <span aria-hidden="true" class="text-orange-600">*</span>
			</label>
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
		<div>
			<label class={labelClass} for="lastName">
				Last Name <span aria-hidden="true" class="text-orange-600">*</span>
			</label>
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
		<div>
			<label class={labelClass} for="email">
				Email <span aria-hidden="true" class="text-orange-600">*</span>
			</label>
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
		<div>
			<label class={labelClass} for="phone">Phone Number</label>
			<input class={inputClass} id="phone" name="phone" placeholder="801-111-2222" type="tel" />
		</div>
		<div>
			<label class={labelClass} for="organizationName">
				Organization Name <span aria-hidden="true" class="text-orange-600">*</span>
			</label>
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
		<div>
			<label class={labelClass} for="organizationType">Organization Type</label>
			<div
				class="grid grid-cols-[1fr_--spacing(8)] items-center bg-gray-100 rounded-md border border-gray-200 transition-colors focus-within:bg-white focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-blue-500"
			>
				<select
					class="col-span-full row-start-1 py-3 px-4 pr-8 w-full text-base text-gray-700 bg-transparent appearance-none focus:outline-hidden"
					id="organizationType"
					name="organizationType"
				>
					<option value="">Select one</option>
					<option value="Nonprofit (501c3)">Nonprofit (501(c)(3))</option>
					<option value="Community organization">Community organization</option>
					<option value="Mutual aid / grassroots group">Mutual aid / grassroots group</option>
					<option value="Faith-based organization">Faith-based organization</option>
					<option value="School / education">School / education</option>
					<option value="LGBTQIA+ support organization">LGBTQIA+ support organization</option>
					<option value="Other">Other</option>
				</select>
				<svg
					viewBox="0 0 8 5"
					width="8"
					height="5"
					fill="none"
					aria-hidden="true"
					class="col-start-2 row-start-1 place-self-center text-gray-500 pointer-events-none"
				>
					<path d="M.5.5 4 4 7.5.5" stroke="currentColor" />
				</svg>
			</div>
		</div>
		<div>
			<label class={labelClass} for="city">
				City / Area <span aria-hidden="true" class="text-orange-600">*</span>
			</label>
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
		<div>
			<label class={labelClass} for="website">Current Website (if any)</label>
			<input
				class={inputClass}
				id="website"
				name="website"
				placeholder="https://example.org"
				type="url"
			/>
		</div>
		<div class="sm:col-span-2">
			<label class={labelClass} for="mission">
				Tell us about your organization and the good you do
				<span aria-hidden="true" class="text-orange-600">*</span>
			</label>
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
		<div class="sm:col-span-2">
			<label class={labelClass} for="goals">
				What would a website help you accomplish?
				<span aria-hidden="true" class="text-orange-600">*</span>
			</label>
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
		<div class={clsx('flex justify-start sm:col-span-2', 'xl:justify-end')}>
			<div class="cf-turnstile" data-sitekey={PUBLIC_TURNSTILE_SITE_KEY} data-theme="light"></div>
		</div>
		{#if errorMessage}
			<p class="text-sm text-red-600 sm:col-span-2" role="alert">
				{errorMessage}
			</p>
		{/if}
		<div class={clsx('flex justify-start sm:col-span-2', 'xl:justify-end')}>
			<button
				class={clsx(
					'py-3 px-5 w-full text-base font-medium leading-6 text-white bg-orange-700 rounded-md border border-transparent transition duration-150 ease-in-out',
					'lg:w-auto',
					'hover:bg-orange-600',
					'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700',
					'disabled:opacity-60 disabled:cursor-not-allowed'
				)}
				disabled={isSubmitting}
				type="submit"
			>
				{isSubmitting ? 'Submitting…' : 'Apply for a free website'}
			</button>
		</div>
	</div>
</form>
<div class={clsx(!submitted && 'hidden')}>
	<div class="flex flex-col gap-4 items-center py-6 text-center">
		<span class="flex justify-center items-center bg-blue-100 rounded-full size-12">
			<svg
				class="w-6 h-6 text-blue-600"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
		<h2 class="text-2xl font-semibold tracking-tight text-navy-600">Application received!</h2>
		<p class="max-w-md text-pretty text-gray-600">
			Thank you for telling us about your organization. We review applications every quarter and reach
			out directly to the organization we select. Your application stays on file for future rounds.
			In the meantime, keep up the good work.
		</p>
	</div>
</div>
