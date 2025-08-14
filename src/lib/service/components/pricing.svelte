<script lang="ts">
	import PricingCard from './pricing-card.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Animate h4
		gsap.fromTo(
			'.pricing-heading',
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.pricing-heading',
					start: 'top 80%',
					toggleActions: 'play none none none'
				}
			}
		);

		// Animate h1
		gsap.fromTo(
			'.pricing-h1',
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.pricing-h1',
					start: 'top 80%',
					toggleActions: 'play none none none'
				}
			}
		);

		// Animate pricing cards
		gsap.fromTo(
			'.pricing-card',
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power2.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: '.pricing-grid',
					start: 'top 80%',
					toggleActions: 'play none none none'
				}
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	});
</script>

<div class="mx-auto h-full w-full max-w-7xl items-center px-6 pb-32 lg:px-8">
	<!-- Heading Section -->
	<div class="text-center">
		<h4
			class="pricing-heading my-4 text-lg font-medium uppercase tracking-widest text-primary-500 md:my-6"
		>
			Our Pricing
		</h4>
		<h1
			class="pricing-h1 mb-6 text-2xl font-black leading-tight text-base-800 md:text-4xl lg:mb-20"
		>
			Flexible Pricing for Your Patent Drawings
		</h1>
	</div>

	<div class="pricing-grid grid grid-cols-1 gap-4 lg:grid-cols-4">
		<div class="pricing-card">
			<PricingCard heading="Utility Drawings" title="Per Page" price="$25-$35" />
		</div>
		<div class="pricing-card">
			<PricingCard heading="Design drawings" title="Per Page" price="$35-$45" />
		</div>
		<div class="pricing-card">
			<PricingCard heading="Trademark drawings" title="Per Page" price="$30-$40" />
		</div>
		<div class="pricing-card">
			<PricingCard heading="Hourly charge" title="Per Page" price="$20" />
		</div>
	</div>
</div>