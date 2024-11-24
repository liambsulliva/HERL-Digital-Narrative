<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 9 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2001</h2>
    <div class="flex flex-col items-center px-20 gap-6">
      <h3 class="milestone-title">ERGONOMIC DUAL SURFACE WHEELCHAIR PUSHRIM</h3>
      <div class="milestone-description">
        <Picture
          width="max-h-[50rem]"
          src="/images/content/2024_Cal_Copy_Page_10_Image_0001.webp"
          alt="The Robotic Strong Arm."
        />
        <Description
          content="The Ergonomic Pushrim (left) developed by HERL’s team, marked a significant leap from traditional wheelchair handrims. Ergonomic hand rims have successfully tackled traditional push rim issues by offering a better hand fit, enhancing mechanical efficiency during wheelchair propulsion."
        />
      </div>
    </div>
  </section>
</div>

<style>
  .timeline-container {
    padding: 1rem;
    border-radius: 8px;
  }

  .year-section {
    margin-bottom: 2rem;
  }

  .year-title {
    border-top: 2px solid #003594;
    border-bottom: 2px solid #003594;
    font-weight: 600;
    width: 5rem;
    margin: 0 auto;
    font-size: 1.25rem;
    color: #003594;
    text-align: center;
    margin-bottom: 1rem;
  }

  .milestone-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #06060b;
    margin-bottom: 0.5rem;
  }

  .milestone-description {
    display: flex;
    gap: 2rem;
    font-size: 1rem;
    color: #06060b;
    line-height: 1.5;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .year-title {
      font-size: 1.25rem;
    }

    .milestone-title {
      font-size: 1.1rem;
    }

    .milestone-description {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .year-title {
      font-size: 1rem;
    }

    .milestone-title {
      font-size: 1rem;
    }

    .milestone-description {
      font-size: 0.9rem;
    }
  }
</style>
