<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

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
		
		gsap.from('.hero-content', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.hero-content',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<div class="relative h-screen w-full overflow-hidden">
	<!-- Background Video -->
	<video class="absolute left-0 top-0 h-full w-full object-cover" autoplay muted loop playsinline>
		<source src="/video/home-video3.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>

	<!-- Overlay for better text readability -->
	<div class="absolute left-0 top-0 h-full w-full bg-black/80"></div>

	<!-- Content Container -->
	<div
		class="relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 sm:px-6 md:flex-row lg:justify-start lg:px-32 lg:items-start lg:mt-20 "
	>
		<!-- Text Content with Glassmorphic Effect -->
		<div
			class="w-full rounded-md border border-white/20 bg-white/10 p-6 text-white shadow-lg backdrop-blur-md sm:p-8 md:w-2/3 md:p-10 lg:p-12"
		>
			<h1
				class="hero-heading mb-4 text-3xl font-bold leading-tight tracking-wide sm:text-4xl md:text-5xl lg:text-6xl"
			>
				Connect-the-dots
			</h1>
			<p class="hero-paragraph mb-6 text-base text-base-400 sm:text-lg md:text-xl">
				Discover emerging science and strengthen your IP portfolio
			</p>
			<div class="button-container flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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
	<div class="absolute bottom-2 w-full left-0 right-0 z-20  justify-center hidden sm:block">
		<dl
			class="hero-content w-full mx-auto mt-8 grid grid-cols-1 gap-x-6 gap-y-8 text-white px-4 sm:px-6 sm:mt-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:px-8"
		>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Transform your concept into a clear, patent-ready draft.</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">Connect the lines.</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Precision drawings that meet global patent office standards.</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">Accuracy in every line.</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Exceptional drafting that reflects the value of your invention.</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">Driven by quality.</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Secure your innovation with professional patent support you can trust.</dt>
				<dd class="order-first text-2xl font-semibold tracking-tight sm:text-3xl">Protect your ideas.</dd>
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