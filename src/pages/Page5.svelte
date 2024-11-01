<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 5 content -->
<div class="timeline-container">
  <!-- 2003 -->
  <section class="year-section">
    <h2 class="year-title">2003</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">VIRTUAL SEATING COACH</h3>
        <div class="milestone-description">
          <Description content="An innovative technology providing personalized wheelchair seating recommendations for enhanced comfort and support, brought to commercial market by PERMOBIL." />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">GLIDE CASTER FORK</h3>
        <div class="milestone-description">
          <Description content="Based on oblique angle suspension that maximizes vibration dampening in both horizontal and vertical directions, and minimizes vibration transfer to the body of the rider, was brought to the Market by TiLite, LLC." />
        </div>
      </div>
    </div>
  </section>

  <!-- 2004 -->
  <section class="year-section">
    <h2 class="year-title">2004</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">STATE OF THE SCIENCE SYMPOSIUM SERIES STARTS</h3>
        <div class="milestone-description">
          <Description content="The State-of-the-Science (SoS) symposia started after Dr. Paul Pasquina and Dr. Rory Cooper had a discussion about the needs of rehabilitation healthcare providers, physical medicine and rehabilitation medicine residents to learn and integrate the most current knowledge and practice to provide the highest level of care to wounded, injured, and ill service members in light of the patients coming to Walter Reed Army Medical Center and later Walter Reed National Military Medical Center (WRNMC). The SoS brings experts to WRNMC so that there can be greater participation by WRNMC providers and residents, and exposes experts to WRNMC and Uniformed Services University of Health Sciences." />
        </div>
      </div>
    </div>
  </section>

  <!-- 2005 -->
  <section class="year-section">
    <h2 class="year-title">2005</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED</h3>
        <div class="milestone-description">
          <Description content="Dr. Michael Boninger (HERL Medical Director 1998-20) spearheaded a team of experts in organizing one of the most widely used and referenced documents in the field today: a Clinical Practice Guideline (CPG) on Preservation of Upper Limb Function Following Spinal Cord Injury (SCI)." />
        </div>
        <Picture src="/images/content/2024_Cal_Copy_Page_14_Image_0001.webp" alt="Inaugurating the Bakery Square site, 2011." />
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT</h3>
        <div class="milestone-description">
          <Description content="A patent was awarded for this innovative wheelchair design, focusing on effective shock absorption for both horizontal and vertical impacts during travel over uneven terrain." />
        </div>
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
