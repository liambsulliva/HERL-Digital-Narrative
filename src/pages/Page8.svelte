<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 8 content -->
<div class="timeline-container">
  <!-- 2000 -->
  <section class="year-section">
    <h2 class="year-title">2000</h2>
    <div class="milestones-grid">
      <div class="flex flex-col">
        <div class="flex md:flex-row flex-col">
          <div class="milestone-item">
            <h3 class="milestone-title">
              WHEELCHAIR ROAD LOADS AND WHOLE-BODY VIBRATION
            </h3>
            <div class="milestone-description">
              <Description
                content="Successfully addressed and reduced by inventing vibration-damping cushions, backrest fittings, and suspension elements to minimize shock, and vibration-induced injuries to the neck and back."
              />
            </div>
          </div>

          <div class="milestone-item">
            <h3 class="milestone-title">
              ASSISTIVE TECHNOLOGY CLINIC IN INDIA
            </h3>
            <div class="milestone-description">
              <Description
                content="Rory and Rosemarie Cooper worked with colleagues at the Indian Spinal Injuries Centre to establish this first-of-its-kind clinic in the region."
              />
            </div>
          </div>
        </div>

        <div class="milestone-item">
          <h3 class="milestone-title">TELE-REHABILITATION RESEARCH PROGRAM</h3>
          <div class="milestone-description">
            <Description
              content="HERL was the home of the first major iterations of this program, primarily funded by the VA."
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
    font-weight: 600;
    width: 5rem;
    margin: 0 auto;
    font-size: 1.25rem;
    color: #003594;
    text-align: center;
    margin-bottom: 1rem;
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
