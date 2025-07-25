<script lang="ts">
	import ServiceCard from './service-card.svelte';
</script>

<div class="h-full w-full items-center px-4 md:px-16 lg:px-32">
	<!-- Heading Section -->
	<div class="pt-24 text-center md:pt-32">
		<h4 class="mb-6 text-lg font-medium uppercase tracking-widest text-primary-500 lg:mb-12">
			Our Service
		</h4>
		<!-- <h1 class="my-4 text-2xl font-black leading-tight text-base-800 md:my-6 md:text-4xl">
			Get In Touch With an <br /> Expert
		</h1> -->
	</div>
	<div>
		<ServiceCard
			title="Utility Patent Drawings"
			content1="Our utility patent drawings clearly illustrate the technical structure and functionality of your invention. We follow all formal patent office requirements, ensuring your figures are accurate, consistent, and professionally laid out."
			content2="These drawings are critical in helping examiners understand your invention. Whether you’re filing a national or international patent, we ensure the visual representation supports your claims and reduces the chance of office actions or rejections."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="my-8">
		<ServiceCard
			title="Design Patent Drawings"
			content1="Design patents focus on how a product looks — and we make sure your design is captured in perfect detail. Our design patent drawings include all required views (front, back, side, top, bottom, perspective) with precision and clarity."
			content2="We understand the strict formatting rules for design filings and prepare drawings that highlight the unique features of your product, making your submission smooth and compliant."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-2 lg:order-1"
			imageClass="order-1 lg:order-2"
		/>
	</div>
	<div>
		<ServiceCard
			title="Trademark & Branding Illustrations"
			content1="Trademark drawings must follow specific standards to be accepted during registration. We prepare clean, precise trademark illustrations whether you’re filing a wordmark, logo, symbol, or combination mark."
			content2="From black-and-white line versions to grayscale or stylized drawings, our illustrations are tailored to meet global trademark office formats, helping protect your brand identity without delays."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="my-8">
		<ServiceCard
			title="Logo Design"
			content1="A strong logo is the foundation of your brand. We offer custom logo design services that balance creativity and professionalism — with the added benefit of making them IP-compliant and ready for trademark filing."
			content2="Whether you need a new logo or want to redesign an existing one, we work closely with you to deliver multiple concepts, refined drafts, and final versions in all standard formats."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-2 lg:order-1"
			imageClass="order-1 lg:order-2"
		/>
	</div>
	<div>
		<ServiceCard
			title="Flowcharts"
			content1="Flowcharts are essential for explaining software logic, business processes, or patent method claims. We create professional, logically structured charts using industry-standard symbols and clean design."
			content2="These charts not only improve your patent application but also enhance your documentation and internal presentations. Just provide your steps or outline — we’ll turn it into a clear, publish-ready flowchart."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="my-8">
		<ServiceCard
			title="System Architecture Diagrams"
			content1="Our system architecture diagrams clearly represent how different components, layers, or modules interact within your system. Whether it’s software, hardware, or cloud-based architecture, we illustrate it in a logical, structured way."
			content2="Perfect for patent filings, whitepapers, and presentations, these diagrams are custom-built to match your technical vision and application needs."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-2 lg:order-1"
			imageClass="order-1 lg:order-2"
		/>
	</div>
	<div>
		<ServiceCard
			title="Schematic Diagrams"
			content1="We produce detailed schematic diagrams that accurately represent electrical and electronic systems. These include circuits, wiring layouts, and component symbols — professionally styled for clarity and submission."
			content2="Our team ensures that your schematics are clean, technically accurate, and aligned with global documentation standards — supporting your patent or product development goals."
			image="/imgs/about-hero-img1.webp"
			contentClass="order-1 lg:order-2"
			imageClass="order-2 lg:order-1"
		/>
	</div>
	<div class="my-8">
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
