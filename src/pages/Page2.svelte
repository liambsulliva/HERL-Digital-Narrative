<script lang="ts">
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 2 content -->
<div class="timeline-container">
  <!-- 1994 -->
  <section class="year-section">
    <h2 class="year-title">1994</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">BEGINNING OF HERL'S JOURNEY</h3>
        <div class="milestone-description">
          <Description
            content="A monumental achievement for veterans and people with disabilities. The Human Engineering Research Laboratories (HERL) teamed up with the University of Pittsburgh, the Paralyzed Veterans of America (PVA), and the Department of Veterans Affairs (VA) to establish a pioneering lab. This new space was to be located within a VA facility in Highland Drive. The partnership brought together the expertise of researchers, engineers, and medical professionals which leveraged their collective knowledge and resources. This collaboration set the stage for innovative advancements in assistive technology that make a profound impact for individuals with disabilities."
            length={Infinity}
          />
        </div>
      </div>
    </div>
  </section>
</div>
