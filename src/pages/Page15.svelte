<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
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
        <Picture
          width="w-[25rem]"
          src="/images/evolution-of-wheelchair.webp"
          alt="The evolution of wheelchair technology, right to left"
        />
        <Description
          content="HERL received this award from the National Science Foundation (NSF), along with Carnegie Mellon University and other partners."
        />
      </div>
    </div>
  </section>
</div>
