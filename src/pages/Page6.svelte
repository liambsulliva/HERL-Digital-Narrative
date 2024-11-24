<script lang="ts">
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 6 content -->
<div class="timeline-container">
  <!-- 1996 -->
  <section class="year-section">
    <h2 class="year-title">1996</h2>
    <div class="milestones-grid">
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="milestone-item">
            <h3 class="milestone-title">ZERO THROW JOYSTICK</h3>
            <div class="milestone-description">
              <Description
                content="Gave users the ability to operate their power wheelchair with 360° of control."
              />
            </div>
          </div>
          <div class="milestone-item">
            <h3 class="milestone-title">
              CDC CENTER FOR INJURY RESEARCH AND CONTROL
            </h3>
            <div class="milestone-description">
              <Description
                content="This award was bestowed on HERL along with the Department of Neurosurgery of Pitt."
              />
            </div>
          </div>
          <div class="milestone-item">
            <h3 class="milestone-title">WHEELCHAIR COMPARISON STUDY</h3>
            <div class="milestone-description">
              <Description
                content="The first in a long series of studies was completed. One study highlighted challenges with wheelchairs' quality and standards non-compliance."
                length={77}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
