<script lang="ts">
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 4 content -->
<div class="timeline-container">
  <!-- 1995 -->
  <section class="year-section">
    <h2 class="year-title">1995</h2>
    <div class="milestones-grid">
      <div class="flex flex-row gap-4">
        <div class="milestone-item flex-1">
          <h3 class="milestone-title">
            REHABILITATION ENGINEERING APPLIED TO MOBILITY
          </h3>
          <div class="milestone-description">
            <Description
              content="A textbook that set the standard for engineering textbooks in the field of rehabilitation."
            />
          </div>
        </div>

        <div class="milestone-item flex-1">
          <h3 class="milestone-title">X-BRACE</h3>
          <div class="milestone-description">
            <Description
              content="Designed to enhance performance, safety, and durability in folding wheelchairs."
            />
          </div>
        </div>

        <div class="milestone-item flex-1">
          <h3 class="milestone-title">GAMEWHEELS & GAMECYCLE</h3>
          <div class="milestone-description">
            <Description
              content="The first devices to address and incorporate exergaming for people with disabilities."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
