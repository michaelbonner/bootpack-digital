<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
</script>

<div class="leading-normal tracking-normal text-gray-900">
	<Header />
	<slot />
	<Footer />
</div>
