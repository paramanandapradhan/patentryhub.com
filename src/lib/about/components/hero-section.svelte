<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Animation for h1 (Who We Are) on page load
		gsap.from('.heading', {
			opacity: 0,
			y: 50,
			duration: 1,
			delay: 0.5,
			ease: 'power3.out'
		});

		// Animation for first paragraph and image when they enter viewport
		gsap.from('.initial-content', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.initial-content',
				start: 'top 90%', // Adjusted for better mobile visibility
				toggleActions: 'play none none none'
			}
		});
		gsap.from('.first-paragraph-hero ', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.first-paragraph-hero ',
				start: 'top 90%', // Adjusted for better mobile visibility
				toggleActions: 'play none none none'
			}
		});

		// Animation for second paragraph when it enters viewport
		gsap.from('.third-paragraph-hero', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.third-paragraph-hero',
				start: 'top 90%',
				toggleActions: 'play none none none'
			}
		});
		gsap.from('.second-paragraph-hero', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.second-paragraph-hero',
				start: 'top 90%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<div class="mx-4 my-6 min-h-screen sm:mx-8 sm:my-8 md:mx-16 md:my-12 lg:mx-32">
	<h1
		class="heading mb-6 text-2xl font-extrabold text-base-800 sm:mb-8 sm:text-3xl md:mb-10 md:text-4xl"
	>
		Who We Are
	</h1>
	<div
		class=" max-w-full rounded-lg bg-white/80 px-4 py-4 shadow-xl backdrop-blur-sm sm:px-6 sm:py-6 md:px-10 md:py-10 lg:px-16 lg:py-16"
	>
		<div class="grid grid-cols-1 items-center gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
			<div class="order-1 lg:order-2">
				<h1 class="heading mb-4 text-2xl font-extrabold text-base-800 md:text-3xl">
					Our Expertise & Experience
				</h1>
				<div class=" mb-4 mt-2 w-2/3 rounded-full border-t-4 border-primary-600 lg:mb-8"></div>
				<p
					class="first-paragraph-hero mb-4 text-base font-semibold text-base-800 sm:mb-6 sm:text-lg md:text-xl"
				>
					Patentry Hub is a patent drafting company with 10 years of experience in utility patents,
					design patents, trade dress, and trademark illustrations. Our team includes Project
					Managers, skilled Drafters, and Quality Reviewers who work together to ensure every
					drawing meets the required standards of global patent offices.
				</p>

				<p class="second-paragraph-hero mb-4 text-base text-base-600 sm:mb-6 sm:text-lg md:text-xl">
					We work with clients across the globe, providing accurate and reliable patent drawings and
					IP illustration services to attorneys, inventors, and businesses. Our focus is on
					precision, timely delivery, and clear communication.
				</p>
				<p class="third-paragraph-hero mb-4 text-base text-base-500 sm:mb-6 sm:text-lg">
					With expertise in technical illustration, CAD drafting, and graphic visualization,
					Patentry Hub is equipped to handle a wide range of projects and adapt to the unique
					requirements of different industries.
				</p>
			</div>
			<div class="initial-content order-2 lg:order-1 relative ">
				<div
					class="absolute inset-0 bg-[#004F9F] rounded-lg z-0" 
				></div>
				<img
					src="/imgs/about-hero-img1.webp"
					alt="who we are"
					class="relative z-10 h-full w-full rounded-lg object-cover ml-2 mb-2"
				/>
			</div>
		</div>
	</div>
</div>


