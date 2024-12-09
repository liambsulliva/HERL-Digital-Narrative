<script lang="ts">
  import { Lightbox } from "svelte-lightbox";
  import { imageLoader } from "./stores/imageStore";
  import { onMount } from "svelte";

  export let src: string;
  export let alt: string = "";
  export let width: string = "max-h-[17rem]";
  export let class_name: string = "";

  let imageLoaded = false;

  onMount(() => {
    imageLoader
      .preloadImage(src)
      .then(() => {
        imageLoaded = true;
      })
      .catch((error) => {
        console.error("Failed to load image:", error);
      });
  });
</script>

<div class="flex flex-col gap-2 {class_name}">
  {#if imageLoaded}
    <Lightbox>
      <img {src} {alt} class="{width} object-contain m-auto" />
    </Lightbox>
    {#if alt}
      <p class="text-sm text-gray-500 cursor-default">{alt}</p>
    {/if}
  {:else}
    <div class="animate-pulse bg-gray-200 {width} aspect-video"></div>
  {/if}
</div>
