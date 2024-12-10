<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2012 -->
  <section class="year-section">
    <h2 class="year-title">2012</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex mt-2 gap-8">
          <div class="mt-8">
            <h3 class="milestone-title">
              MOBILITY ENHANCEMENT ROBOTIC WHEELCHAIR
            </h3>
            <Description
              content="A groundbreaking innovation designed for conquering challenging terrains, including curbs, uneven surfaces, and steep slopes."
            />
          </div>
          <Picture
            src="/images/2024_Cal_Copy_Page_20_Image_0002.webp"
            alt="Dr. Jorge Candiotti and the MEBot."
            width="max-h-[30rem] pt-4"
          />
        </div>
      </div>
    </div>
  </section>
</div>
