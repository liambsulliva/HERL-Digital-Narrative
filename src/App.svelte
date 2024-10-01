<script lang="ts">
  import ModeSwitcher from "./lib/ModeSwitcher.svelte";
  import FlipBtn from "./lib/FlipBtn.svelte";
  import PittBanner from "./lib/PittBanner.svelte";
  import VABanner from "./lib/VABanner.svelte";
  import Book from "./lib/Book.svelte";

  let bookOpen = false;
  $: if (bookOpen) {
    const header = document.querySelector("h1");
    const subheading = document.querySelector("p");
    if (header && subheading) {
      header.style.opacity = "0";
      subheading.style.opacity = "0";

      setTimeout(() => {
        header.classList.add("hidden");
        subheading.classList.add("hidden");
      }, 500);
    }
  } else {
    const header = document.querySelector("h1");
    const subheading = document.querySelector("p");
    if (header && subheading) {
      header.classList.remove("hidden");
      subheading.classList.remove("hidden");
      setTimeout(() => {
        header.style.opacity = "1";
        subheading.style.opacity = "1";
      }, 10); // Delay for interpreter to remove class
    }
  }
</script>

<header class="flex p-3 w-screen items-center justify-between">
  <div class="flex items-center gap-1">
    <PittBanner />
    <VABanner />
  </div>
  <div class="flex items-center gap-1 p-2">
    <!-- <FlipBtn /> -->
    <ModeSwitcher />
  </div>
</header>
<main
  class="flex flex-col items-center justify-center font-rubik p-2 mx-auto text-center"
>
  <h1 class="uppercase text-4xl leading-normal font-semibold">
    Human Engineering Research Labs
  </h1>
  <p class="mt-1 mb-4 text-sm text-gray-600 dark:text-gray-300">
    A journey through 30 years of innovation.
  </p>
  <Book bind:isOpen={bookOpen} />
</main>

<style lang="postcss">
  .font-rubik {
    font-family: "Rubik", Helvetica, sans-serif, system-ui;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  p {
    transition: opacity 0.5s ease-in-out;
  }
</style>
