<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2009 -->
  <section class="year-section">
    <h2 class="year-title">2009</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <div class="flex flex-row items-center gap-8">
          <div class="milestone-description flex flex-col gap-2">
            <h3 class="milestone-title">
              CARE OF THE COMBAT AMPUTEE TEXTBOOK PUBLISHED
            </h3>
            <Description
              content="The “Care of the Combat Amputee” textbook, revered as the “gold standard” for military healthcare providers, plays a pivotal role in improving the quality of care for Veterans with traumatic amputations. By providing standardized guidelines, it ensures that medical professionals are equipped with the knowledge and skills necessary to deliver the best possible care."
            />
            <Description
              content="In the long-term care and rehabilitation domain, it emphasizes personalized approaches that consider the unique needs of each individual."
            />
          </div>
          <Picture
            src="/images/2024_Cal_Copy_Page_16_Image_0001.webp"
            alt="Care of the Combat Amputee Textbook."
            width="w-[50rem]"
          />
        </div>
      </div>
    </div>
  </section>
</div>
