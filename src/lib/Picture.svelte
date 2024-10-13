<script lang="ts">
  export let src: string;
  export let alt: string = "";
</script>

<div class="flex flex-col gap-2">
  <img {src} {alt} class="max-h-[17rem] w-auto object-contain" />
  {#if alt}
    <p class="text-sm text-gray-500">{alt}</p>
  {/if}
</div>
