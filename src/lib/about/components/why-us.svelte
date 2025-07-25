<script lang="ts">
	import WhyUsCard from "$lib/common/components/why-us-card.svelte";

</script>

<div class="relative isolate bg-white mx-4 my-6 min-h-screen sm:mx-8 sm:my-8 md:mx-16 md:my-12 lg:mx-32">
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
	<div class=" text-center">
		<h4 class="text-lg font-medium uppercase tracking-widest text-primary-500">Why Choose Us</h4>
		<h1 class="my-4 text-2xl font-black leading-tight text-base-800 md:my-6 md:text-4xl">
			Here are 5 reasons to Choose Us
		</h1>
	</div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-12">
        <div>
            <WhyUsCard title="Experienced Team" description="With 10+ years in patent illustration, our team brings deep technical knowledge and proven expertise across industries."/>
        </div>
        <div>
            <WhyUsCard title="Fast & Flexible Delivery" description="Standard turnaround is 3–5 days — and we’re ready for urgent requests too, with no extra charge for RUSH projects."/>
        </div>
         <div>
            <WhyUsCard title="Quality First Approach" description="Every drawing goes through a multi-step quality review to ensure clarity, accuracy, and compliance with patent office standards."/>
        </div>
        <div>
            <WhyUsCard title="Fair & Transparent Pricing" description="Our pricing is reasonable and straightforward — no hidden fees, just quality work at the right value."/>
        </div>
        <div>
            <WhyUsCard title="Clear, Personal Communication" description="You’ll always talk to real people — no bots, no delays. Our team is responsive, helpful, and easy to reach when you need us."/>
        </div>
       
    </div>
    <div class=" text-center my-12">
		<h4 class="text-lg font-medium tracking-widest text-base-700">Give us a try <span class="text-primary-500">Let's get started</span></h4>
		
	</div>
</div>
