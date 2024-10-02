<script lang="ts">
  export let page = 0;
</script>

<div class="absolute w-full h-full -z-10">
  {#if page === 1}
    <div class="flex items-center justify-center gap-12 py-24 px-48">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold">Our Mission</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
          To continuously improve the mobility and function of people with
          disabilities through advanced engineering in clinical research and
          medical rehabilitation.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold">Our Vision</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
          To create a world where all people with disabilities have unencumbered
          mobility and function so that they can fully participate in and
          contribute to society.Left to right: Edward DesLauriers (KPVA), Dr.
          Wes Rohr (Pitt) , John Bollinger (PVA), Dr. Thomas P. Detre, (Pitt)
          ,Dr. Rory A. Cooper (VA/Pitt) , Laura Miller (VA), Dr. Charles
          Robinson (Pitt).
        </p>
      </div>
    </div>
  {:else if page === 2 || page === 3 || page === 4}
    <div class="flex flex-col items-center justify-center py-24 px-48">
      <h1 class="text-4xl font-semibold">History and Milestones</h1>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
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
    <div class="flex flex-col items-center justify-center py-24 px-48">
      <h1 class="text-4xl font-semibold">Parallel Paths</h1>
      <div class="flex flex-col gap-4 p-6">
        <div class="w-96 h-12 bg-blue-500 rounded-full"></div>
        <div class="w-96 h-12 bg-blue-500 rounded-full"></div>
        <div class="w-96 h-12 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  {/if}
</div>
