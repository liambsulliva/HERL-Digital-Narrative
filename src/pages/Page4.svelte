<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 4 content -->
<div class="timeline-container">
  <!-- 1995 -->
  <section class="year-section">
    <h2 class="year-title">1995</h2>
    <div class="milestones-grid">
      <div class="flex flex-row gap-4">
        <div class="milestone-item flex-1">
          <h3 class="milestone-title">
            REHABILITATION ENGINEERING APPLIED TO MOBILITY
          </h3>
          <div class="milestone-description">
            <Description
              content="A textbook that set the standard for engineering textbooks in the field of rehabilitation."
            />
          </div>
        </div>

        <div class="milestone-item flex-1">
          <h3 class="milestone-title">X-BRACE</h3>
          <div class="milestone-description">
            <Description
              content="Designed to enhance performance, safety, and durability in folding wheelchairs."
            />
          </div>
        </div>

        <div class="milestone-item flex-1">
          <h3 class="milestone-title">GAMEWHEELS & GAMECYCLE</h3>
          <div class="milestone-description">
            <Description
              content="The first devices to address and incorporate exergaming for people with disabilities."
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
    padding: 0 2rem;
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
