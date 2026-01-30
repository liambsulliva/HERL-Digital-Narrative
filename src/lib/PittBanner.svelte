<script lang="ts">
  import { fade } from "svelte/transition";
  const banner = import.meta.env.BASE_URL + "images/pittbanner.webp";
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
