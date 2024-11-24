<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2019 -->
  <section class="year-section">
    <h2 class="year-title">2019</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">
          AUTOMATED VEHICLE SERVICES FOR PEOPLE WITH DISABILITIES — INVOLVED
          RESPONSIVE ENGINEERING (ASPIRE)
        </h3>

        <div class="milestone-description">
          <Picture
            src="/images/content/2024_Cal_Copy_Page_26_Image_0001.webp"
            alt="Nikitha Deepak handling an electric wheelchair outside of the Bakery Square offices."
          />
          <div class="pt-4">
            <Description
              content="A HERL center studying how people with disabilities and older adults are affected by access to reliable accessible transportation."
            />
          </div>
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">
          MANUAL WHEELCHAIR ULCER RISK MANAGEMENT COACHING SYSTEM AND
          METHODOLOGY PATENT
        </h3>
        <div class="milestone-description">
          <Description content="" />
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
    display: flex;
    gap: 1rem;
    align-items: start;

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
