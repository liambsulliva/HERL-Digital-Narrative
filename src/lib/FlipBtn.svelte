<script lang="ts">
  export let isFlipped = false;
</script>

<button
  on:click={() => (isFlipped = !isFlipped)}
  class="w-8 h-8 flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
  aria-label={isFlipped ? "Show front cover" : "Show back cover"}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    ><g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      ><path
        d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747"
      /><path d="M20 4v5h-5" /></g
    ></svg
  >
</button>
