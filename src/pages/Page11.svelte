<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 11 content -->
<div class="timeline-container">
  <!-- 2017 -->
  <div class="flex flex-col md:flex-row gap-4">
    <section class="year-section">
      <h2 class="year-title">2017</h2>
      <div class="milestones-grid">
        <div class="milestone-item">
          <h3 class="milestone-title">PNEUCHAIR & PNEUSCOOTER</h3>
          <div class="milestone-description">
            <Description
              content="The PneuMobility project is focused on revolutionizing assistive mobility devices by developing innovative devices that run solely on compressed air technology."
            />
          </div>
          <Picture
            src="/images/content/2024_Cal_Copy_Page_24_Image_0002.webp"
            alt="Dr. Rory Cooper at Morgan’s Wonderland with the Pneuchair."
          />
        </div>
      </div>
    </section>
    <!-- 2018 -->
    <section class="year-section">
      <h2 class="year-title">2018</h2>
      <div class="milestones-grid">
        <div class="milestone-item">
          <h3 class="milestone-title">
            POWERED PERSONAL TRANSFER SYSTEM (PPTS)
          </h3>
          <div class="milestone-description">
            <Description
              content="A groundbreaking innovation designed to revolutionize the process of transferring between a bed and a wheelchair, particularly for individuals, including many veterans, who depend on wheelchairs for mobility."
            />
          </div>
        </div>

        <div class="milestone-item">
          <h3 class="milestone-title">
            GUIDELINES FOR THE CARE OF PEOPLE WITH SPINA BIFIDA
          </h3>
          <div class="milestone-description">
            <Description
              content="One hundred Spina Bifida experts from around the world, led by HERL Medical Director Dr. Brad Dicianno, spent three years developing these Guidelines."
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  
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
