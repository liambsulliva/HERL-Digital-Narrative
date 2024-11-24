<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 12 content -->
<div class="timeline-container">
  <!-- 2004 -->
  <section class="year-section">
    <h2 class="year-title">2004</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">
          STATE OF THE SCIENCE SYMPOSIUM SERIES STARTS
        </h3>
        <div class="milestone-description">
          <Description
            content="The State-of-the-Science (SoS) symposia started after Dr. Paul Pasquina and Dr. Rory Cooper had a discussion about the needs of rehabilitation healthcare providers, physical medicine and rehabilitation medicine residents to learn and integrate the most current knowledge and practice to provide the highest level of care to wounded, injured, and ill service members in light of the patients coming to Walter Reed Army Medical Center and later Walter Reed National Military Medical Center (WRNMC). The SoS brings experts to WRNMC so that there can be greater participation by WRNMC providers and residents, and exposes experts to WRNMC and Uniformed Services University of Health Sciences."
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
