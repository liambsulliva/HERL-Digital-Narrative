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

  <!-- 2012 -->
  <section class="year-section">
    <h2 class="year-title">2012</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">MOBILITY ENHANCEMENT ROBOTIC WHEELCHAIR</h3>
        <div class="milestone-description">
          <Description
            content="A groundbreaking innovation designed for conquering challenging terrains, including curbs, uneven surfaces, and steep slopes."
          />
        </div>
        <Picture
          src="/images/content/2024_Cal_Copy_Page_20_Image_0002.webp"
          alt="Dr. Jorge Candiotti and the MEBot."
        />
      </div>
      <div class="flex flex-col gap-4">
        <div class="milestone-item">
          <h3 class="milestone-title">VARIABLE COMPLIANCE JOYSTICK</h3>
          <div class="milestone-description">
            <Description
              content="Equipped with compensation algorithms offers adaptable control and enhanced precision in various power mobility ops."
            />
          </div>
        </div>

        <div class="milestone-item">
          <h3 class="milestone-title">ROBOTIC STRONGARM</h3>
          <div class="milestone-description">
            <Description
              content="A specialized wheelchair attachment engineered to assist electric power wheelchair users in seamless transfers to and from other surfaces."
            />
          </div>
        </div>

        <div class="milestone-item">
          <h3 class="milestone-title">MOBILE CASTER PATENT</h3>
          <div class="milestone-description">
            <Description
              content="Designed to prevent drift and flutter, ensuring enhanced tracking when a mobile device moves across a side-sloped surface."
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2013 -->
  <section class="year-section">
    <h2 class="year-title">2013</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">
          USER-ADJUSTABLE WHEELCHAIR BACKREST MOUNTING HARDWARE PATENT
        </h3>
        <div class="milestone-description">
          <Description
            content="A technology to streamline backrest adjustments for users, improving simplicity, aesthetics, and incorporating essential features for commercial viability."
          />
        </div>
        <Picture
          src="/images/content/2024_Cal_Copy_Page_22_Image_0001.webp"
          alt="The Robotic Strong Arm."
        />
      </div>
    </div>
  </section>
</div>

<style>
  .timeline-container {
    padding: 1rem;
    background-color: #f9f9f9;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
