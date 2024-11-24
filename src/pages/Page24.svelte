<script lang="ts">
  import Description from "../lib/Description.svelte";
  import Picture from "../lib/Picture.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <!-- 2012 -->
  <section class="year-section">
    <h2 class="year-title">2012</h2>
    <div class="milestones-grid">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex flex-col gap-4">
          <div class="milestone-item">
            <h3 class="milestone-title">VARIABLE COMPLIANCE JOYSTICK</h3>
            <div class="milestone-description">
              <Description
                content="Equipped with compensation algorithms offers adaptable control and enhanced precision in various power mobility ops."
              />
            </div>
          </div>

          <div class="milestone-item">
            <h3 class="milestone-title">ROBOTIC STRONGARM</h3>
            <div class="milestone-description">
              <Description
                content="A specialized wheelchair attachment engineered to assist electric power wheelchair users in seamless transfers to and from other surfaces."
              />
            </div>
          </div>

          <div class="milestone-item">
            <h3 class="milestone-title">MOBILE CASTER PATENT</h3>
            <div class="milestone-description">
              <Description
                content="Designed to prevent drift and flutter, ensuring enhanced tracking when a mobile device moves across a side-sloped surface."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
