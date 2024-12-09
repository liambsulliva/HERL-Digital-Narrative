<script lang="ts">
  export let targetPage: number;
  export let page: number;
  export let isOpen = false;
  export let isFlipped = false;

  const bookmarkTitles: Record<number, string> = {
    3: "1995",
    5: "1996",
    9: "2001",
    12: "2004",
    22: "2011",
    33: "2023",
  };

  const bookmarkPages = Object.keys(bookmarkTitles);
  const totalBookmarks = bookmarkPages.length;
  const index = bookmarkPages.indexOf(targetPage.toString());
  const top = `${(index * 45) / totalBookmarks}vmin`;
  const label = bookmarkTitles[targetPage] || `Page ${targetPage}`;

  function handleClick() {
    if (!isOpen) {
      const event = new CustomEvent("openToPage", {
        detail: { targetPage },
        bubbles: true,
      });
      document.dispatchEvent(event);
    } else {
      page = targetPage;
    }
  }
</script>

<button
  class="bookmark"
  class:active={page === targetPage}
  class:flipped={isFlipped}
  class:opened={isOpen}
  on:click|stopPropagation={handleClick}
  style="top: {top}"
  aria-label="Jump to {label}"
>
  <div class="bookmark-tab">
    <span class="bookmark-label">{label}</span>
  </div>
</button>

<style>
  .bookmark {
    position: absolute;
    right: -2.5rem;
    width: 2.5rem;
    height: 4.5rem;
    background: #252525;
    border: none;
    cursor: pointer;
    transform-origin: left center;
    border-radius: 0 0.25rem 0.25rem 0;
    z-index: 1000;
  }

  .bookmark.opened {
    width: 3.5rem;
    height: 6rem;
    right: -3.5rem;
    font-size: 1.5rem;
    transition:
      width 0.35s ease-in-out,
      height 0.35s ease-in-out,
      right 0.35s ease-in-out,
      font-size 0.35s ease-in-out;
  }

  .bookmark.flipped {
    right: 3rem;
    transition:
      width 0.35s ease-in-out,
      height 0.35s ease-in-out,
      right 0.35s ease-in-out 0.45s,
      font-size 0.35s ease-in-out;
  }

  .bookmark:hover {
    background: #383838;
  }

  .bookmark.opened:hover {
    background: #383838;
  }

  .bookmark-tab {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bookmark-label {
    color: white;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    padding: 0.5rem 0;
  }
</style>
