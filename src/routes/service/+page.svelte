<script lang="ts">
	import AppNavbar from '$lib/core/components/app-navbar.svelte';
	import CopyRights from '$lib/core/components/copy-rights.svelte';
	import Footer from '$lib/core/components/footer.svelte';
	import Faq from '$lib/faq/faq.svelte';
	import Pricing from '$lib/service/components/pricing.svelte';
	import ServiceHeroSection from '$lib/service/components/service-hero-section.svelte';
	import Service from '$lib/service/components/service.svelte';
</script>

<div class="min-h-full">
	<AppNavbar hasLogo />
	<div>
		<ServiceHeroSection />
	</div>
	<div>
		<Service />
	</div>
	<div>
		<Pricing />
	</div>
	<div id="faq">
		<Faq />
	</div>
	<div>
		<Footer />
	</div>
	<div>
		<CopyRights />
	</div>
</div>
