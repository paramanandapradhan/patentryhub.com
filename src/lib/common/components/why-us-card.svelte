<script lang="ts">
	type Props = {
		title?: string;
		description?: string;
	};

	let { title, description }: Props = $props();
</script>

<div class="relative">
	<div class="absolute inset-0 z-0 rounded-lg bg-[#004F9F]"></div>
	<div class="relative z-10 rounded-md bg-primary-100 p-4 shadow-sm lg:p-6 ml-2 ">
		<div class="">
			<h1 class="mb-2 text-2xl font-bold">{title}</h1>
			<p class="my-4 text-base text-base-700">{description}</p>
		</div>
	</div>
</div>
