<script lang="ts">
  import { fade } from "svelte/transition";
  export let bookOpen;
</script>

{#if !bookOpen}
  <p
    transition:fade={{ duration: 200 }}
    class="absolute bottom-4 left-4 text-sm text-gray-500"
  >
    Made with ❤️ by <a
      href="https://liambsullivan.com"
      class="text-[#6B7280] hover:underline"
      target="_blank"
      rel="noreferrer noopener"
    >
      Liam Sullivan
    </a>
  </p>
{/if}
