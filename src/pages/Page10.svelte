<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 10 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2002</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex items-center gap-8">
          <Picture
            width="max-h-[50rem]"
            src="/images/datalogger.webp"
            alt="Pre-HERL Manual Wheelchair use in 1991."
          />
          <div class="flex flex-col">
            <h3 class="milestone-title">DATA LOGGER</h3>
            <div class="milestone-description">
              <Description
                content="The new, low-power, self-contained Data Logger developed by researchers at HERL, provides a reliable method for long-term monitoring of manual wheelchair users’ activities in real-world environments."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
