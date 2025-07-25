<script lang="ts">
	type Props = {
		title?: string;
		content1?: string;
		content2?: string;
		image?: string;
		contentClass?: string;
		imageClass?: string;
	};

	let { title, content1, content2, image, contentClass = "order-1 lg:order-2", imageClass="order-2 lg:order-1" }: Props = $props();
</script>

<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12">
	<div class="{contentClass}">
		<h1 class="heading mb-4 text-2xl font-extrabold text-base-800 md:text-3xl">
			{title}
		</h1>
		<div class=" mb-4 mt-2 w-2/3 rounded-full border-t-4 border-primary-600 lg:mb-8"></div>
		<p
			class="first-paragraph-hero mb-4 text-base font-semibold text-base-800 sm:mb-6 sm:text-lg md:text-xl"
		>
			{content1}
		</p>

		<p class="second-paragraph-hero mb-4 text-base text-base-600 sm:mb-6 sm:text-lg md:text-xl">
			{content2}
		</p>
	</div>
	<div class="initial-content relative {imageClass}">
		<div class="absolute inset-0 z-0 rounded-lg bg-[#004F9F]"></div>
		<img
			src={image}
			alt="who we are"
			class="relative z-10 mb-2 ml-2 h-auto w-full rounded-lg object-cover"
		/>
	</div>
</div>
