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
        <div class="mb-2">
          <h3 class="milestone-title !mb-1">BEGINNING OF HERL'S JOURNEY</h3>
          <i class="text-[#6B7280]">
            A monumental achievement for veterans and people with disabilities.
          </i>
        </div>
        <div class="milestone-description flex flex-col gap-2">
          <Description
            content="The Human Engineering Research Laboratories (HERL) teamed up with the University of Pittsburgh, the Paralyzed Veterans of America (PVA), and the Department of Veterans Affairs (VA) to establish a pioneering lab. This new space was to be located within a VA facility in Highland Drive."
          />
          <Description
            content="The partnership brought together the expertise of researchers, engineers, and medical professionals which leveraged their collective knowledge and resources. This collaboration set the stage for innovative advancements in assistive technology that make a profound impact for individuals with disabilities."
          />
        </div>
      </div>
    </div>
  </section>
</div>
