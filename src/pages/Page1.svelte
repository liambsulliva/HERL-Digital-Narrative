<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 1 content -->
<div class="mission-vision-container">
  <Picture
    src="/images/content/2024_Cal_Copy_Page_04_Image_0001.webp"
    alt="Left to right: Edward DesLauriers (KPVA), Dr. Wes Rohr (Pitt) , John Bollinger (PVA), Dr. Thomas P. Detre, (Pitt) ,Dr. Rory A. Cooper (VA/Pitt) , Laura Miller (VA), Dr. Charles Robinson (Pitt)."
    width="w-[1500px]"
  />
  <div>
    <section class="info-section">
      <h2 class="section-title">OUR MISSION</h2>
      <div class="section-description">
        <Description
          content="To continuously improve the mobility and function of people with disabilities through advanced engineering in clinical research and medical rehabilitation."
        />
      </div>
    </section>

    <section class="info-section">
      <h2 class="section-title">OUR VISION</h2>
      <div class="section-description">
        <Description
          content="To create a world where all people with disabilities have unencumbered mobility and function so that they can fully participate in and contribute to society. Left to right: Edward DesLauriers (KPVA), Dr. Wes Rohr (Pitt), John Bollinger (PVA), Dr. Thomas P. Detre (Pitt), Dr. Rory A. Cooper (VA/Pitt), Laura Miller (VA), Dr. Charles Robinson (Pitt)."
          length={238}
        />
      </div>
    </section>
  </div>
</div>
