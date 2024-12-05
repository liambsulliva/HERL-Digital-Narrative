<script lang="ts">
  export let targetPage: number;
  export let page: number;
  export let isOpen = false;

  const bookmarkTitles: Record<number, string> = {
    // Pg: Year
    5: "1996",
    10: "2002",
    15: "2006",
    20: "2010",
    25: "2013",
    31: "2021",
  };

  function handleClick() {
    if (!isOpen) {
      // Dispatch custom event to open book from Bookmark component
      const event = new CustomEvent("openToPage", {
        detail: { targetPage },
        bubbles: true,
      });
      document.dispatchEvent(event);
    } else {
      page = targetPage;
    }
  }

  // Calculate position based on index rather than page number
  // This ensures bookmarks are evenly spaced from the top
  $: index = Object.keys(bookmarkTitles).indexOf(targetPage.toString());
  $: top = `${index * 3.75}rem`;

  // Get bookmark label based on page number
  $: label = bookmarkTitles[targetPage] || `Page ${targetPage}`;
</script>

<button
  class="bookmark"
  class:active={page === targetPage}
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
    height: 5rem;
    background: #252525;
    border: none;
    cursor: pointer;
    transform-origin: left center;
    transition: transform 0.2s ease;
    border-radius: 0 0.25rem 0.25rem 0;
    z-index: 1000;
  }

  .bookmark:hover {
    transform: scale(1.1);
    background: #383838;
  }

  .bookmark.active {
    background: #4a4a4a;
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
