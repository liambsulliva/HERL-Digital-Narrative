<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 2 content -->
<div class="timeline-container">
  <!-- 1994 -->
  <section class="year-section">
    <h2 class="year-title">1994</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">BEGINNING OF HERL'S JOURNEY</h3>
        <div class="milestone-description">
          <Description
            content="A monumental achievement for veterans and people with disabilities. The Human Engineering Research Laboratories (HERL) teamed up with the University of Pittsburgh, the Paralyzed Veterans of America (PVA), and the Department of Veterans Affairs (VA) to establish a pioneering lab. This new space was to be located within a VA facility in Highland Drive. The partnership brought together the expertise of researchers, engineers, and medical professionals which leveraged their collective knowledge and resources. This collaboration set the stage for innovative advancements in assistive technology that make a profound impact for individuals with disabilities."
            length={Infinity}
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
    padding: 1rem 4rem;
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
