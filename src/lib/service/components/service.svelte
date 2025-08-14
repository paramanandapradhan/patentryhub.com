<script lang="ts">
	import { onMount } from 'svelte';
	import ServiceCard from './service-card.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Animate the headings (h1 and h4)
		gsap.from('.service-heading-h4', {
			opacity: 0,
			y: 80,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.service-heading-h4',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsap.from('.service-heading-h1', {
			opacity: 0,
			y: 80,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.service-heading-h1',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animate each service card individually
		const cards = document.querySelectorAll('.service-card');
		cards.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					opacity: 0,
					y: 100 // Start 100px below
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.8, // Smooth duration
					ease: 'power2.out', // Dynamic easing for engaging motion
					scrollTrigger: {
						trigger: card, // Each card is its own trigger
						start: 'top 80%', // Start when card is 80% in viewport
						toggleActions: 'play none none none'
					}
				}
			);
		});

		// Cleanup ScrollTrigger on component destroy
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>

<div class="mx-auto h-full w-full max-w-7xl items-center px-6 pb-32 pt-24 sm:pt-32 lg:px-8">
	<!-- Heading Section -->
	<div class="text-center">
		<h4
			class="service-heading-h4 my-4 text-lg font-medium uppercase tracking-widest text-primary-500 md:my-6"
		>
			Our Services
		</h4>
		<h1
			class="service-heading-h1 mb-6 text-2xl font-black leading-tight text-base-800 md:text-4xl lg:mb-20"
		>
			Discover Expert Solutions for Your IP Needs
		</h1>
	</div>
	<div class="service-card">
		<ServiceCard
			title="Utility Patent Drawings"
			content1="Our utility patent drawings clearly demonstrate the technical structure and functionality of your invention. We strictly follow formal patent office guidelines to ensure every figure is accurate, consistent, and professionally presented.These drawings enhance examiner understanding and help streamline your application process. Whether filing nationally or internationally, we ensure your invention is visually represented in a way that supports your claims and minimizes the likelihood of rejections or delays."
			image="/imgs/image5.webp"
			additionalImages={[
				'/imgs/image5.webp',
				'/imgs/image1.webp',
				'/imgs/image2.webp',
				'/imgs/image3.webp'
			]}
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="service-card my-8">
		<ServiceCard
			title="Design Patent Drawings"
			content1="Design patents protect how your product looks — and we capture that appearance with precision. Our drawings include all required views (front, back, sides, top, bottom, perspective) and meet every formatting rule for a compliant and professional submission. We emphasize the unique features of your design to give your application a competitive edge and a smoother path to approval."
			image="/imgs/image4.webp"
			additionalImages={[
				'/imgs/image4.webp',
				'/imgs/image1.webp',
				'/imgs/image2.webp',
				'/imgs/image3.webp'
			]}
			contentClass="order-1"
			imageClass="order-2"
		/>
	</div>
	<div class="service-card">
		<ServiceCard
			title="Trademark & Branding Illustrations"
			content1="A trademark drawing must meet exact standards to be accepted — and we deliver illustrations that are sharp, accurate, and fully compliant. Whether you’re filing logo, or symbol, we prepare artwork suited for every major trademark office. From simple line versions to grayscale or stylized graphics, we help you protect your brand with visuals that meet formal requirements and communicate your identity clearly."
			image="/imgs/image6.webp"
			additionalImages={[
				'/imgs/image6.webp',
				'/imgs/image1.webp',
				'/imgs/image2.webp',
				'/imgs/image3.webp'
			]}
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="service-card my-8">
		<ServiceCard
			title="Logo Design"
			content1="A great logo is more than just a symbol — it's the face of your brand. We craft professional, creative logos that are not only visually strong but also designed for smooth trademark registration. Whether you’re starting fresh or rebranding, we provide custom concepts, thoughtful refinements, and final files ready for every platform — all IP-friendly and ready for registration."
			image="/imgs/image3.webp"
			additionalImages={[
				'/imgs/image3.webp',
				'/imgs/image1.webp',
				'/imgs/image2.webp',
				'/imgs/image3.webp'
			]}
			contentClass="order-1"
			imageClass="order-2"
		/>
	</div>
	<div class="service-card">
		<ServiceCard
			title="Flowcharts"
			content1="Flowcharts are powerful tools for explaining processes — from software logic to business workflows or patent method claims. We turn your rough steps or outlines into clean, easy-to-understand diagrams using standard symbols and layout practices. Our flowcharts help improve not only your patent application but also internal communication, documentation, and presentations."
			image="/imgs/image2.webp"
			additionalImages={[
				'/imgs/image2.webp',
				'/imgs/image1.webp',
				'/imgs/image2.webp',
				'/imgs/image3.webp'
			]}
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="service-card my-8">
		<ServiceCard
			title="Mechanical / Engineering CAD Drawings"
			content1="Our CAD drawing services are tailored for inventors, engineers, and product developers. We create detailed 2D and 3D mechanical drawings that meet patent, prototyping, and production needs. From full assemblies to individual parts, we work from your sketches or ideas to deliver polished, dimensioned files in multiple formats — ready for manufacturing, patent filing, or presentation."
			image="/imgs/image1.webp"
			additionalImages={[
				'/imgs/image1.webp',
				'/imgs/image4.webp',
				'/imgs/image6.webp',
				'/imgs/image5.webp'
			]}
			contentClass="order-1"
			imageClass="order-2"
		/>
	</div>
</div>
