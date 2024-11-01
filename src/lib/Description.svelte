<script lang="ts">
  import { modalStore } from "./stores/modalStore";

  export let content: string;
  export let length = 300;

  const truncate = (description: string, maxLength: number) => {
    if (description.length <= maxLength) {
      return description;
    }
    const truncated = description.substring(0, maxLength - 3);
    return truncated + "...";
  };

  const openModal = () => {
    modalStore.set({ isOpen: true, content });
  };
</script>

<button on:click={openModal} style="cursor: pointer;" aria-label="description">
  {truncate(content, length)}
</button>
