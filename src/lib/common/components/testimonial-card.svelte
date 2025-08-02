<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		gsap.from('.testimonial-heading', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.testimonial-heading',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
		gsap.from('.testimonial-paragraph', {
			opacity: 0,
			y: 80,
			duration: 1.5,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.testimonial-paragraph',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
		// Select all testimonial cards
		const cards = document.querySelectorAll('.testimonial-card');

		// Animate each card with a slight stagger
		gsap.fromTo(
			cards,
			{
				opacity: 0,
				y: 100 // Start 100px below
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				stagger: 0.2, // 0.2s delay between each card
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.testimonials-container',
					start: 'top 80%', // Start animation when container is 80% in viewport
					toggleActions: 'play none none none'
				}
			}
		);

		// Cleanup ScrollTrigger on component destroy
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>

<div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
		></div>
	</div>
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
		></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="testimonial-heading text-base/7 font-semibold text-primary-600">Testimonials</h2>
			<p
				class="testimonial-paragraph mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
			>
				We have worked with thousands of amazing people
			</p>
		</div>
		<div
			class="testimonials-container mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
		>
			<figure
				class="testimonial-card rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
			>
				<blockquote
					class="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8"
				>
					<p class="text-center">"Incredible clarity and precision."</p>
					<p>
						"My ideas were turned into clear, compliant drawings that sailed through the patent
						office review. Great communication and highly professional service."
					</p>
				</blockquote>
				<figcaption
					class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap"
				>
					<img src="avatar.svg" alt="" class="size-10 flex-none rounded-full bg-gray-50" />
					<div class="flex-auto">
						<div class="font-semibold text-gray-900">Brenna Goyette</div>
						<div class="text-gray-600">@brennagoyette</div>
					</div>
				</figcaption>
			</figure>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-span-2">
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"They understood my invention perfectly!"</p>
							<p>
								"The team delivered accurate patent drawings faster than I expected. Their attention
								to detail and understanding of technical requirements was impressive."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Leslie Alexander</div>
								<div class="text-gray-600">@lesliealexander</div>
							</div>
						</figcaption>
					</figure>
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Highly recommend their services!"</p>
							<p>
								"They delivered exactly what I needed — high-quality drawings, on time, and with
								excellent support. I’ll definitely come back for future projects."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Michael Foster</div>
								<div class="text-gray-600">@michaelfoster</div>
							</div>
						</figcaption>
					</figure>
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Professional from start to finish."</p>
							<p>
								"They handled my utility patent drawings with great precision. Excellent team and
								fast turnaround!"
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Dries Vincent</div>
								<div class="text-gray-600">@driesvincent</div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div class="space-y-8 xl:row-start-1">
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Smooth, efficient, and reliable."</p>
							<p>
								"From concept to final output, the entire process was streamlined. I felt supported
								at every step."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Lindsay Walton</div>
								<div class="text-gray-600">@lindsaywalton</div>
							</div>
						</figcaption>
					</figure>
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Expert-level technical drawing!"</p>
							<p>
								"They translated my mechanical idea into a drawing that was not only accurate but
								perfectly aligned with patent office requirements."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Courtney Henry</div>
								<div class="text-gray-600">@courtneyhenry</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-start-1">
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Outstanding service and support."</p>
							<p>
								"The level of care and professionalism was top-notch. They took the time to
								understand the invention and delivered perfect results."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Tom Cook</div>
								<div class="text-gray-600">@tomcook</div>
							</div>
						</figcaption>
					</figure>
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Exactly what I was hoping for!"</p>
							<p>
								"Drawings were delivered quickly and matched the guidelines exactly. The team was
								communicative, skilled, and helpful."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Whitney Francis</div>
								<div class="text-gray-600">@whitneyfrancis</div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div class="space-y-8 xl:row-span-2">
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Fast, responsive, and professional."</p>
							<p>
								"Their team turned my rough sketches into clean, compliant illustrations with zero
								hassle."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Leonard Krasner</div>
								<div class="text-gray-600">@leonardkrasner</div>
							</div>
						</figcaption>
					</figure>
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"They made the complex feel simple."</p>
							<p>
								"I’m not technical, but they explained everything clearly and delivered patent
								drawings I’m confident in."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Floyd Miles</div>
								<div class="text-gray-600">@floydmiles</div>
							</div>
						</figcaption>
					</figure>
					<figure
						class="testimonial-card rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
					>
						<blockquote class="text-gray-900">
							<p class="text-center">"Perfect experience!"</p>
							<p>
								"They handled everything with care and precision. The drawings were accepted without
								a single revision."
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
							<div>
								<div class="font-semibold text-gray-900">Emily Selman</div>
								<div class="text-gray-600">@emilyselman</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>
</div>
