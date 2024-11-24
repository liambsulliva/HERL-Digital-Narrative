<script lang="ts">
  // Import necessary reusable components
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 27 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2021</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">
          GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED
        </h3>
        <div class="milestone-description">
          <Description
            content="Dr. Michael Boninger (HERL Medical Director 1998-20) spearheaded a team of experts in organizing one of the most widely used and referenced documents in the field today: a Clinical Practice Guideline (CPG) on Preservation of Upper Limb Function Following Spinal Cord Injury (SCI)."
            length={264}
          />
        </div>
      </div>
      <div class="milestone-item">
        <h3 class="milestone-title">
          OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT
        </h3>
        <div class="milestone-description">
          <Description
            content="A patent was awarded for this innovative wheelchair design, focusing on effective shock absorption for both horizontal and vertical impacts during travel over uneven terrain."
          />
        </div>
      </div>
    </div>
  </section>
</div>
