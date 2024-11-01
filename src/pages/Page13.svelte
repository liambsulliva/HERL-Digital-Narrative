<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2021 -->
  <div class="flex flex-col md:flex-row gap-4">
    <section class="year-section">
      <h2 class="year-title">2021</h2>
      <div class="milestones-grid">
        <div class="milestone-item">
          <h3 class="milestone-title">
            GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED
          </h3>
          <div class="milestone-description">
            <Description
              content="Dr. Michael Boninger (HERL Medical Director 1998-20) spearheaded a team of experts in organizing one of the most widely used and referenced documents in the field today: a Clinical Practice Guideline (CPG) on Preservation of Upper Limb Function Following Spinal Cord Injury (SCI)."
            />
          </div>
        </div>

        <div class="milestone-item">
          <h3 class="milestone-title">
            OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT
          </h3>
          <div class="milestone-description">
            <Description
              content="A patent was awarded for this innovative wheelchair design, focusing on effective shock absorption for both horizontal and vertical impacts during travel over uneven terrain."
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 2022 -->
    <section class="year-section">
      <h2 class="year-title">2022</h2>
      <div class="milestones-grid">
        <div class="milestone-item">
          <h3 class="milestone-title">IEEE BIOMEDICAL ENGINEERING MEDAL</h3>
          <div class="milestone-description">
            <Description
              content="Dr. Cooper was honored with this prestigious award for his outstanding contributions to the field of biomedical engineering. This recognition highlights his achievements and groundbreaking research that have significantly advanced the intersection of engineering and medicine."
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- 2023 -->
  <section class="year-section">
    <h2 class="year-title">2023</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">NATIONAL INVENTORS HALL OF FAME</h3>
        <div class="milestone-description">
          <Description
            content="Dr. Rory Cooper was inducted to the 50th class."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">
          NATIONAL MEDAL OF TECHNOLOGY AND INNOVATION
        </h3>
        <div class="milestone-description">
          <Description
            content="Dr. Cooper was presented this award by President Biden at the White House. This accolade is given to individuals who have made important contributions to the advancement of knowledge."
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
