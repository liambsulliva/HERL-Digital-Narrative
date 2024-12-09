<script lang="ts">
  import { fade } from "svelte/transition";
  import FlipBtn from "./lib/FlipBtn.svelte";
  import PittBanner from "./lib/PittBanner.svelte";
  import VABanner from "./lib/VABanner.svelte";
  import Book from "./lib/Book.svelte";
  import Content from "./lib/Content.svelte";
  import Modal from "./lib/Modal.svelte";
  import SkipAheadPrompt from "./lib/SkipAheadPrompt.svelte";
  import PageNumbers from "./lib/PageNumbers.svelte";
  let bookOpen = false;
  let isFlipped = false;
  let page = 0;
  let showSkipPrompt = true;

  // Watch bookOpen and hide prompt whenever book is opened
  $: if (bookOpen && showSkipPrompt) {
    showSkipPrompt = false;
  }

  function handleBookOpen() {
    if (!bookOpen) {
      showSkipPrompt = false;
    }
  }
</script>

<Modal />

<SkipAheadPrompt visible={showSkipPrompt && !bookOpen} />

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
      class="uppercase text-4xl text-[#06060b] leading-normal font-semibold cursor-default"
    >
      Human Engineering Research Labs
    </h1>
    <p
      transition:fade={{ duration: 200 }}
      class="mt-1 mb-4 text-sm text-[#6B7280] cursor-default"
    >
      A journey through 30 years of innovation.
    </p>
  {/if}

  <Book
    bind:isOpen={bookOpen}
    bind:page
    bind:isFlipped
    on:flip
    on:click={handleBookOpen}
  />

  {#if bookOpen}
    <Content bind:page />
  {/if}
</main>
<PageNumbers bind:page bind:bookOpen />

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
