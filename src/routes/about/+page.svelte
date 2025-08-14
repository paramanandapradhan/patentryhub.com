<script lang="ts">
	import AboutHeroSection from '$lib/about/components/about-hero-section.svelte';
	import AboutUs from '$lib/about/components/about-us.svelte';
	import OurMission from '$lib/about/components/our-mission.svelte';
	import WhyUs from '$lib/about/components/why-us.svelte';
	import AppNavbar from '$lib/core/components/app-navbar.svelte';
	import CopyRights from '$lib/core/components/copy-rights.svelte';
	import Footer from '$lib/core/components/footer.svelte';
</script>

<div class="min-h-full">
	<AppNavbar hasLogo  />
	<div>
		<AboutHeroSection />
	</div>
	<div>
		<AboutUs />
	</div>
	<div>
		<OurMission />
	</div>
	<div>
		<WhyUs />
	</div>
	<div>
		<Footer />
	</div>
	<div>
		<CopyRights />
	</div>
</div>
