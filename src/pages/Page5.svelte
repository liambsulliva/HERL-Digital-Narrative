<script lang="ts">
  import Picture from "../lib/Picture.svelte";
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 5 content -->
<div class="timeline-container">
  <!-- 1996 -->
  <section class="year-section">
    <h2 class="year-title">1996</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex flex-row items-center gap-6">
          <div>
            <h3 class="milestone-title">
              PUSHRIM-ACTIVATED POWER-ASSIST WHEELCHAIR (PAPAW)
            </h3>
            <Picture
              src="/images/content/2024_Cal_Copy_Page_08_Image_0001.webp"
              alt="An engineer on the PAPAW."
            />
          </div>
          <div class="milestone-description">
            <Description
              content="A joint effort between Yamaha and HERL, it contributed to significant advancements in wheelchair tech."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
