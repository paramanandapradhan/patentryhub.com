<script lang="ts">
	import TestimonialCard from '$lib/common/components/testimonial-card.svelte';
	import AppNavbar from '$lib/core/components/app-navbar.svelte';
	import CopyRights from '$lib/core/components/copy-rights.svelte';
	import Footer from '$lib/core/components/footer.svelte';
	import HeroSection from '$lib/home/components/hero-section.svelte';
	import HeroSectionAbout from '$lib/about/components/hero-section.svelte';
	import NumberSection from '$lib/home/components/number-section.svelte';
	import WhyUs from '$lib/about/components/why-us.svelte';
	import HomeServiceSection from '$lib/service/components/service.svelte';
	import LogoSection from '$lib/home/components/logo-section.svelte';
</script>

<div class="min-h-full">
	<AppNavbar hasLogo hasTitle />

	<div>
		<HeroSection />
	</div>
	<div>
		<HeroSectionAbout />
	</div>
	<div>
		<WhyUs />
	</div>
	
	<div>
		<NumberSection />
	</div>
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
