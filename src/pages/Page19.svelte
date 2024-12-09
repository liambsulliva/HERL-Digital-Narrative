<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 17 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2010</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">PERSONAL VEHICLE PATENT</h3>
        <Picture
          width="w-[20rem]"
          src="/images/patentdiagram.webp"
          alt="The Personal Vehicle Patent Diagram."
        />
        <div class="milestone-description">
          <Description
            content="A power mobility device designed to improve maneuverability on diverse terrains."
          />
        </div>
      </div>
    </div>
  </section>
</div>
