<script lang="ts">
  import type { Component } from "svelte";
  import { fade } from "svelte/transition";
  import { imageLoader } from "./stores/imageStore";

  // TODO: Refactor this to use procedural imports via callback
  import Page1 from "../pages/Page1.svelte";
  import Page2 from "../pages/Page2.svelte";
  import Page3 from "../pages/Page3.svelte";
  import Page4 from "../pages/Page4.svelte";
  import Page5 from "../pages/Page5.svelte";
  import Page6 from "../pages/Page6.svelte";
  import Page7 from "../pages/Page7.svelte";
  import Page8 from "../pages/Page8.svelte";
  import Page9 from "../pages/Page9.svelte";
  import Page10 from "../pages/Page10.svelte";
  import Page11 from "../pages/Page11.svelte";
  import Page12 from "../pages/Page12.svelte";
  import Page13 from "../pages/Page13.svelte";
  import Page14 from "../pages/Page14.svelte";
  import Page15 from "../pages/Page15.svelte";
  import Page16 from "../pages/Page16.svelte";
  import Page17 from "../pages/Page17.svelte";
  import Page18 from "../pages/Page18.svelte";
  import Page19 from "../pages/Page19.svelte";
  import Page20 from "../pages/Page20.svelte";
  import Page21 from "../pages/Page21.svelte";
  import Page22 from "../pages/Page22.svelte";
  import Page23 from "../pages/Page23.svelte";
  import Page24 from "../pages/Page24.svelte";
  import Page25 from "../pages/Page25.svelte";
  import Page26 from "../pages/Page26.svelte";
  import Page27 from "../pages/Page27.svelte";
  import Page28 from "../pages/Page28.svelte";
  import Page29 from "../pages/Page29.svelte";
  import Page30 from "../pages/Page30.svelte";
  import Page31 from "../pages/Page31.svelte";
  import Page32 from "../pages/Page32.svelte";
  import Page33 from "../pages/Page33.svelte";
  import Page34 from "../pages/Page34.svelte";

  export let page = 0;
  let displayedPage = 0;
  let debounceTimer: number;
  let visible = true;

  // Function to extract image sources from Content.svelte
  async function getComponentImages(component: any): Promise<string[]> {
    const match = component?.render?.toString().match(/src="([^"]+)"/g);
    return match
      ? match
          .map((src: string) => {
            const matches = src.match(/src="([^"]+)"/);
            return matches ? matches[1] : "";
          })
          .filter(Boolean)
      : [];
  }

  // Preload images for a given page
  async function preloadPageImages(pageNum: number) {
    if (pageComponents[pageNum]) {
      const images = await getComponentImages(pageComponents[pageNum]);
      await Promise.all(images.map((src) => imageLoader.preloadImage(src)));
    }
  }

  // Watch page changes and handle transitions
  $: {
    clearTimeout(debounceTimer);
    visible = false;

    // Target images ranging from 5 pages before to 5 pages after current page
    const pagesToPreload = [];
    for (let i = Math.max(1, page - 5); i <= Math.min(30, page + 5); i++) {
      pagesToPreload.push(i);
    }

    // Preload images for given range thru background promises
    Promise.all(
      pagesToPreload.map((pageNum) => preloadPageImages(pageNum)),
    ).catch(console.error);

    debounceTimer = setTimeout(() => {
      displayedPage = page;
      visible = true;
    }, 300);
  }

  const pageComponents: Record<number, Component> = {
    1: Page1,
    2: Page2,
    3: Page3,
    4: Page4,
    5: Page5,
    6: Page6,
    7: Page7,
    8: Page8,
    9: Page9,
    10: Page10,
    11: Page11,
    12: Page12,
    13: Page13,
    14: Page14,
    15: Page15,
    16: Page16,
    17: Page17,
    18: Page18,
    19: Page19,
    20: Page20,
    21: Page21,
    22: Page22,
    23: Page23,
    24: Page24,
    25: Page25,
    26: Page26,
    27: Page27,
    28: Page28,
    29: Page29,
    30: Page30,
    31: Page31,
    32: Page32,
    33: Page33,
    34: Page34,
  };

  // Add screen width store
  let screenWidth: number;

  // Add window resize listener
  $: if (typeof window !== "undefined") {
    screenWidth = window.innerWidth;
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

<!-- TODO: Refactor layout to take up more space horizontally, we want to reduce scrolling on desktops -->
<div class="content-container">
  {#if screenWidth < 900}
    <div class="device-prompt" transition:fade={{ duration: 200 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
      >
        <path
          fill="#06060B"
          d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
        />
      </svg>
      <div class="prompt-text">
        <p class="primary-text">Please switch to a desktop device</p>
        <p class="secondary-text">
          For an optimal viewing experience, please use a device with a screen
          resolution of at least 1280 x 800.
        </p>
      </div>
    </div>
  {:else if visible && displayedPage > 0 && displayedPage <= 34}
    <div transition:fade={{ duration: 200 }}>
      <svelte:component this={pageComponents[displayedPage]} />
    </div>
  {:else if visible}
    <div transition:fade={{ duration: 200 }}>
      <p>No content available for this page.</p>
    </div>
  {/if}
</div>

<style>
  .content-container {
    position: fixed;
    left: 50%;
    top: 2rem;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1000px;
    height: 400px;
    z-index: 30;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }

  .device-prompt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #383844;
    text-align: center;
    gap: 1rem;
    padding: 2rem;
    opacity: 1;
  }

  .prompt-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .primary-text {
    color: #06060b;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .secondary-text {
    font-size: 0.875rem;
    color: #6b7280;
  }

  svg {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
