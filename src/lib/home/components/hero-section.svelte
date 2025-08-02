<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Data for the looping headings and descriptions
	const features = [
		{
			heading: 'Connect the Lines',
			description:
				'We transform your innovative concepts into precise, professional patent drawings — bridging the gap between imagination and formal documentation, ready for submission anywhere in the world.'
		},
		{
			heading: 'Accuracy in Every Line',
			description:
				'Every detail counts. Our drawings are meticulously crafted to comply with the exacting standards, ensuring faster approvals and stronger protection.'
		},
		{
			heading: 'Driven by Quality',
			description:
				"Quality isn't an option, it's our standard. From line work to layout, we deliver clear, consistent, and technically sound drawings that add real value to your intellectual property."
		},
		{
			heading: 'Protect Your Ideas',
			description:
				'Your invention deserves the best defense. With expert patent drawings and end-to-end support, we help you safeguard your ideas and present them with unmatched professionalism.'
		}
	];

	onMount(() => {
		// Animation for heading
		gsap.from('.hero-heading', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.hero-heading',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation for paragraph
		gsap.from('.hero-paragraph', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.hero-paragraph',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation for buttons
		gsap.from('.button-container', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.button-container',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation for looping features inside glassmorphic div
		const featureItems = document.querySelectorAll('.feature-item');
		const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

		featureItems.forEach((item, index) => {
			tl.set(item, { opacity: 0, y: 20, display: 'flex' }) // Initial state
				.to(item, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }) // Fade in
				.to(item, { opacity: 0, y: -20, duration: 1, ease: 'power2.in', delay: 3 }) // Fade out after 3s
				.set(item, { display: 'none' }); // Hide after fade out
		});

		// Ensure only the first item is visible initially
		gsap.set(featureItems, { opacity: 0, y: 20, display: 'none' });
		gsap.set(featureItems[0], { opacity: 1, y: 0, display: 'flex' });

		// Cleanup on component destroy
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			tl.kill();
		};
	});
</script>

<div class="relative h-[700px] w-full overflow-hidden">
	<!-- Background Video -->
	<video class="absolute left-0 top-0 h-full w-full object-cover" autoplay muted loop playsinline>
		<source src="/video/home-video3.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>

	<!-- Overlay for better text readability -->
	<div class="absolute left-0 top-0 h-full w-full bg-black/80"></div>

	<!-- Content Container -->
	<div
		class="relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 sm:px-6 md:flex-row lg:mt-20 lg:items-start lg:justify-start lg:px-32"
	>
		<!-- Text Content with Glassmorphic Effect -->
		<div
			class="w-full rounded-md border border-white/20 bg-white/10 p-6 text-white shadow-lg backdrop-blur-md sm:p-8 md:w-2/3 md:p-10 lg:p-12"
		>
			<!-- Animated Features -->
			<div class="mt-6 h-[100px]">
				{#each features as feature}
					<div class="feature-item hidden flex-col gap-y-3 border-l border-white/10 pl-6">
						<dt class="text-sm/6 text-base-300">{feature.description}</dt>
						<h1 class="order-first text-xl font-bold tracking-tight lg:text-4xl">
							{feature.heading}
						</h1>
					</div>
				{/each}
			</div>
			<div
				class="button-container mt-10 flex flex-col space-y-8 sm:flex-row sm:space-x-4 sm:space-y-0"
			>
				<a
					href="/about"
					class="hero-button rounded-lg bg-primary-600 px-4 py-2 text-center font-semibold text-white transition duration-300 hover:bg-primary-700 sm:px-6"
				>
					Read More
				</a>
				<a
					href="/contact"
					class="hero-button rounded-lg border-2 border-white bg-transparent px-4 py-2 text-center font-semibold text-white transition duration-300 hover:bg-white hover:text-black sm:px-6"
				>
					Contact Us
				</a>
			</div>
		</div>
	</div>
	<!-- Static Features from Original -->
	<div class="absolute bottom-14 left-0 right-0 z-20 hidden w-full justify-center sm:block">
		<dl
			class="hero-content mx-auto mt-8 grid w-full grid-cols-1 gap-x-6 gap-y-8 px-4 text-white sm:mt-10 sm:grid-cols-2 sm:gap-y-12 sm:px-6 lg:grid-cols-4 lg:px-8"
		>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Transform your concept into a clear, patent-ready draft.</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">
					Connect the lines.
				</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Precision drawings that meet global patent office standards.</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">
					Accuracy in every line.
				</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Exceptional drafting that reflects the value of your invention.</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">
					Driven by quality.
				</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">
					Secure your innovation with professional patent support you can trust.
				</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">
					Protect your ideas.
				</dd>
			</div>
		</dl>
	</div>
</div>

<style>
	/* Ensure video stays behind content */
	video {
		z-index: 0;
	}
</style>
