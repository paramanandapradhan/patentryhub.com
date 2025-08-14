<script lang="ts">
	import WhyUsCard from '$lib/common/components/why-us-card.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Animation for h1 (Why Us) when it enters viewport
		gsap.from('.why-heading', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.why-heading',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation for WhyUsCard components
		gsap.from('.why-cards', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			stagger: 0.2,
			scrollTrigger: {
				trigger: '.why-cards',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<div
	class="relative isolate mx-auto h-full w-full max-w-7xl items-center bg-white px-6 pb-32 pt-24 sm:pt-32 lg:px-8"
>
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
		></div>
	</div>
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
		></div>
	</div>
	<div class="why-heading text-center">
		<h4 class="text-lg font-medium uppercase tracking-widest text-primary-500">Why Choose Us</h4>
	</div>
	<div
		class="why-cards mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-10"
	>
		<div>
			<WhyUsCard
				title="Experienced Team"
				description="With 10+ years in patent illustration, our team brings deep technical knowledge and proven expertise across industries."
			/>
		</div>
		<div>
			<WhyUsCard
				title="Fast & Flexible Delivery"
				description="Standard turnaround is 3–5 days — and we’re ready for urgent requests too, with no extra charge for RUSH projects."
			/>
		</div>
		<div>
			<WhyUsCard
				title="Fair & Transparent Pricing"
				description="Our pricing is fair and transparent — there are no concealed charges, only high-quality work at an appropriate value."
			/>
		</div>
		<div>
			<WhyUsCard
				title="Effective Communication"
				description="With no delays you can consistently communicate with the team Our team is attentive, supportive, and readily accessible whenever you require assistance."
			/>
		</div>
	</div>
	<div class=" my-12 text-center">
		<h4 class="text-lg font-medium tracking-widest text-base-700">
			Give us a try <span class="text-primary-500">Let's get started</span>
		</h4>
	</div>
</div>
