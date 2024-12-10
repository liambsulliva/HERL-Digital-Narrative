<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2010</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex items-center gap-12">
          <Picture
            width="max-h-[35rem] pt-8"
            src="/images/2024_Cal_Copy_Page_18_Image_0002.webp"
            alt="Dr. Cooper and the PerMMA in 2010."
          />
          <div class="milestone-description">
            <h3 class="milestone-title">
              PERSONAL MOBILITY AND MANIPULATION APPLIANCE
            </h3>
            <Description
              content="PerMMA’s the first fully robotic mobility and manipulation device for people with disabilities. It provides bi-manual (two-arm) coordinated manipulation as well as fluid mobility."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
