<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2011 -->
  <section class="year-section">
    <h2 class="year-title">2011</h2>
    <div class="milestones-grid">
      <div class="flex items-center gap-12 mt-4">
        <Picture
          src="/images/content/2024_Cal_Copy_Page_18_Image_0001.webp"
          alt="Inaugurating the Bakery Square site, 2011."
          width="h-[10rem]"
        />
        <div class="milestone-description">
          <h3 class="milestone-title">HERL MOVES TO BAKERY SQUARE</h3>
          <Description
            content="In July 2011, HERL relocated from its original research lab at the VA’s Highland Drive facility to the newly renovated Bakery Square. This move represented a pivotal moment for HERL, offering its investigators, staff, and faculty the chance to establish a state-of-the-art facility tailored to their specific requirements. The transition brought about significant improvements, including the addition of a spacious laboratory bay and a dedicated machine shop area. HERL celebrated this milestone with an open house on August 4th, where they welcomed family, friends, and supporters from the VA and Pitt communities."
            length={300}
          />
        </div>
      </div>
    </div>
  </section>
</div>
