<script lang="ts">
	import GlowCard from '$lib/common/components/glow-card.svelte';
	import { mdiEmailOutline, mdiMapMarker, mdiPhone } from '$lib/core/services/app-icons-service';
	import { IconCircle } from '@cloudparker/moldex.js';
</script>

<div class="grid w-full grid-cols-1 gap-4 px-4 md:gap-6 md:px-6 lg:grid-cols-3 lg:px-8">
	<GlowCard>
		<div class="flex flex-col gap-4 md:flex-row">
			<div>
				<IconCircle
					iconPath={mdiEmailOutline}
					iconClassName="text-primary-500  group-hover:text-primary-400 transition-colors duration-300"
				/>
			</div>
			<div class="flex-1 text-left">
				<p class="text-lg font-medium text-base-900 md:text-xl">Email</p>
				<a href="mailto:support@patentryhub.com" class="text-sm text-base-700 md:text-lg">
					support@patentryhub.com
				</a>
				<!-- <p class="text-sm text-base-400 md:text-lg">support@hellocall.ai</p> -->
			</div>
		</div>
	</GlowCard>
	<GlowCard>
		<div class="flex flex-col gap-4 md:flex-row">
			<div>
				<IconCircle
					iconPath={mdiPhone}
					iconClassName="text-primary-500 group-hover:text-primary-400 transition-colors duration-300"
				/>
			</div>
			<div class="flex-1 text-left">
				<p class="text-lg font-medium text-base-900 md:text-xl">Phone</p>
				<a href="tel:+917411909057" class="text-sm text-base-800 md:text-lg">+91 7411909057</a>
			</div>
		</div>
	</GlowCard>
	<GlowCard>
		<div class="flex flex-col gap-4 md:flex-row">
			<div>
				<IconCircle
					iconPath={mdiMapMarker}
					iconClassName="text-primary-500 group-hover:text-primary-400 transition-colors duration-300"
				/>
			</div>
			<div class="flex-1 text-left">
				<p class="text-lg font-medium text-base-900 md:text-xl">Address</p>
				<p class="text-sm text-base-800 md:text-lg">
					# Plot No 9, Sainikpuri, Defence Colony, Near Saibaba Temple, Hyderabad-500094, Telangana,
					India.
				</p>
			</div>
		</div>
	</GlowCard>
</div>
