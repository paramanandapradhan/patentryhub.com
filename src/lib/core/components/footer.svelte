<script lang="ts">
	import { Icon } from '@cloudparker/moldex.js';
	import {
		mdiEmailOutline,
		mdiFacebook,
		mdiInstagram,
		mdiLinkedin,
		mdiPhone,
		mdiTwitter,
		mdiYoutube
	} from '../services/app-icons-service';
	import Newsletter from '$lib/common/components/newsletter.svelte';
</script>

<div class="mx-auto h-full w-full max-w-7xl items-center px-6 pb-32 lg:px-8">
	<div
		class="grid grid-cols-1 gap-10 text-center text-base-200 md:grid-cols-2 lg:grid-cols-4 lg:text-left"
	>
		<div
			class="flex flex-col items-center justify-center space-y-6 lg:items-start lg:justify-start"
		>
			<div class="flex items-center gap-4">
				<a href="/">
					<img
						src="/icons/web/icon-192.png"
						alt="logo"
						class=" !h-8 !w-auto !object-contain !filter"
					/>
				</a>
				<h1 class="text-center text-2xl font-black text-primary-600">PatentryHub</h1>
			</div>
			<div class="flex gap-3">
				<a
					href="https://www.facebook.com/HelloCallai"
					class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600 p-1 transition hover:bg-primary-600 hover:text-white"
				>
					<Icon path={mdiFacebook} className="h-16 w-16 text-black  hover:text-white" />
				</a>
				<a
					href="https://www.instagram.com/hellocall.ai/"
					class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600 p-1 transition hover:bg-primary-600 hover:text-white"
				>
					<Icon path={mdiInstagram} className="h-16 w-16  text-black  hover:text-white" />
				</a>
				<a
					href="https://x.com/hellocallai"
					class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600 p-1 transition hover:bg-primary-600 hover:text-white"
				>
					<Icon path={mdiTwitter} className="h-16 w-16  text-black  hover:text-white" />
				</a>
				<a
					href="https://www.linkedin.com/company/crawlink-networks/about/"
					class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600 p-1 transition hover:bg-primary-600 hover:text-white"
				>
					<Icon path={mdiLinkedin} className="h-16 w-16  text-black  hover:text-white" />
				</a>
				<a
					href="https://www.youtube.com/@hellocallai"
					class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600 p-1 transition hover:bg-primary-600 hover:text-white"
				>
					<Icon path={mdiYoutube} className="h-16 w-16  text-black  hover:text-white" />
				</a>
			</div>
		</div>

		<div class="space-y-4 lg:ps-16">
			<p class="text-base font-semibold text-base-900">Company</p>
			<ul class="space-y-2">
				<li>
					<a href="/" class="text-sm text-base-800 transition hover:text-primary-500">Home</a>
				</li>
				<li><a href="/about" class="text-sm text-base-800 hover:text-primary-500">About Us</a></li>
				<li>
					<a href="/contact" class="text-sm text-base-800 hover:text-primary-500">Contact Us</a>
				</li>
				<li>
					<a href="/service" class="text-sm text-base-800 hover:text-primary-500">Services</a>
				</li>

				<li>
					<a href="/service#faq" class="text-sm text-base-800 hover:text-primary-500">FAQs</a>
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<p class="text-base font-semibold text-base-900">We'd love to hear from you!</p>
			<p class="text-base-700">You can reach out to us at:</p>
			<div class="space-y-3">
				<a
					href="tel:+917995662228"
					class="flex items-center justify-center gap-2 text-sm text-base-800 transition hover:text-primary-500 lg:items-start lg:justify-start"
				>
					<Icon path={mdiPhone} className="h-4 w-4" />

					+91 7411909057
				</a>
				<a
					href="mailto:support@amazeip.com"
					class="flex items-center justify-center gap-2 text-sm text-base-800 transition hover:text-primary-500 lg:items-start lg:justify-start"
				>
					<Icon path={mdiEmailOutline} className="h-4 w-4" />

					support@patentryhub.com
				</a>
				<a
					href="/contact"
					class="inline-block rounded-full bg-primary-500 px-6 py-2 font-bold text-white transition hover:bg-primary-600"
				>
					Contact Us
				</a>
			</div>
		</div>

		<div class="space-y-4">
			<h6 class="text-base font-semibold text-base-900">News Letter</h6>
			<div>
				<Newsletter />
			</div>
		</div>
	</div>
</div>
