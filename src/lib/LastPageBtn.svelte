<script lang="ts">
  import { onMount } from "svelte";
  export let page = 0;

  function handlePageTurn() {
    if (page === 1) {
      // Dispatch custom event to close book
      const event = new CustomEvent("closeBook", {
        bubbles: true,
      });
      document.dispatchEvent(event);
    } else {
      page--;
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") handlePageTurn();
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });
</script>

<button
  on:click|stopPropagation={handlePageTurn}
  aria-label="Last Page"
  class="absolute right-0"
  style="z-index: 1000"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="5em"
    height="5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="#1F2937"
      d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
    />
  </svg>
</button>
