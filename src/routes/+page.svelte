<script lang="ts">
	import TestimonialCard from '$lib/common/components/testimonial-card.svelte';
	import AppNavbar from '$lib/core/components/app-navbar.svelte';
	import CopyRights from '$lib/core/components/copy-rights.svelte';
	import Footer from '$lib/core/components/footer.svelte';
	import HeroSection from '$lib/home/components/hero-section.svelte';
	import NumberSection from '$lib/home/components/number-section.svelte';
	import WhyUs from '$lib/about/components/why-us.svelte';
	import LogoSection from '$lib/home/components/logo-section.svelte';
	import { openContactDialog } from '$lib/home/service';
	import { onMount } from 'svelte';
	import AboutUs from '$lib/about/components/about-us.svelte';
	import Pricing from '$lib/service/components/pricing.svelte';

	async function handleOpenContactForm() {
		await openContactDialog();
	}

	onMount(() => {
		let timer = setTimeout(() => {
			handleOpenContactForm();
		}, 2000); // show after 3 second

		return() => {
			clearTimeout(timer); // cleanup on component destroy
		}
	});
</script>

<div class="min-h-full">
	<AppNavbar hasLogo  />

	<div>
		<HeroSection />
	</div>
	<div>
		<AboutUs />
	</div>
	<div>
		<Pricing />
	</div>
	<div>
		<WhyUs />
	</div>
	<!-- <div>
		<NumberSection />
	</div> -->
	<div>
		<LogoSection />
	</div>
	<div>
		<TestimonialCard />
	</div>
	<div>
		<Footer />
	</div>
	<div>
		<CopyRights />
	</div>
</div>
