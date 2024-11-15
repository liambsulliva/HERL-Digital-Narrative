<script lang="ts">
  // Import necessary reusable components
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 7 content -->
<div class="timeline-container">
  <!-- 1998 -->
  <section class="year-section">
    <h2 class="year-title">1998</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">WHEELCHAIR SELECTION AND CONFIGURATION</h3>
        <div class="milestone-description">
          <Description
            content="This published book is the most cited text dedicated to wheelchair design and clinical service guidance, being translated in six different languages."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">NATIONAL VETERAN WHEELCHAIR GAMES</h3>
        <div class="milestone-description">
          <Description
            content="Pittsburgh hosted the NVWG and was given its first VA R&D Center of Excellence for Wheelchairs and Associated Rehabilitation Engineering (WARE) award. The beginning of a 25+ year legacy."
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
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
    text-align: center;
  }

  .milestones-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
