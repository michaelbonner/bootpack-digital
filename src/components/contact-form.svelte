<script lang="ts">
	let submitted = false;
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
	let errorMessage = '';
	let touched: any = {};
</script>

<form
	class={submitted ? `hidden` : `visible`}
	name="contact"
	on:submit|preventDefault={handleSubmit}
>
	<div class="-mx-3 mt-8 mb-6 flex flex-wrap">
		<div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
			<label class="mb-2 block text-xs font-bold tracking-wide text-gray-700" for="firstName">
				First Name*
			</label>
			<input
				class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
		<div class="w-full px-3 md:w-1/2">
			<label class="mb-2 block text-xs font-bold tracking-wide text-gray-700" for="lastName">
				Last Name*
			</label>
			<input
				class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
	<div class="-mx-3 mb-6 flex flex-wrap">
		<div class="mb-0 w-full px-3">
			<label class="mb-2 block text-xs font-bold tracking-wide text-gray-700" for="email">
				Email*
			</label>
			<input
				class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
	<div class="-mx-3 mb-6 flex flex-wrap">
		<div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
			<label class="mb-2 block text-xs font-bold tracking-wide text-gray-700" for="company">
				Company
			</label>
			<input
				class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
				id="company"
				name="company"
				placeholder="Company Name"
				type="text"
			/>
			{#if errors.company && touched.company}
				{errors.company}
			{/if}
		</div>
		<div class="w-full px-3 md:w-1/2">
			<label class="mb-2 block text-xs font-bold tracking-wide text-gray-700" for="phone">
				Phone Number
			</label>
			<input
				class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
	<div class="-mx-3 mb-6 flex flex-wrap">
		<div class="mb-6 w-full px-3 md:mb-0">
			<label class="mb-2 block text-xs font-bold tracking-wide text-gray-700" for="message">
				How Can We Help?*
			</label>
			<textarea
				class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
				id="message"
				name="message"
				placeholder="Please give us details about what you're trying to accomplish"
				required
				rows={10}
			/>
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
		class="focus:shadow-outline w-full rounded-md border border-transparent bg-orange-700 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none lg:w-auto"
		disabled={isSubmitting}
		type="submit"
	>
		Submit
	</button>
</form>
<div class={submitted ? `visible` : `hidden`}>
	<h2>Thank you for contacting us! We'll be in touch soon</h2>
</div>
