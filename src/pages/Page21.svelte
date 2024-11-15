<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2015</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">NATIONAL ACADEMY OF INVENTORS</h3>
        <div class="milestone-description">
          <Description
            content="Dr. Cooper elected Fellow of the NAI, partnered with the International Society of Wheelchair Professionals, whose mission is to serve as a global resource for wheelchair service standards and provision through advocacy, education, standards, evidence-based practice, innovation and a platform for information exchange."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">
          VA TECHNOLOGY TRANSFER ASSISTANCE PROGRAM
        </h3>
        <div class="milestone-description">
          <Description
            content="Start of the project which engages in a wide range of healthcare, research, and support initiatives for veterans, with a core mission of enhancing veterans’ quality of life and healthcare outcomes."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">
          SAMUEL E. HEYMAN SERVICE TO AMERICA MEDAL
        </h3>
        <div class="milestone-description">
          <Description
            content="Also known as the “Sammies”, this premier awards program is considered the “Oscar” of public service."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">DRIVING EVALUATION AND TRAINING PATENT</h3>
        <div class="milestone-description">
          <Description
            content="
            Covers techniques for assessing
            and enhancing driving skills through evaluation and training
            processes.
          "
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
