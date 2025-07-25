<script lang="ts">
	const logos = [
		{
			alt: 'Transistor',
			src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg'
		},
		{
			alt: 'Reform',
			src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg'
		},
		{
			alt: 'Tuple',
			src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg'
		},
		{
			alt: 'SavvyCal',
			src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg'
		},
		{
			alt: 'Statamic',
			src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg'
		}
	];
</script>



<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<h2 class="text-center text-lg font-semibold text-gray-900 mb-10">
			Trusted by the world’s most innovative teams
		</h2>

		<div class="scroller">
			<div class="scroller-track">
				<!-- Original logo strip -->
				<div class="logo-strip">
					{#each logos as logo}
						<img
							src={logo.src}
							alt={logo.alt}
							width="158"
							height="48"
							class="max-h-12 w-full object-contain"
						/>
					{/each}
				</div>

				<!-- Duplicated logo strip with margin-left for seamless scroll -->
				<div class="logo-strip duplicate">
					{#each logos as logo}
						<img
							src={logo.src}
							alt={logo.alt}
							width="158"
							height="48"
							class="max-h-12 w-full object-contain"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>


<style>
	.scroller {
		overflow: hidden;
		width: 100%;
		position: relative;
	}

	.scroller-track {
		display: flex;
		width: max-content;
		animation: scroll-marquee 30s linear infinite;
	}

	@keyframes scroll-marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.logo-strip {
		display: flex;
		gap: 4rem;
	}

	.logo-strip.duplicate {
		margin-left: 4rem; /* Ensures gap between last and first logos */
	}
</style>