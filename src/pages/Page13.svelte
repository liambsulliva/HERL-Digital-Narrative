<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2005 -->
  <section class="year-section">
    <h2 class="year-title">2005</h2>

    <div class="milestone-item">
      <div class="flex gap-8 items-center">
        <Picture
          src="/images/2024_Cal_Copy_Page_14_Image_0001.webp"
          alt="Inaugurating the Bakery Square site, 2011."
          width="w-[35rem]"
        />
        <div class="flex flex-col">
          <h3 class="milestone-title">
            GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED
          </h3>
          <Description
            content="Dr. Michael Boninger (HERL Medical Director 1998-20) spearheaded a team of experts in organizing one of the most widely used and referenced documents in the field today: a Clinical Practice Guideline (CPG) on Preservation of Upper Limb Function Following Spinal Cord Injury (SCI)."
          />
        </div>
      </div>
    </div>
  </section>
</div>
