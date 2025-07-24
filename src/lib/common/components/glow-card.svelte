<script lang="ts">
	let { children } = $props();
</script>

<div class="card-container group relative w-full rounded-lg p-0.5">
	<div
		class="h-full w-full overflow-hidden rounded-lg bg-base-200 shadow-2xl transition-all duration-500 hover:bg-base-300"
	>
		<div class="p-4 px-4 py-5 md:p-6">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.card-container {
		background: linear-gradient(45deg, #00458f, #00ffff, #00458f, #00ffff);
		background-size: 400% 400%;
		animation:
			rotate-gradient 8s linear infinite,
			fade-in 3s ease-in-out;
	}

	.card-container:hover {
		box-shadow:
			0 0 20px rgba(57, 47, 191, 0.6),
			0 0 40px rgba(73, 48, 238, 0.4);
	}

	@keyframes rotate-gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
