<script lang="ts">
  import type { Component } from "svelte";
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

  export let page = 0;

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
  };
</script>

<div class="content-container">
  {#if page > 0 && page <= 14}
    <svelte:component this={pageComponents[page]} />
  {:else}
    <p>No content available for this page.</p>
  {/if}
</div>

<style>
  .content-container {
    position: fixed;
    left: 50%;
    top: 2rem;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1600px;
    z-index: 30;
    max-height: 60vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }

  @media (max-height: 900px) {
    .content-wrapper {
      padding-bottom: 15rem;
    }
  }

  @media (max-height: 700px) {
    .content-wrapper {
      padding-bottom: 10rem;
    }
  }
</style>
