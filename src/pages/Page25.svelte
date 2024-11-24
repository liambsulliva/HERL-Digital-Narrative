<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2013</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex gap-8">
          <Picture
            src="/images/content/2024_Cal_Copy_Page_22_Image_0001.webp"
            alt="The Robotic Strong Arm."
            width="max-h-[25rem]"
          />
          <div class="milestone-description mt-8">
            <h3 class="milestone-title">
              USER-ADJUSTABLE WHEELCHAIR BACKREST MOUNTING HARDWARE PATENT
            </h3>
            <Description
              content="A technology to streamline backrest adjustments for users, improving simplicity, aesthetics, and incorporating essential features for commercial viability."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
