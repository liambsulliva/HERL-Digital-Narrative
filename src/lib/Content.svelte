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
  {:else if page === 2 || page === 3 || page === 4}
    <div class="content-wrapper">
      <h1 class="title">History and Milestones</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper, nisl in commodo egestas, nunc nisi aliquet nunc, eget
        venenatis nisi nisl eu nisl. Sed euismod, nisi eu ultricies
        pellentesque, ipsum nulla facilisis nisi, eu fringilla nisl nisl eu
        nisl. Donec ullamcorper, nisl in commodo egestas, nunc nisi aliquet
        nunc, eget venenatis nisi nisl eu nisl. Sed euismod, nisi eu ultricies
        pellentesque, ipsum nulla facilisis nisi, eu fringilla nisl...
      </p>
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
    max-width: 800px;
    z-index: 30;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  @media (max-width: 480px) {
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
