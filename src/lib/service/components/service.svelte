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
			duration: 1.5,
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
			duration: 1.5,
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
			class="service-heading-h4 my-4 text-lg font-medium uppercase tracking-widest text-primary-500 md:my-6 "
		>
			Our Services
		</h4>
		<h1 class="service-heading-h1 mb-6 lg:mb-20 text-2xl font-black leading-tight text-base-800 md:text-4xl">
			Discover Expert Solutions for Your IP Needs
		</h1>
	</div>
	<div class="service-card">
		<ServiceCard
			title="Utility Patent Drawings"
			content1="Our utility patent drawings clearly illustrate the technical structure and functionality of your invention. We follow all formal patent office requirements, ensuring your figures are accurate, consistent, and professionally laid out."
			content2="These drawings are critical in helping examiners understand your invention. Whether you’re filing a national or international patent, we ensure the visual representation supports your claims and reduces the chance of office actions or rejections."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="service-card my-8">
		<ServiceCard
			title="Design Patent Drawings"
			content1="Design patents focus on how a product looks — and we make sure your design is captured in perfect detail. Our design patent drawings include all required views (front, back, side, top, bottom, perspective) with precision and clarity."
			content2="We understand the strict formatting rules for design filings and prepare drawings that highlight the unique features of your product, making your submission smooth and compliant."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-2 lg:order-1"
			imageClass="order-1 lg:order-2"
		/>
	</div>
	<div class="service-card">
		<ServiceCard
			title="Trademark & Branding Illustrations"
			content1="Trademark drawings must follow specific standards to be accepted during registration. We prepare clean, precise trademark illustrations whether you’re filing a wordmark, logo, symbol, or combination mark."
			content2="From black-and-white line versions to grayscale or stylized drawings, our illustrations are tailored to meet global trademark office formats, helping protect your brand identity without delays."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="service-card my-8">
		<ServiceCard
			title="Logo Design"
			content1="A strong logo is the foundation of your brand. We offer custom logo design services that balance creativity and professionalism — with the added benefit of making them IP-compliant and ready for trademark filing."
			content2="Whether you need a new logo or want to redesign an existing one, we work closely with you to deliver multiple concepts, refined drafts, and final versions in all standard formats."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-2 lg:order-1"
			imageClass="order-1 lg:order-2"
		/>
	</div>
	<div class="service-card">
		<ServiceCard
			title="Flowcharts"
			content1="Flowcharts are essential for explaining software logic, business processes, or patent method claims. We create professional, logically structured charts using industry-standard symbols and clean design."
			content2="These charts not only improve your patent application but also enhance your documentation and internal presentations. Just provide your steps or outline — we’ll turn it into a clear, publish-ready flowchart."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="service-card my-8">
		<ServiceCard
			title="System Architecture Diagrams"
			content1="Our system architecture diagrams clearly represent how different components, layers, or modules interact within your system. Whether it’s software, hardware, or cloud-based architecture, we illustrate it in a logical, structured way."
			content2="Perfect for patent filings, whitepapers, and presentations, these diagrams are custom-built to match your technical vision and application needs."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-2 lg:order-1"
			imageClass="order-1 lg:order-2"
		/>
	</div>
	<div class="service-card">
		<ServiceCard
			title="Schematic Diagrams"
			content1="We produce detailed schematic diagrams that accurately represent electrical and electronic systems. These include circuits, wiring layouts, and component symbols — professionally styled for clarity and submission."
			content2="Our team ensures that your schematics are clean, technically accurate, and aligned with global documentation standards — supporting your patent or product development goals."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="service-card my-8">
		<ServiceCard
			title="Mechanical / Engineering CAD Drawings"
			content1="Our CAD drawing services support inventors, engineers, and companies by creating detailed 2D and 3D mechanical drawings. Whether you're preparing for a utility patent or need accurate models for prototyping, we’ve got you covered."
			content2="From complex assemblies to individual components, we work from your sketches, images, or concepts and provide professional outputs in multiple formats — all dimensioned and ready for use."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-2 lg:order-1"
			imageClass="order-1 lg:order-2"
		/>
	</div>
</div>
