<script lang="ts">
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 8 content -->
<div class="timeline-container">
  <!-- 2000 -->
  <section class="year-section">
    <h2 class="year-title">2000</h2>
    <div class="milestones-grid">
      <div class="flex flex-col">
        <div class="flex md:flex-row flex-col">
          <div class="milestone-item">
            <h3 class="milestone-title">
              WHEELCHAIR ROAD LOADS AND WHOLE-BODY VIBRATION
            </h3>
            <div class="milestone-description">
              <Description
                content="Successfully addressed and reduced by inventing vibration-damping cushions, backrest fittings, and suspension elements to minimize shock, and vibration-induced injuries to the neck and back."
              />
            </div>
          </div>

          <div class="milestone-item">
            <h3 class="milestone-title">
              ASSISTIVE TECHNOLOGY CLINIC IN INDIA
            </h3>
            <div class="milestone-description">
              <Description
                content="Rory and Rosemarie Cooper worked with colleagues at the Indian Spinal Injuries Centre to establish this first-of-its-kind clinic in the region."
              />
            </div>
          </div>
        </div>

        <div class="milestone-item">
          <h3 class="milestone-title">TELE-REHABILITATION RESEARCH PROGRAM</h3>
          <div class="milestone-description">
            <Description
              content="HERL was the home of the first major iterations of this program, primarily funded by the VA."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
