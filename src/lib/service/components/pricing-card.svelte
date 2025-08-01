<script lang="ts">
	type Props = {
		title?: string;
		heading?: string;
		price?: string;
	};

	let { title, heading, price }: Props = $props();
</script>


	<div class="flex h-full w-full items-center justify-center">
		<div class="flex w-full flex-col rounded-md shadow-md">
			<!-- Upper blue section -->
			<div class="flex h-52 flex-col items-center justify-center rounded-md bg-primary-600">
				<h1 class="text-2xl font-bold text-white mb-4">{heading}</h1>
				<p class="text-lg text-white">{title}</p>
			</div>
			<!-- Lower white section -->
			<div class="relative flex h-44 items-center justify-center bg-white">
				<!-- Price circle positioned to span both sections -->
				<div
					class="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full bg-white text-xl font-semibold text-blue-600 shadow-lg"
				>
					{price}
				</div>
			</div>
		</div>
	</div>


<style scoped>
	/* Additional styles if needed */
</style>
