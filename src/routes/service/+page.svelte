<script lang="ts">
	import AppNavbar from "$lib/core/components/app-navbar.svelte";
	import CopyRights from "$lib/core/components/copy-rights.svelte";
	import Footer from "$lib/core/components/footer.svelte";


</script>

<div class="min-h-full">
	<AppNavbar hasLogo hasTitle/>

    <div>
		<Footer />
	</div>
	<div>
		<CopyRights />
	</div>
</div>