<script lang="ts">
  // Import the necessary reusable component
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 1 content -->
<div class="mission-vision-container">
  <Picture
    src="/images/content/2024_Cal_Copy_Page_04_Image_0001.webp"
    alt="Left to right: Edward DesLauriers (KPVA), Dr. Wes Rohr (Pitt) , John Bollinger (PVA), Dr. Thomas P. Detre, (Pitt) ,Dr. Rory A. Cooper (VA/Pitt) , Laura Miller (VA), Dr. Charles Robinson (Pitt)."
  />
  <div>
    <section class="info-section">
      <h2 class="section-title">Our Mission</h2>
      <div class="section-description">
        <Description
          content="To continuously improve the mobility and function of people with disabilities through advanced engineering in clinical research and medical rehabilitation."
        />
      </div>
    </section>

    <section class="info-section">
      <h2 class="section-title">Our Vision</h2>
      <div class="section-description">
        <Description
          content="To create a world where all people with disabilities have unencumbered mobility and function so that they can fully participate in and contribute to society. Left to right: Edward DesLauriers (KPVA), Dr. Wes Rohr (Pitt), John Bollinger (PVA), Dr. Thomas P. Detre (Pitt), Dr. Rory A. Cooper (VA/Pitt), Laura Miller (VA), Dr. Charles Robinson (Pitt)."
        />
      </div>
    </section>
  </div>
</div>

<style>
  .mission-vision-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 1rem;
    border-radius: 8px;
    align-items: center;
    min-height: 50vh;
  }

  .info-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .section-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #333333;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .section-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #555555;
    text-align: justify;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .mission-vision-container {
      flex-direction: column;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .section-description {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 1.25rem;
    }

    .section-description {
      font-size: 0.9rem;
    }
  }
</style>
