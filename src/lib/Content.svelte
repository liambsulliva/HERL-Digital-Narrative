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
  import Page15 from "../pages/Page15.svelte";
  import Page16 from "../pages/Page16.svelte";
  import Page17 from "../pages/Page17.svelte";
  import Page18 from "../pages/Page19.svelte";
  import Page19 from "../pages/Page20.svelte";
  import Page20 from "../pages/Page21.svelte";
  import Page21 from "../pages/Page22.svelte";
  import Page22 from "../pages/Page23.svelte";
  import Page23 from "../pages/Page24.svelte";
  import Page24 from "../pages/Page25.svelte";
  import Page25 from "../pages/Page26.svelte";
  import Page26 from "../pages/Page27.svelte";
  import Page27 from "../pages/Page28.svelte";
  import Page28 from "../pages/Page29.svelte";
  import Page29 from "../pages/Page30.svelte";

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
  };
</script>

<!-- TODO: Refactor layout to take up more space horizontally, we want to reduce scrolling on desktops -->
<div class="content-container">
  {#if page > 0 && page <= 29}
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
</style>
