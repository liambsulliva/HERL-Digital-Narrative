<script lang="ts">
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 3 content -->
<div class="timeline-container">
  <!-- 1995 -->
  <section class="year-section">
    <h2 class="year-title">1995</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex flex-row items-center gap-6">
          <div>
            <h3 class="milestone-title">SMARTWHEEL</h3>
            <Picture
              width="max-h-[22rem]"
              src="/images/content/2024_Cal_Copy_Page_06_Image_0001.webp"
              alt="Dr. Alicia Koontz with a SMARTWheel."
            />
          </div>
          <div class="milestone-description">
            <Description
              content="Revolutionized how wheelchair setups could be customized to optimize the reduction of repetitive stress."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
