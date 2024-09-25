
<script lang="ts">
    import ModeSwitcher from './lib/ModeSwitcher.svelte';
    import PittBanner from './lib/PittBanner.svelte';
	import Book from './lib/Book.svelte';
</script>

<header class="flex p-2 w-screen items-center justify-between">
	<PittBanner />
	<ModeSwitcher />
</header>
<main class="flex flex-col items-center justify-center font-rubik p-2 mx-auto text-center max-w-xl">
	<h1 class="uppercase text-5xl leading-normal font-semibold">HERL Scrapbook</h1>
	<p class="mt-1 text-sm">
		A journey through 30 years of innovation.
	</p>
	<Book />
</main>

<style lang="postcss">
	.font-rubik {
		font-family: 'Rubik', Helvetica, sans-serif, system-ui;
	}
</style>