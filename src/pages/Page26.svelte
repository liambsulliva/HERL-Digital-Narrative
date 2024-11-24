<script lang="ts">
  import Description from "../lib/Description.svelte";
  import "../styles/pageStyles.css";
</script>

<!-- Main container for Page 13 content -->
<div class="timeline-container">
  <section class="year-section">
    <h2 class="year-title">2015</h2>
    <div class="milestones-grid">
      <div class="milestone-item">
        <h3 class="milestone-title">NATIONAL ACADEMY OF INVENTORS</h3>
        <div class="milestone-description">
          <Description
            content="Dr. Cooper elected Fellow of the NAI, partnered with the International Society of Wheelchair Professionals, whose mission is to serve as a global resource for wheelchair service standards and provision through advocacy, education, standards, evidence-based practice, innovation and a platform for information exchange."
            length={124}
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">
          VA TECHNOLOGY TRANSFER ASSISTANCE PROGRAM
        </h3>
        <div class="milestone-description">
          <Description
            content="Start of the project which engages in a wide range of healthcare, research, and support initiatives for veterans, with a core mission of enhancing veterans’ quality of life and healthcare outcomes."
            length={135}
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">
          SAMUEL E. HEYMAN SERVICE TO AMERICA MEDAL
        </h3>
        <div class="milestone-description">
          <Description
            content="Also known as the “Sammies”, this premier awards program is considered the “Oscar” of public service."
          />
        </div>
      </div>

      <div class="milestone-item">
        <h3 class="milestone-title">DRIVING EVALUATION AND TRAINING PATENT</h3>
        <div class="milestone-description">
          <Description
            content="
            Covers techniques for assessing
            and enhancing driving skills through evaluation and training
            processes.
          "
          />
        </div>
      </div>
    </div>
  </section>
</div>
