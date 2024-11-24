<script lang="ts">
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 11 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2003</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">VIRTUAL SEATING COACH</h3>
        <div class="milestone-description">
          <Description
            content="An innovative technology providing personalized wheelchair seating recommendations for enhanced comfort and support, brought to commercial market by PERMOBIL."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">GLIDE CASTER FORK</h3>
        <div class="milestone-description">
          <Description
            content="Based on oblique angle suspension that maximizes vibration dampening in both horizontal and vertical directions, and minimizes vibration transfer to the body of the rider, was brought to the Market by TiLite, LLC."
          />
        </div>
      </div>
    </div>
  </section>
</div>
