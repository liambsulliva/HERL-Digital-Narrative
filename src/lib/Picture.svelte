<script lang="ts">
  import { Lightbox } from "svelte-lightbox";
  export let src: string;
  export let alt: string = "";
  export let width: string = "max-h-[17rem]";
  let imageLoaded: boolean = false;
  export let class_name: string = "";

  function handleLoad() {
    imageLoaded = true;
  }
</script>

<div class="flex flex-col gap-2 {class_name}">
  <Lightbox>
    <img
      {src}
      {alt}
      on:load={handleLoad}
      class="{width} object-contain m-auto"
    />
  </Lightbox>
  {#if alt && imageLoaded}
    <p class="text-sm text-gray-500">{alt}</p>
  {/if}
</div>
