<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 17 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2010</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">
          WARRIOR TRANSITION LEADER- MEDICAL REHABILITATION HANDBOOK
        </h3>
        <div class="flex flex-row items-center gap-6">
          <div>
            <Picture
              src="/images/content/2024_Cal_Copy_Page_16_Image_0001.webp"
              alt="Medical Rehabilitation Handbook"
            />
          </div>
          <div class="milestone-description">
            <Description
              content="A valuable resource created to aid and support military personnel during career and life transitions. Over 10,000 copies have been distributed or downloaded."
            />
          </div>
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">PERSONAL VEHICLE PATENT</h3>
        <div class="flex flex-row items-center gap-6">
          <div class="milestone-description">
            <Description
              content="A power mobility device designed to improve maneuverability on diverse terrains."
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

  .year-section {
    margin-bottom: 2rem;
  }

  .year-title {
    border-top: 2px solid #003594;
    border-bottom: 2px solid #003594;
    width: 5rem;
    margin: 0 auto;
    font-size: 1.25rem;
    font-weight: 600;
    color: #003594;
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
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 6px;
  }

  .milestone-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #06060b;
    margin-bottom: 0.5rem;
  }

  .milestone-description {
    font-size: 1rem;
    color: #06060b;
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
