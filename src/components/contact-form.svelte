<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	let submitted = $state(false);
	let isSubmitting = false;

	const handleSubmit = async (event: SubmitEvent) => {
		const formData = new FormData(event.target as HTMLFormElement);

		fetch('https://formspree.io/f/xgerlrdz', {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json'
			}
		})
			.then((response) => {
				if (response.ok) {
					submitted = true;
					// form.reset();
				} else {
					response.json().then((data) => {
						console.error(data);
						if (Object.hasOwn(data, 'errors')) {
							errorMessage = data['errors'].map((error: any) => error['message']).join(', ');
						} else {
							errorMessage = 'Oops! There was a problem submitting your form';
						}
					});
				}
			})
			.catch((error) => {
				console.error(error);
				errorMessage = 'Oops! There was a problem submitting your form';
			});
	};

	let errors: any = {};
	let errorMessage = $state('');
	let touched: any = {};
</script>

<form
	class={submitted ? `hidden` : `visible`}
	name="contact"
	onsubmit={preventDefault(handleSubmit)}
>
	<div class="flex flex-wrap -mx-3 mt-8 mb-6">
		<div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
			<label class="block mb-2 text-xs font-bold tracking-wide text-gray-700" for="firstName">
				First Name*
			</label>
			<input
				aria-required="true"
				class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-100 rounded border border-gray-100 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
				id="firstName"
				name="firstName"
				placeholder="Jane"
				required
				type="text"
			/>
			<p class="px-2 pt-1 text-xs italic text-red-500">
				{#if errors.firstName && touched.firstName}
					{errors.firstName}
				{/if}
			</p>
		</div>
		<div class="px-3 w-full md:w-1/2">
			<label class="block mb-2 text-xs font-bold tracking-wide text-gray-700" for="lastName">
				Last Name*
			</label>
			<input
				aria-required="true"
				class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-100 rounded border border-gray-100 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
				id="lastName"
				name="lastName"
				placeholder="Doe"
				required
				type="text"
			/>
			<p class="px-2 pt-1 text-xs italic text-red-500">
				{#if errors.lastName && touched.lastName}
					{errors.lastName}
				{/if}
			</p>
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 mb-0 w-full">
			<label class="block mb-2 text-xs font-bold tracking-wide text-gray-700" for="email">
				Email*
			</label>
			<input
				aria-required="true"
				class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-100 rounded border border-gray-100 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
				id="email"
				name="email"
				placeholder="jane@company.com"
				required
				type="email"
			/>
			{#if errors.email && touched.email}
				{errors.email}
			{/if}
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
			<label class="block mb-2 text-xs font-bold tracking-wide text-gray-700" for="company">
				Company
			</label>
			<input
				class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-100 rounded border border-gray-100 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
				id="company"
				name="company"
				placeholder="Company Name"
				type="text"
			/>
			{#if errors.company && touched.company}
				{errors.company}
			{/if}
		</div>
		<div class="px-3 w-full md:w-1/2">
			<label class="block mb-2 text-xs font-bold tracking-wide text-gray-700" for="phone">
				Phone Number
			</label>
			<input
				class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-100 rounded border border-gray-100 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
				id="phone"
				name="phone"
				placeholder="801-111-2222"
				type="text"
			/>
			{#if errors.phone && touched.phone}
				{errors.phone}
			{/if}
		</div>
	</div>
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="px-3 mb-6 w-full md:mb-0">
			<label class="block mb-2 text-xs font-bold tracking-wide text-gray-700" for="message">
				How Can We Help?*
			</label>
			<textarea
				aria-required="true"
				class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-100 rounded border border-gray-100 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
				id="message"
				name="message"
				placeholder="Please give us details about what you're trying to accomplish"
				required
				rows={10}
			></textarea>
			<p class="px-2 pt-1 text-xs italic text-red-500">
				{#if errors.message && touched.message}
					{errors.message}
				{/if}
			</p>
		</div>
	</div>
	{#if errorMessage}
		<p class="px-2 pt-1 text-xs italic text-red-500">
			{errorMessage}
		</p>
	{/if}
	<button
		class="py-3 px-5 w-full text-base font-medium leading-6 text-white bg-orange-700 rounded-md border border-transparent transition duration-150 ease-in-out lg:w-auto hover:bg-orange-600 focus:outline-none focus:shadow-outline"
		disabled={isSubmitting}
		type="submit"
	>
		Submit
	</button>
</form>
<div class={submitted ? `visible` : `hidden`}>
	<h2>Thank you for contacting us! We'll be in touch soon</h2>
</div>
