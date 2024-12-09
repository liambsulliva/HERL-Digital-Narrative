<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";

  export let visible = true;

  let promptPosition = { right: "10vw", top: "20%" };

  function updatePosition() {
    const bookElement = document.querySelector(".book");

    if (bookElement) {
      const bookRect = bookElement.getBoundingClientRect();
      promptPosition = {
        right: `${window.innerWidth - (bookRect.right + 285)}px`, // 40px offset from book
        top: `${bookRect.top - 60}px`, // 20px from top of book
      };
    }
  }

  onMount(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    setTimeout(updatePosition, 100);
  });

  onDestroy(() => {
    window.removeEventListener("resize", updatePosition);
  });
</script>

{#if visible}
  <div
    class="fixed z-30 bg-white/90 px-4 py-2 rounded-lg shadow-md"
    style="right: {promptPosition.right}; top: {promptPosition.top};"
    transition:fade={{ duration: 200 }}
  >
    <p class="text-sm font-medium text-[#06060b]">
      <span class="text-[#013594] text-lg font-bold">⟲</span> SKIP AHEAD!
    </p>
    <p class="text-xs text-[#6B7280]">Click a bookmark to skip to that year</p>
  </div>
{/if}

<style>
  div {
    font-family: "Rubik", Helvetica, sans-serif, system-ui;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    backdrop-filter: blur(4px);
    animation: bounce 2s infinite;
    transform-origin: center;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }
</style>
