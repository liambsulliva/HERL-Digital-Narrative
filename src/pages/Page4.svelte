<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 4 content -->
<div class="timeline-container">
  <!-- 2000 -->
  <div class="flex lg:flex-row flex-col gap-4">
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
            <h3 class="milestone-title">
              TELE-REHABILITATION RESEARCH PROGRAM
            </h3>
            <div class="milestone-description">
              <Description
                content="HERL was the home of the first major iterations of this program, primarily funded by the VA."
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="year-section">
      <h2 class="year-title">2001</h2>
      <div class="milestones-grid">
        <div class="milestone-item">
          <h3 class="milestone-title">
            ERGONOMIC DUAL SURFACE WHEELCHAIR PUSHRIM
          </h3>
          <div class="milestone-description">
            <Description
              content="The Ergonomic Pushrim (left) developed by HERL’s team, marked a significant leap from traditional wheelchair handrims. Ergonomic hand rims have successfully tackled traditional push rim issues by offering a better hand fit, enhancing mechanical efficiency during wheelchair propulsion."
            />
          </div>
          <Picture
            src="/images/content/2024_Cal_Copy_Page_10_Image_0001.webp"
            alt="The Robotic Strong Arm."
          />
        </div>
      </div>
    </section>
    <section class="year-section">
      <h2 class="year-title">2002</h2>
      <div class="milestones-grid">
        <div class="milestone-item">
          <h3 class="milestone-title">DATA LOGGER</h3>
          <div class="milestone-description">
            <Description
              content="The new, low-power, self-contained Data Logger developed by researchers at HERL, provides a reliable method for long-term monitoring of manual wheelchair users’ activities in real-world environments."
            />
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="flex flex-row gap-4">
    <!-- 2002 -->
  </div>
  <!-- 2001 -->
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
    font-size: 1.5rem;
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
