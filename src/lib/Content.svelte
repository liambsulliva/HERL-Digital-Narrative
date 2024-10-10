<script lang="ts">
  export let page = 0;
</script>

<div class="content-container">
  {#if page === 1}
    <div class="content-wrapper">
      <div class="content-section">
        <h1 class="title">Our Mission</h1>
        <p class="description">
          To continuously improve the mobility and function of people with
          disabilities through advanced engineering in clinical research and
          medical rehabilitation.
        </p>
      </div>
      <div class="content-section">
        <h1 class="title">Our Vision</h1>
        <p class="description">
          To create a world where all people with disabilities have unencumbered
          mobility and function so that they can fully participate in and
          contribute to society. Left to right: Edward DesLauriers (KPVA), Dr.
          Wes Rohr (Pitt), John Bollinger (PVA), Dr. Thomas P. Detre, (Pitt),
          Dr. Rory A. Cooper (VA/Pitt), Laura Miller (VA), Dr. Charles Robinson
          (Pitt).
        </p>
      </div>
    </div>
  {:else if page === 2}
    <div class="content-wrapper">
      <h1 class="title">History and Milestones</h1>
      <div class="history">
        <h2 class="sub-title">1994: THE BEGINNING OF HERL’S JOURNEY</h2>
        <p class="sub-description">
          A monumental achievement for veterans and people with disabilities.
          The Human Engineering Research Laboratories (HERL) teamed up with the
          University of Pittsburgh, the Paralyzed Veterans of America (PVA), and
          the Department of Veterans Affairs (VA) to establish a pioneering lab.
          This new space was to be located within a VA facility in Highland
          Drive. The partnership brought together the expertise of researchers,
          engineers, and medical professionals which leveraged their collective
          knowledge and resources.This collaboration set the stage for
          innovative advancements in assistive technology that make a profound
          impact for individuals with disabilities.
        </p>
      </div>
      <h2 class="sub-title">1995</h2>
      <div class="grid-container">
        <div class="milestone-1">
          <p>
            SMARTWHEEL: Revolutionized how wheelchair setups could be customized
            to optimize the reduction of repetitive stress.
          </p>
        </div>
        <div class="milestone-2">
          <p>
            REHABILITATION ENGINEERING APPLIED TO MOBILITY: A textbook that set
            the standard for engineering textbooks in the field of
            rehabilitation.
          </p>
        </div>
        <div class="milestone-3">
          <p>
            X-BRACE: Designed to enhance performance, safety, and durability in
            folding wheelchairs.
          </p>
        </div>
        <div class="milestone-4">
          <p>
            GAMEWHEELS & GAMECYCLE: The first devices to address and incorporate
            exergaming for people with disabilities.
          </p>
        </div>
      </div>
    </div>
  {:else if page === 3}
    <h2 class="sub-title">1996</h2>
    <div class="grid-container">
      <div class="milestone-5">
        <p>
          PUSHRIM-ACTIVATED POWER-ASSIST WHEELCHAIR (PAPAW): A joint effort
          between Yamaha and HERL, it contributed to significant advancements in
          wheelchair tech.
        </p>
      </div>
      <div class="milestone-6">
        <p>
          ZERO THROW JOYSTICK: Gave users the ability to operate their power
          wheelchair with 360° of control.
        </p>
      </div>
      <div class="milestone-7">
        <p>
          CDC CENTER FOR INJURY RESEARCH AND CONTROL: This award was bestowed on
          HERL along with the Department of Neurosurgery of Pitt.
        </p>
      </div>
      <div class="milestone-8">
        <p>
          WHEELCHAIR COMPARISON STUDY: The first in a long series of studies was
          completed. One study highlighted challenges with wheelchairs’ quality
          and standards non-compliance.
        </p>
      </div>
    </div>
    <div class="grid-container">
      <h2 class="sub-title">1998</h2>
      <div class="grid-container">
        <div class="milestone-9">
          <p>
            WHEELCHAIR SELECTION AND CONFIGURATION: This published book is the
            most cited text dedicated to wheelchair design and clinical service
            guidance, being translated in six different languages.
          </p>
        </div>
        <div class="milestone-10">
          <p>
            NATIONAL VETERAN WHEELCHAIR GAMES: Pittsburgh hosted the NVWG and
            was given its first VA R&D Center of Excellence for Wheelchairs and
            Associated Rehabilitation Engineering (WARE) award. The beginning of
            a 25+ year legacy..
          </p>
        </div>
      </div>
      <h2 class="sub-title">2000</h2>
      <div class="grid-container">
        <div class="milestone-11">
          <p>
            WHEELCHAIR ROAD LOADS AND WHOLE-BODY VIBRATION: Successfully
            addressed and reduced by inventing vibration-damping cushions,
            backrest fittings, and suspension elements to minimize shock, and
            vibration-induced injuries to the neck and back.
          </p>
        </div>
        <div class="milestone-12">
          <p>
            ASSISTIVE TECHNOLOGY CLINIC IN INDIA: Rory and Rosemarie Cooper
            worked with colleagues at the Indian Spinal Injuries Centre to
            establish this first-of- its-king clinic in the region.
          </p>
        </div>
        <div class="milestone-12">
          <p>
            TELE-REHABILITATION RESEARCH PROGRAM: HERL was the home of the first
            major iterations of this program, primarily funded by the VA.
          </p>
        </div>
      </div>
    </div>
  {:else if page === 4}
    <div class="grid-container">
      <div class="milestone-8">
        <h2 class="sub-title">2001</h2>
        <p>
          ERGONOMIC DUAL SURFACEWHEELCHAIR PUSHRIM: The Ergonomic Pushrim (left)
          developed by HERL’s team, marked a significant leap from traditional
          wheelchair handrims. Ergonomic hand rims have successfully tackled
          traditional push rim issues by offering a better hand fit, enhancing
          mechanical efficiency during wheelchair propulsion.
        </p>
      </div>
      <div class="milestone-9">
        <h2 class="sub-title">2002</h2>
        <p>
          DATA LOGGER: The new, low-power, self-contained Data Logger developed
          by researchers at HERL, provides a reliable method for
          long-termmonitoring of manual wheelchair users’ activities in
          real-worldenvironments.
        </p>
      </div>
      <div class="milestone-10">
        <p>
          PNEUMATIC SUSPENSION CASTER WHEELCHAIR FORK: Addressed the limitations
          of traditional shock absorption systems by offering a comprehensive
          design that adeptly handles both vertical andhorizontal impact forces.
          By incorporating a sturdy caster fork, it ensures long-lasting
          durability for wheelchairs and similar devices.
        </p>
      </div>
      <div class="milestone-11">
        <h2 class="sub-title">2003</h2>
        <p>
          VIRTUAL SEATING COACH: An innovative technology providing personalized
          wheelchair seating recommendations for enhanced comfort and support,
          brought to commercial market by PERMOBIL.
        </p>
      </div>
      <div class="milestone-12">
        <p>
          GLIDE CASTER FORK: Based on oblique angle suspension that maximizes
          vibration dampening in both horizontal and vertical directions, and
          minimizes vibration transfer to the body of the rider, was brought to
          the Market by TiLite, LLC.
        </p>
      </div>
      <div class="milestone-13">
        <h2 class="sub-title">2004</h2>
        <p>
          STATE OF THE SCIENCE SYMPOSIUM SERIES STARTS: The State-of-the-Science
          (SoS) symposia started after Dr. Paul Pasquina and Dr. Rory Cooper had
          a discussion about the needs of rehabilitation healthcare providers,
          physical medicine and rehabilitation medicine residents to learn and
          integrate the most current knowledge and practiceto provide the
          highest level of care to wounded, injured, and ill service members in
          light of the patients coming to Walter Reed Army Medical Center and
          later Walter Reed National Military Medical Center (WRNMC). The SoS
          brings experts to WRNMC so that there can be greater participation by
          WRNMC providers and residents, and exposes experts to WRNMC and
          Uniformed Services University of Health Sciences.
        </p>
      </div>
      <div class="milestone-14">
        <h2 class="sub-title">2005</h2>
        <p>
          GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED: Dr. Michael Boninger
          (HERL Medical Director 1998-20) spearheaded a team of experts in
          organizing one of the most widely used and referenced documents in the
          fi eld today: a Clinical Practice Guideline (CPG) on Preservation of
          Upper Limb Function Following Spinal Cord Injury (SCI).
        </p>
      </div>
      <div class="milestone-15">
        <p>
          OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT A patent was awarded for
          this innovative wheelchair design, focusing on eff ective shock
          absorption for both horizontal and vertical impacts during travel over
          uneven terrain.
        </p>
      </div>
    </div>
  {:else if page === 5}
    <div class="content-wrapper">
      <h1 class="title">Parallel Paths</h1>
      <div class="parallel-paths">
        <div class="path"></div>
        <div class="path"></div>
        <div class="path"></div>
      </div>
    </div>
  {/if}
</div>

<style>
  .content-container {
    position: absolute;
    top: 50vh; /* Increased from 35% to push down */
    left: 50%;
    transform: translate(
      -50%,
      -75%
    ); /* Adjusted to center vertically based on new top */
    width: 80%;
    max-width: 1200px;
    z-index: 30;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }

  .sub-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .content-section {
    text-align: center;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.5;
  }

  .parallel-paths {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .path {
    width: 24rem;
    height: 3rem;
    background: #4299e1;
    border-radius: 9999px;
  }

  @media (max-width: 480px), (max-height: 600px) {
    .content-container {
      width: 90%;
      padding: 1rem;
      top: 55%; /* Adjusted to maintain spacing on smaller screens */
      transform: translate(-50%, -55%);
    }

    .title {
      font-size: 1.5rem;
    }

    .description {
      font-size: 0.875rem;
    }

    .parallel-paths .path {
      width: 18rem;
      height: 2.5rem;
    }
  }

  @media (max-width: 768px), (max-height: 800px) {
    .content-container {
      width: 85%;
      padding: 1.5rem;
      top: 50%; /* Adjusted to maintain spacing on medium screens */
      transform: translate(-50%, -50%);
    }

    .title {
      font-size: 1.75rem;
    }

    .description {
      font-size: 0.95rem;
    }

    .parallel-paths .path {
      width: 20rem;
      height: 2.75rem;
    }
  }

  @media (max-width: 1024px), (max-height: 900px) {
    .content-container {
      width: 80%;
      padding: 2rem;
      top: 45%; /* Slight adjustment for larger screens */
      transform: translate(-50%, -20%);
    }

    .title {
      font-size: 1.875rem;
    }

    .description {
      font-size: 0.975rem;
    }

    .parallel-paths .path {
      width: 22rem;
      height: 2.8rem;
    }
  }

  @media (max-height: 600px) {
    .content-container {
      top: 55%; /* Increased to prevent clipping on very short heights */
      transform: translate(-50%, -40%);
    }

    .title {
      font-size: 1.25rem;
    }

    .description {
      font-size: 0.8rem;
    }

    .parallel-paths .path {
      width: 16rem;
      height: 2.3rem;
    }
  }

  @media (max-width: 500px) {
    .title {
      font-size: 1.25rem;
    }

    .description {
      font-size: 0.8rem;
    }

    .parallel-paths .path {
      width: 16rem;
      height: 2.3rem;
    }
  }
</style>
