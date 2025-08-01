<script lang="ts">
	import { goto } from '$app/navigation';
	import type { NavbarProps } from '@cloudparker/moldex.js';
	import { Button, goBack, goHome, Navbar, screenSize } from '@cloudparker/moldex.js';
	import { type Snippet } from 'svelte';
	import { mdiClose, mdiMenu, mdiPhone } from '../services/app-icons-service';
	import { page } from '$app/state';
	type Props = {};

	let {
		hasBack,
		disabledLogo,
		logoImgSrc = '/icons/web/icon-192.png',
		logoImgClassName = '!h-8 !w-auto !object-contain !filter ',
		className = ' bg-gradient-to-r from-base-100 to-base-50 !h-20 border-b border-base-400',
		hasLogo,
		hasTitle,
		titleClassName = '!text-primary-600 !font-black',
		title = 'PatentryHub'
	}: Props & NavbarProps = $props();

	let pageMenus = [
		{ id: 'home', title: 'Home', url: '/', isExternal: false },
		{ id: 'about', title: 'About', url: '/about', isExternal: false },
		{ id: 'service', title: 'Services', url: '/service', isExternal: false },
		{ id: 'sample', title: 'Samples', url: '/sample', isExternal: false },
		{ id: 'contact', title: 'Contact', url: '/contact', isExternal: false }
	];

	let activeMenu = $state('home');
	let isMobileMenuOpen = $state(false);

	$effect(() => {
		let currentPath = page.url.pathname;
		let active = pageMenus.find((menu) => menu.url === currentPath);
		if (active) {
			activeMenu = active.id;
		}
	});

	async function handlePageNavigation(ev: any, menu: any) {
		activeMenu = menu.id;
		if (menu?.url) {
			await goto(menu.url);
		}
		isMobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
</script>

<!-- <svelte:window on:click={handleOutsideClick} /> -->

{#snippet centerSnippet()}
	<div class="hidden h-full items-center justify-center gap-4 lg:flex">
		{#each pageMenus as menu (menu.id)}
			<a
				href={menu.url}
				target={menu.isExternal ? '_blank' : undefined}
				rel={menu.isExternal ? 'noopener noreferrer' : undefined}
				class="{activeMenu === menu.id
					? 'font-bold text-primary-600'
					: 'text-base-800'} relative h-full px-4 py-2 pt-7 backdrop-blur-md transition-colors duration-300
			after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-[80%] after:-translate-x-1/2
			after:bg-primary-600 after:transition-transform after:duration-300 after:content-[''] hover:text-primary-600
			{activeMenu === menu.id
					? 'font-bold after:scale-x-100 after:bg-primary-500'
					: 'font-bold after:scale-x-0'} 
			uppercase hover:after:scale-x-100"
				aria-current={activeMenu === menu.id ? 'page' : undefined}
			>
				{menu.title}
			</a>
		{/each}
	</div>
{/snippet}

{#snippet rightSnippet()}
	<div class="flex h-full items-center justify-center gap-4">
		{#if screenSize.isSm || screenSize.isMd || screenSize.isXs}
			<Button
				iconPath={mdiMenu}
				onClick={toggleMobileMenu}
				className="!p-2 !text-black "
				iconClassName="!h-6 !w-6"
			/>
		{:else}
			<div>
				<Button
					appearance="primary"
					iconPath={mdiPhone}
					label="+917995662228"
					className="rounded-full px-8 font-bold"
				/>
			</div>
		{/if}
	</div>
{/snippet}

<!-- Mobile Dropdown Menu -->
{#if isMobileMenuOpen}
	<div class="animate-fade-in fixed inset-0 z-50 backdrop-blur-sm">
		<div
			class="mobile-menu animate-slide-in absolute right-0 top-0 flex h-full w-3/4 max-w-[300px] flex-col gap-4 bg-white p-4 shadow-[-4px_0_15px_rgba(0,0,0,0.3)]"
		>
			<div class="mb-4 flex items-center justify-between">
				<div class="flex items-center gap-2">
					{#if hasLogo}
						<img src={logoImgSrc} alt="Logo" class={logoImgClassName} />
					{/if}
					{#if hasTitle}
						<span class="text-lg font-bold text-primary-600 {titleClassName}">{title}</span>
					{/if}
				</div>
				<Button
					iconPath={mdiClose}
					onClick={closeMobileMenu}
					className="!p-2 !text-black "
					iconClassName="!h-6 !w-6"
				/>
			</div>
			{#each pageMenus as menu (menu.id)}
				<a
					href={menu.url}
					class="{activeMenu === menu.id ? 'font-bold text-primary-600' : 'text-base-900'} ..."
					aria-current={activeMenu === menu.id ? 'page' : undefined}
				>
					{menu.title}
				</a>
			{/each}

			<div class="mt-4 flex w-full flex-col gap-2 border-t border-base-700 pt-4">
				<Button
					appearance="primary"
					iconPath={mdiPhone}
					iconClassName="!h-6 !w-6"
					label="+917995662228"
					className="rounded-full px-8 font-bold"
				/>
			</div>
		</div>
	</div>
{/if}

<!-- {#if isMobileMenuOpen}
  <div class="fixed inset-0 z-[100] backdrop-blur-sm">
    <div
      class="mobile-menu bg-base-900 absolute top-0 right-0 flex h-full w-3/4 max-w-[300px] flex-col gap-2 p-4 shadow-[-4px_0_15px_rgba(0,0,0,0.3)]"
    >
      <div class="mb-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          {#if hasLogo}
            <img src={logoImgSrc} alt="Logo" class="h-8 w-8" />
          {/if}
          {#if hasTitle}
            <span class="text-lg font-bold text-white {titleClassName}">{title}</span>
          {/if}
        </div>
        <Button
          iconPath={mdiClose}
          onClick={closeMobileMenu}
          className="p-2 text-white hover:text-primary-400 transition-colors"
        />
      </div>
      {#each pageMenus as menu (menu.id)}
        <a
          href={menu.url}
          class="{activeMenu === menu.id ? 'text-primary-600 font-bold' : 'text-base-100'} block p-2 hover:text-primary-400 transition-colors"
          aria-current={activeMenu === menu.id ? 'page' : undefined}
        >
          {menu.title}
        </a>
      {/each}
    </div>
  </div>
{/if} -->

<Navbar
	{hasBack}
	{className}
	{hasLogo}
	{logoImgSrc}
	{logoImgClassName}
	{hasTitle}
	{title}
	{titleClassName}
	centerSnippet={centerSnippet as Snippet}
	rightSnippet={rightSnippet as Snippet}
	onBack={goBack}
	onLogo={goHome}
	{disabledLogo}
/>

<!-- rightSnippet={rightSnippet as Snippet} -->
<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-in {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.2s ease-in;
	}

	.animate-slide-in {
		animation: slide-in 0.3s ease-out;
	}

	/* .mobile-menu {
		animation: slide-in 0.3s ease-out;
	} */
</style>
