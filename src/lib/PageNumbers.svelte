<script lang="ts">
  import { fade } from "svelte/transition";

  export let page: number;
  export let bookOpen: boolean;
</script>

<div class="page-numbers">
  {#if bookOpen}
    <span transition:fade={{ duration: 200 }} class="page-number cursor-default"
      >{page}</span
    >
  {/if}
</div>

<style>
  .page-numbers {
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    z-index: 1000;
  }

  .page-number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #013594;
  }
</style>
