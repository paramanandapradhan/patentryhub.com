<!-- <script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	const testimonials = [
		{
			img: 'avatar.svg',
			name: 'Amit Sharma',
			position: 'Farmer',
			text: '"The Tulu pump we purchased is a game-changer for our irrigation needs. Reliable, efficient, and built to last. Highly recommend this company!"'
		},
		{
			img: 'avatar.svg',
			name: 'Priya Patel',
			position: 'Agricultural Consultant',
			text: '"Their submersible pump exceeded our expectations. Seamless installation and outstanding performance. Truly a professional team!"'
		},
		{
			img: 'avatar.svg',
			name: 'Rohan Gupta',
			position: 'Water Management Engineer',
			text: '"The jet pump design is flawless, and the after-sales support is exceptional. A trusted partner for all our water solutions!"'
		},
		{
			img: 'avatar.svg',
			name: 'Sneha Reddy',
			position: 'Farm Owner',
			text: '"Top-quality motors and excellent service. The Tulu pump transformed our water supply system. Highly recommend their products!"'
		}
	];

	onMount(() => {
		// Animation for h1 (Customer Testimonials) - down to up
		gsap.from('.testimonial-heading', {
			opacity: 0,
			y: 50,
			duration: 1.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.testimonial-heading',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		// Animation for testimonial cards - left to right one by one
		gsap.from('.testimonial-card', {
			opacity: 0,
			x: -100,
			duration: 1.2,
			ease: 'power3.out',
			stagger: 0.3,
			scrollTrigger: {
				trigger: '.testimonial-grid',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<div class="mx-4 my-12 lg:my-16  md:mx-16">
	<h1 class="testimonial-heading mb-10 text-3xl font-bold text-base-800 sm:text-4xl">Customer Testimonials</h1>

	<div class="testimonial-grid grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each testimonials as testimonial, index}
			<div
				class="testimonial-card relative box-border flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-lg"
			>
				<div class="flex items-center gap-4 p-6">
					<img
						src={testimonial.img}
						class="h-16 w-16 rounded-full object-cover ring-2 ring-blue-200"
						alt="{testimonial.name}'s Photo"
					/>
					<div>
						<h6 class="text-lg font-semibold text-gray-800">{testimonial.name}</h6>
						<p class="text-sm text-gray-500">{testimonial.position}</p>
					</div>
				</div>
				<div class="flex-1 bg-gray-50 p-6">
					<p class="italic text-gray-600">{testimonial.text}</p>
				</div>
				<div class="absolute right-4 top-4 h-3 w-3 rounded-full bg-primary-500"></div>
			</div>
		{/each}
	</div>
</div>

<style>
	.testimonial-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 2rem;
	}

	@media (min-width: 640px) {
		.testimonial-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.testimonial-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	.testimonial-card {
		min-width: 0;
	}
</style> -->




<div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
  <div aria-hidden="true" class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
    <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
  </div>
  <div aria-hidden="true" class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
    <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base/7 font-semibold text-primary-600">Testimonials</h2>
      <p class="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">We have worked with thousands of amazing people</p>
    </div>
    <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
      <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
        <blockquote class="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
          <p>“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”</p>
        </blockquote>
        <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
          <img src="avatar.svg" alt="" class="size-10 flex-none rounded-full bg-gray-50" />
          <div class="flex-auto">
            <div class="font-semibold text-gray-900">Brenna Goyette</div>
            <div class="text-gray-600">@brennagoyette</div>
          </div>
          <!-- <img src="https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg" alt="" class="h-10 w-auto flex-none" /> -->
        </figcaption>
      </figure>
      <div class="space-y-8 xl:contents xl:space-y-0">
        <div class="space-y-8 xl:row-span-2">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
              <div>
                <div class="font-semibold text-gray-900">Leslie Alexander</div>
                <div class="text-gray-600">@lesliealexander</div>
              </div>
            </figcaption>
          </figure>
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
              <div>
                <div class="font-semibold text-gray-900">Michael Foster</div>
                <div class="text-gray-600">@michaelfoster</div>
              </div>
            </figcaption>
          </figure>
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.”</p>
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
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
              <div>
                <div class="font-semibold text-gray-900">Lindsay Walton</div>
                <div class="text-gray-600">@lindsaywalton</div>
              </div>
            </figcaption>
          </figure>
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.”</p>
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
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
              <div>
                <div class="font-semibold text-gray-900">Tom Cook</div>
                <div class="text-gray-600">@tomcook</div>
              </div>
            </figcaption>
          </figure>
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.”</p>
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
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
              <div>
                <div class="font-semibold text-gray-900">Leonard Krasner</div>
                <div class="text-gray-600">@leonardkrasner</div>
              </div>
            </figcaption>
          </figure>
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque error ut et.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img src="avatar.svg" alt="" class="size-10 rounded-full bg-gray-50" />
              <div>
                <div class="font-semibold text-gray-900">Floyd Miles</div>
                <div class="text-gray-600">@floydmiles</div>
              </div>
            </figcaption>
          </figure>
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.”</p>
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
