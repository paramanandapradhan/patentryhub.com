<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Removed parallax effect

		gsap.from('.mission-heading', {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: '.mission-heading',
				start: 'top 80%'
			}
		});

		gsap.from('.core-values h1', {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: '.core-values h1',
				start: 'top 80%'
			}
		});

		gsap.utils.toArray('.core-values .value-item').forEach((item: any, index) => {
			gsap.from(item, {
				opacity: 0,
				y: 50,
				duration: 1,
				delay: index * 0.2,
				scrollTrigger: {
					trigger: item,
					start: 'top 80%'
				}
			});
		});

		gsap.from('.first-paragraph', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.first-paragraph',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsap.from('.second-paragraph-mission', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.second-paragraph-mission',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<!-- Background Image Section -->
<div class="relative z-0 w-full">
	<div
		class="bg-cover bg-center bg-no-repeat px-4 py-16 text-white md:px-16 lg:px-32"
		style="
			background-image: url('imgs/home-img1.avif');
			background-size: 120% 120%;
			background-blend-mode: multiply;
			background-color: rgba(0,0,0,0.7);
		"
	>
		<!-- Our Mission -->
		<h1 class="mission-heading mb-12 text-4xl font-extrabold">Our Mission</h1>

		<div class="mb-6 md:mb-12 lg:mb-16">
			<div class="grid grid-cols-12 gap-6">
				<div class="col-span-12 lg:col-span-10">
					<p class="first-paragraph mb-4 text-lg font-bold leading-relaxed">
						At our core, we empower innovators by crafting precise, compliant patent drawings,
						trademarks, and branding visuals. Our mission is to deliver professional solutions that
						strengthen intellectual property applications and protect your creative vision with
						clarity and impact.
					</p>
					<p class="second-paragraph-mission text-lg leading-relaxed text-base-400">
						We streamline patent filings and enhance brand identity through expert illustrations,
						flowcharts, CAD designs, and logos, ensuring accuracy and compliance for your success.
					</p>
				</div>
			</div>
		</div>

		<!-- Core Values -->
		<div class="core-values">
			<h1
				class="mb-4 inline-block rounded bg-opacity-80 p-2 text-2xl font-bold text-white lg:mb-10"
			>
				Core Values
			</h1>

			<div
				class="grid grid-cols-1 gap-6 rounded-lg bg-gray-900 bg-opacity-90 px-6 py-6 shadow-md md:py-10 lg:grid-cols-3 lg:py-20"
			>
				<!-- Value 1 -->
				<div class="value-item">
					<div class="mb-6 flex items-center justify-start gap-6">
						<div class="h-12 w-2 rounded bg-primary-600"></div>
						<h2 class="mb-2 text-xl font-semibold text-white">Precision</h2>
					</div>
					<p class="text-start text-sm text-base-300">
						We deliver meticulously crafted patent drawings, trademarks, and CAD designs, ensuring
						every detail meets strict IP guidelines for flawless filings.
					</p>
				</div>

				<!-- Value 2 -->
				<div class="value-item">
					<div class="mb-6 flex items-center justify-start gap-6">
						<div class="h-12 w-2 rounded bg-primary-600"></div>
						<h2 class="mb-2 text-xl font-semibold text-white">Reliability</h2>
					</div>
					<p class="text-start text-sm text-base-300">
						We provide consistent, high-quality visuals, fostering trust through dependable service
						and compliant solutions for your intellectual property needs.
					</p>
				</div>

				<!-- Value 3 -->
				<div class="value-item">
					<div class="mb-6 flex items-center justify-start gap-6">
						<div class="h-12 w-2 rounded bg-primary-600"></div>
						<h2 class="mb-2 text-xl font-semibold text-white">Client Focus</h2>
					</div>
					<p class="text-start text-sm text-base-300">
						We prioritize your vision, creating tailored illustrations, logos, and flowcharts that
						enhance your IP applications and brand identity.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
