<script lang="ts">
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 6 content -->
<div class="timeline-container">
  <!-- 1996 -->
  <section class="year-section">
    <h2 class="year-title">1996</h2>
    <div class="milestones-grid">
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="milestone-item">
            <h3 class="milestone-title">ZERO THROW JOYSTICK</h3>
            <div class="milestone-description">
              <Description
                content="Gave users the ability to operate their power wheelchair with 360° of control."
              />
            </div>
          </div>
          <div class="milestone-item">
            <h3 class="milestone-title">
              CDC CENTER FOR INJURY RESEARCH AND CONTROL
            </h3>
            <div class="milestone-description">
              <Description
                content="This award was bestowed on HERL along with the Department of Neurosurgery of Pitt."
              />
            </div>
          </div>
        </div>

        <div class="milestone-item">
          <h3 class="milestone-title">WHEELCHAIR COMPARISON STUDY</h3>
          <div class="milestone-description">
            <Description
              content="The first in a long series of studies was completed. One study highlighted challenges with wheelchairs' quality and standards non-compliance."
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
