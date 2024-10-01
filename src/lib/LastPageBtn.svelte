<script lang="ts">
  export let frontPage = 0;
  export let backPage = 0;
  function handleClick(event: MouseEvent) {
    event?.stopPropagation();
    frontPage = backPage;
    backPage += 1;
    console.log(backPage, frontPage);
  }
</script>

{#if frontPage > 1}
  <button
    on:click={handleClick}
    aria-label="Last Page Button"
    class="absolute right-0 z-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5em"
      height="5em"
      viewBox="0 0 24 24"
      ><path
        fill="#1F2937"
        d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
      /></svg
    >
  </button>
{/if}
