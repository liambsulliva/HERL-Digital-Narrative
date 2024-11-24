<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 11 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2003</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">VIRTUAL SEATING COACH</h3>
        <div class="milestone-description">
          <Description
            content="An innovative technology providing personalized wheelchair seating recommendations for enhanced comfort and support, brought to commercial market by PERMOBIL."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">GLIDE CASTER FORK</h3>
        <div class="milestone-description">
          <Description
            content="Based on oblique angle suspension that maximizes vibration dampening in both horizontal and vertical directions, and minimizes vibration transfer to the body of the rider, was brought to the Market by TiLite, LLC."
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
