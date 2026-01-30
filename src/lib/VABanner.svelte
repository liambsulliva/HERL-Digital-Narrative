<script lang="ts">
  import { fade } from "svelte/transition";
  const vabanner = import.meta.env.BASE_URL + "images/2024-VA-Seal.webp";
</script>

<a
  href="https://va.gov"
  class="w-16 p-2"
  aria-label="U.S. Department of Veterans Affairs"
  rel="noopener noreferrer"
  target="_blank"
  transition:fade={{ duration: 200 }}
>
  <img src={vabanner} alt="U.S. Department of Veterans Affairs" class="block" />
</a>
