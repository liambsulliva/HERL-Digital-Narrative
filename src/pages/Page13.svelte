<script lang="ts">
  // Import necessary reusable component
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="image-container">
  <Picture src="/images/Timeline.png" alt="Parallel Paths" />
</div>

<style>
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 8px;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .image-container {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    .image-container {
      padding: 0.5rem;
    }
  }
</style>
