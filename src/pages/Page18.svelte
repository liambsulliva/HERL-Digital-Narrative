<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2010</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex items-center gap-4">
          <Picture
            width="max-h-[10rem] pt-8"
            src="/images/content/2024_Cal_Copy_Page_18_Image_0002.webp"
            alt="Dr. Cooper and the PerMMA in 2010."
          />
          <div class="milestone-description">
            <h3 class="milestone-title">
              PERSONAL MOBILITY AND MANIPULATION APPLIANCE
            </h3>
            <Description
              content="PerMMA’s the first fully robotic mobility and manipulation device for people with disabilities. It provides bi-manual (two-arm) coordinated manipulation as well as fluid mobility."
            />
          </div>
        </div>
      </div>
      <div class="milestone-item">
        <h3 class="milestone-title">VIRTUAL SEATING COACH</h3>
        <div class="milestone-description">
          <Description
            content="Initiated a series of connected devices leveraging AI to promote adherence to clinical guidelines."
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
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 4rem;
  }

  .milestone-item {
    background-color: #ffffff;
    padding: 1rem;
    padding-bottom: 0;
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
