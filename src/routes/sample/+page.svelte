<script lang="ts">
	import AppNavbar from "$lib/core/components/app-navbar.svelte";
	import CopyRights from "$lib/core/components/copy-rights.svelte";
	import Footer from "$lib/core/components/footer.svelte";
	import SampleCard from "$lib/sample/components/sample-card.svelte";

</script>

<div class="min-h-full">
	<AppNavbar hasLogo hasTitle />
    <div>
        <SampleCard />
    </div>
    <div>
		<Footer />
	</div>
	<div>
		<CopyRights />
	</div>
</div>
