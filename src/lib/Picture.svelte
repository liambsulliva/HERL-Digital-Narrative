<script lang="ts">
  import { Lightbox } from "svelte-lightbox";
  export let src: string;
  export let alt: string = "";
  let imageLoaded: boolean = false;

  function handleLoad() {
    imageLoaded = true;
  }
</script>

<div class="flex flex-col gap-2">
  <Lightbox>
    <img
      {src}
      {alt}
      on:load={handleLoad}
      class="max-h-[17rem] object-contain m-auto"
    />
  </Lightbox>
  {#if alt && imageLoaded}
    <p class="text-sm text-gray-500">{alt}</p>
  {/if}
</div>
