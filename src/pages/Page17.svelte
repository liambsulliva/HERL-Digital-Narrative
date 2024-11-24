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
        <h3 class="milestone-title">
          WARRIOR TRANSITION LEADER- MEDICAL REHABILITATION HANDBOOK
        </h3>
        <div class="flex flex-row items-center gap-6">
          <div>
            <Picture
              src="/images/content/2024_Cal_Copy_Page_16_Image_0001.webp"
              alt="Medical Rehabilitation Handbook"
            />
          </div>
          <div class="milestone-description">
            <Description
              content="A valuable resource created to aid and support military personnel during career and life transitions. Over 10,000 copies have been distributed or downloaded."
            />
          </div>
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">PERSONAL VEHICLE PATENT</h3>
        <div class="flex flex-row items-center gap-6">
          <div class="milestone-description">
            <Description
              content="A power mobility device designed to improve maneuverability on diverse terrains."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
