<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 8 content -->
<div class="timeline-container">
  <!-- 2010 -->

  <!-- 2011 -->
  <section class="year-section">
    <h2 class="year-title">2011</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">HERL MOVES TO BAKERY SQUARE</h3>
        <div class="milestone-description">
          <Description
            content="In July 2011, HERL relocated from its original research lab at the VA’s Highland Drive facility to the newly renovated Bakery Square. This move represented a pivotal moment for HERL, offering its investigators, staff, and faculty the chance to establish a state-of-the-art facility tailored to their specific requirements. The transition brought about significant improvements, including the addition of a spacious laboratory bay and a dedicated machine shop area. HERL celebrated this milestone with an open house on August 4th, where they welcomed family, friends, and supporters from the VA and Pitt communities."
          />
        </div>
        <Picture
          src="/images/content/2024_Cal_Copy_Page_18_Image_0001.webp"
          alt="Inaugurating the Bakery Square site, 2011."
        />
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
