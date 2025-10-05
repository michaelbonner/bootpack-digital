<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="flex flex-wrap gap-y-4 gap-x-8 view-transition-policy-links">
	<a href={resolve('/policies/privacy-policy')} class="underline text-navy-600">Privacy Policy</a>

	<a href={resolve('/policies/cookie-policy')} class="underline text-navy-600">Cookie Policy</a>

	<a href={resolve('/policies/terms-of-service')} class="underline text-navy-600"
		>Terms of Service</a
	>
</div>
