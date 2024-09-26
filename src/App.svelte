<script lang="ts">
  import ModeSwitcher from "./lib/ModeSwitcher.svelte";
  import FlipBtn from "./lib/FlipBtn.svelte";
  import PittBanner from "./lib/PittBanner.svelte";
  import Book from "./lib/Book.svelte";
</script>

<header class="flex p-2 w-screen items-center justify-between">
  <PittBanner />
  <div class="flex items-center gap-2">
    <FlipBtn />
    <ModeSwitcher />
  </div>
</header>
<main
  class=" flex flex-col items-center justify-center font-rubik p-2 mx-auto text-center"
>
  <h1 class="uppercase text-4xl leading-normal font-semibold">
    Human Engineering Research Labs
  </h1>
  <p class="mt-1 mb-4 text-sm text-gray-600 dark:text-gray-300">
    A journey through 30 years of innovation.
  </p>
  <Book />
</main>

<style lang="postcss">
  .font-rubik {
    font-family: "Rubik", Helvetica, sans-serif, system-ui;
  }
</style>
