<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2009 -->
  <section class="year-section">
    <h2 class="year-title">2009</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">
          CARE OF THE COMBAT AMPUTEE TEXTBOOK PUBLISHED
        </h3>
        <Description
          content="The “Care of the Combat Amputee” textbook, revered as the “gold standard” for military healthcare providers, plays a pivotal role in improving the quality of care for Veterans with traumatic amputations. By providing standardized guidelines, it ensures that medical professionals are equipped with the knowledge and skills necessary to deliver the best possible care. In the long-term care and rehabilitation domain, it emphasizes personalized approaches that consider the unique needs of each individual."
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
  }

  @media (max-width: 480px) {
    .year-title {
      font-size: 1rem;
    }

    .milestone-title {
      font-size: 1rem;
    }
  }
</style>
