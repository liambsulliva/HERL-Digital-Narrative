<script lang="ts">
  import banner from "/images/pittbanner.webp";
  import { fade } from "svelte/transition";
</script>

<a
  href="https://pitt.edu"
  class="w-32 p-2"
  aria-label="University of Pittsburgh"
  rel="noopener noreferrer"
  target="_blank"
  transition:fade={{ duration: 200 }}
>
  <img src={banner} alt="University of Pittsburgh" class="dark:hidden block" />
</a>
