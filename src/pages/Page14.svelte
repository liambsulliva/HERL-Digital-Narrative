<script lang="ts">
  import Description from "../lib/Description.svelte";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2006 -->
  <section class="year-section">
    <h2 class="year-title">2006</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">
          QUALITY OF LIFE ENGINEERING RESEARCH CENTER (ERC)
        </h3>
        <Description
          content="HERL received this award from the National Science Foundation (NSF), along with Carnegie Mellon University and other partners."
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
