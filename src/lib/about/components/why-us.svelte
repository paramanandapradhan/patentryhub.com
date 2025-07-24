<script lang="ts">
	import WhyUsCard from "$lib/common/components/why-us-card.svelte";

</script>

<div class="mx-4 my-6 min-h-screen sm:mx-8 sm:my-8 md:mx-16 md:my-12 lg:mx-32">
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
