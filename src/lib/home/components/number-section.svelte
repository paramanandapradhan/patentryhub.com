<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		gsap.from('.record-heading', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.record-heading',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
		gsap.from('.record-p1', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.record-p1',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
		gsap.from('.record-p2', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.record-p2',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
		gsap.from('.record-content', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.record-content',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<div class="relative isolate overflow-hidden py-24 sm:py-32">
	<img src="/imgs/home-img2.webp" alt="" class="absolute inset-0 -z-10 size-full object-cover" />
	<div class="absolute left-0 top-0 h-full w-full bg-black/60"></div>
	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div
			aria-hidden="true"
			class="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
		>
			<div
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				class="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
			></div>
		</div>
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
			<h2 class="record-heading text-base/8 font-semibold text-primary-400">Our track record</h2>
			<p
				class="record-p1 mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl"
			>
				Trusted by thousands of creators&nbsp;worldwide
			</p>
			<p class="record-p2 mt-6 text-lg/8 text-gray-300">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
				suscipit eaque, iste dolor cupiditate blanditiis.
			</p>
		</div>
		<dl
			class="record-content mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Creators on the platform</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">8,000+</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Flat platform fee</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">3%</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Uptime guarantee</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">99.9%</dd>
			</div>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm/6">Paid out to creators</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">$70M</dd>
			</div>
		</dl>
	</div>
</div>
