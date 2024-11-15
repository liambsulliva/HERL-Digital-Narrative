<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2013</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <Picture
          src="/images/content/2024_Cal_Copy_Page_22_Image_0001.webp"
          alt="The Robotic Strong Arm."
          width="max-h-[30rem]"
        />
        <div class="milestone-description">
          <h3 class="milestone-title">
            USER-ADJUSTABLE WHEELCHAIR BACKREST MOUNTING HARDWARE PATENT
          </h3>
          <Description
            content="A technology to streamline backrest adjustments for users, improving simplicity, aesthetics, and incorporating essential features for commercial viability."
          />
        </div>
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
    font-size: 2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
    text-align: center;
  }

  .milestones-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0 4rem;
  }

  .milestone-item {
    display: flex;
    gap: 1rem;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 6px;
  }

  .milestone-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #34495e;
    margin-bottom: 0.5rem;
  }

  .milestone-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    color: #555555;
    line-height: 1.5;
    padding: 0 4rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .milestones-grid {
      grid-template-columns: 1fr;
    }

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
