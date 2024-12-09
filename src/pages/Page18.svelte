<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 17 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2010</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex flex-row items-center gap-8">
          <Picture
            width="w-[15rem]"
            src="/images/warrior-transition-handbook.webp"
            alt="Medical Rehabilitation Handbook"
          />
          <div>
            <h3 class="milestone-title">
              WARRIOR TRANSITION LEADER- MEDICAL REHABILITATION HANDBOOK
            </h3>
            <Description
              content="A valuable resource created to aid and support military personnel during career and life transitions. Over 10,000 copies have been distributed or downloaded."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
