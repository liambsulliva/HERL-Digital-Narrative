<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 3 content -->
<div class="timeline-container">
  <!-- 1995 -->
  <section class="year-section">
    <h2 class="year-title">1995</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex flex-row items-center gap-6">
          <div>
            <h3 class="milestone-title">SMARTWHEEL</h3>
            <Picture
              width="max-h-[26rem]"
              src="/images/content/2024_Cal_Copy_Page_06_Image_0001.webp"
              alt="Dr. Alicia Koontz with a SMARTWheel."
            />
          </div>
          <div class="milestone-description">
            <Description
              content="Revolutionized how wheelchair setups could be customized to optimize the reduction of repetitive stress."
            />
          </div>
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
  }

  .milestone-item {
    background-color: #ffffff;
    padding: 0 6rem;
  }

  .milestone-title {
    font-size: 1.33rem;
    font-weight: 700;
    color: #34495e;
    margin-bottom: 0.5rem;
  }

  .milestone-description {
    font-size: 1rem;
    color: #555555;
    line-height: 1.5;
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
