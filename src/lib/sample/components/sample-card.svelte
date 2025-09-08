<script lang="ts">
	const images = [
		// '/imgs/img1.png',
		'/imgs/img2.png',
		'/imgs/img3.png',
		'/imgs/img4.png',
		// '/imgs/img5.png',
		'/imgs/img6.png',
		'/imgs/img7.png',
		'/imgs/img8.png',
		'/imgs/image1.webp',
		'/imgs/image2.webp',
		'/imgs/image3.webp',
		'/imgs/image4.webp',
		'/imgs/image5.webp',
		'/imgs/image6.webp'
	];
</script>

<div class="relative isolate bg-gray-50 pb-32 pt-24 sm:pt-32">
	<!-- Background Gradients -->
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
		></div>
	</div>
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-15 blur-3xl sm:pt-40 xl:justify-end"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
		></div>
	</div>

	<!-- Heading Section -->
	<div class="mb-12 text-center">
		<h1 class="sample-heading text-3xl font-bold text-base-800 md:text-4xl lg:text-5xl">
			Our Work Showcase
		</h1>
		<p class="sample-subheading mx-auto my-6 max-w-2xl text-lg text-base-600">
			Explore our collection of expertly crafted patent drawings, trademarks, and CAD designs,
			showcasing precision and compliance.
		</p>
	</div>

	<!-- Image Grid -->
	<div
		class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-8"
	>
		{#each images as image, index}
			<div
				class="sample-card animate-slide-up relative overflow-hidden border p-2 shadow-lg transition-shadow duration-300 hover:shadow-xl"
				style="--delay: {index * 0.1}s"
			>
				<!-- Animated borders for top and left -->
				<div
					class="border-animation-top absolute left-0 top-0 z-10 h-0 w-full bg-primary-600"
				></div>
				<div
					class="border-animation-left absolute left-0 top-0 z-10 h-full w-0 bg-primary-600"
				></div>
				<div class="image-container">
					<img
						src={image}
						alt={`Sample work ${index + 1}`}
						class="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Slide-up animation for cards on load */
	.animate-slide-up {
		opacity: 0;
		transform: translateY(-30px);
		animation: slideUp 0.8s ease-out forwards;
		animation-delay: var(--delay);
	}

	@keyframes slideUp {
		0% {
			opacity: 0;
			transform: translateY(-30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Border animations for hover */
	.border-animation-top {
		height: 4px;
		width: 0;
		transition: width 0.3s ease-in-out;
	}

	.border-animation-left {
		width: 4px;
		height: 0;
		transition: height 0.3s ease-in-out;
	}

	.sample-card:hover .border-animation-top {
		width: 100%;
	}

	.sample-card:hover .border-animation-left {
		height: 100%;
	}

	.image-container {
		width: 100%;
		height: 300px;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
