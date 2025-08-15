<script lang="ts">
	type Props = {
		title?: string;
		content1?: string;
		content2?: string;
		image?: string;
		contentClass?: string;
		imageClass?: string;
		additionalImages?: string[];
	};

	let {
		title,
		content1,
		content2,
		image,
		contentClass = 'order-1 lg:order-2',
		imageClass = 'order-2 lg:order-1',
		additionalImages = []
	}: Props = $props();

	// Reactive variable to track the currently displayed main image
	let currentImage: string = $state(image || '');

	// Function to handle thumbnail click and update the main image
	function handleThumbnailClick(newImage: string) {
		currentImage = newImage;
	}

	// Variables for mouse position
	let zoomX = $state(0);
	let zoomY = $state(0);
	let isHovering = $state(false);

	// Handle mouse movement to calculate zoom position
	function handleMouseMove(event: MouseEvent) {
		const img = event.currentTarget as HTMLDivElement;
		const rect = img.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const width = rect.width;
		const height = rect.height;

		// Calculate percentage position of the mouse within the image
		zoomX = (x / width) * 100;
		zoomY = (y / height) * 100;
	}

	// Toggle hover state
	function handleMouseEnter() {
		isHovering = true;
	}

	function handleMouseLeave() {
		isHovering = false;
	}
</script>

<div class="relative isolate grid grid-cols-1 gap-6 bg-white px-6 md:grid-cols-2 md:gap-12 lg:px-8">
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl pointer-events-none"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
		></div>
	</div>
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end pointer-events-none"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
		></div>
	</div>
	<div class={contentClass}>
		<h1 class="heading mb-4 text-2xl font-extrabold text-base-800 md:text-3xl">
			{title}
		</h1>
		<div class="mb-4 mt-2 w-2/3 rounded-full border-t-4 border-primary-600 lg:mb-8"></div>
		<p class="first-paragraph-hero mb-4 text-lg font-semibold text-base-800 sm:mb-6 md:text-lg">
			{content1}
		</p>
	</div>
	<div class="initial-content relative p-6 {imageClass}">
		<!-- Magnifying effect container -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="group relative overflow-hidden rounded-lg border-b-4 border-l-4 border-[#004F9F] p-1"
			onmousemove={handleMouseMove}
			onmouseenter={handleMouseEnter}
			onmouseleave={handleMouseLeave}
		>
			<div class="relative mx-auto h-[400px] w-[500px]">
				<img
					src={currentImage}
					alt="who we are"
					class="relative z-10 h-full w-full rounded-lg object-cover transition-transform duration-300"
					style={isHovering
						? `transform: scale(1.5); transform-origin: ${zoomX}% ${zoomY}%;`
						: 'transform: scale(1); transform-origin: center;'}
				/>
			</div>
		</div>
		<!-- Thumbnail images -->
		{#if additionalImages.length > 0}
			<div class="mt-4 flex justify-center gap-2">
				{#each additionalImages as thumb, index}
					<button
						class="relative h-16 w-16 overflow-hidden rounded-md border-2 {currentImage === thumb
							? 'border-primary-600'
							: 'border-gray-300'}"
						onclick={() => handleThumbnailClick(thumb)}
					>
						<img src={thumb} alt="Thumbnail {index + 1}" class="h-full w-full object-cover" />
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.group .relative {
		overflow: hidden;
	}

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.group img {
		transition: transform 0.3s ease-in-out;
	}
</style>
