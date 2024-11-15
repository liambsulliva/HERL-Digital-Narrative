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
    font-size: 1rem;
    color: #555555;
    line-height: 1.5;
  }

  .image-section {
    text-align: center;
    margin-top: 2rem;
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

    .image-section img {
      width: 100%;
      height: auto;
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

    .image-section img {
      width: 100%;
      height: auto;
    }
  }
</style>
