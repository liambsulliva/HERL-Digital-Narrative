<script lang="ts">
  import { fade } from "svelte/transition";
  import FlipBtn from "./lib/FlipBtn.svelte";
  import PittBanner from "./lib/PittBanner.svelte";
  import VABanner from "./lib/VABanner.svelte";
  import Book from "./lib/Book.svelte";
  import Content from "./lib/Content.svelte";
  import Modal from "./lib/Modal.svelte";

  let bookOpen = false;
  let isFlipped = false;
  let page = 0;
</script>

<Modal />

<header class="flex p-3 w-screen items-center justify-between">
  <div class="flex items-center gap-1">
    {#if !bookOpen}
      <PittBanner />
      <VABanner />
    {/if}
  </div>
  <div class="flex items-center gap-3 px-3">
    {#if !bookOpen}
      <FlipBtn bind:isFlipped />
    {/if}
  </div>
</header>
<main
  class="flex flex-col items-center justify-center font-rubik p-2 mx-auto text-center relative"
>
  {#if !bookOpen}
    <h1
      transition:fade={{ duration: 200 }}
      class="uppercase text-4xl leading-normal font-semibold"
    >
      Human Engineering Research Labs
    </h1>
    <p
      transition:fade={{ duration: 200 }}
      class="mt-1 mb-4 text-sm text-gray-600 dark:text-gray-300"
    >
      A journey through 30 years of innovation.
    </p>
  {/if}

  <Book bind:isOpen={bookOpen} bind:page bind:isFlipped on:flip />

  {#if bookOpen}
    <Content bind:page />
  {/if}
</main>

<style lang="postcss">
  .font-rubik {
    font-family: "Rubik", Helvetica, sans-serif, system-ui;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    position: relative;
    z-index: 20;
  }
</style>
