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
        <Picture
          width="w-[15rem]"
          src="/images/virtualseatingcoach.webp"
          alt=""
        />
        <h3 class="milestone-title">VIRTUAL SEATING COACH</h3>
        <div class="milestone-description">
          <Description
            content="Initiated a series of connected devices leveraging AI to promote adherence to clinical guidelines."
          />
        </div>
      </div>
    </div>
  </section>
</div>
