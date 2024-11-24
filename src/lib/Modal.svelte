<script lang="ts">
  import { modalStore } from "./stores/modalStore";

  function closeModal() {
    modalStore.set({ isOpen: false, content: null });
  }
</script>

{#if $modalStore.isOpen}
  <div class="modal-backdrop" on:click={closeModal}>
    <div
      class="modal-content"
      on:click|stopPropagation
      role="dialog"
      aria-modal="true"
    >
      <button class="close-button" on:click={closeModal}>×</button>
      <div class="modal-text">{$modalStore.content}</div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal-content {
    background-color: white;
    padding: 3rem;
    border-radius: 4px;
    width: 95%;
    max-width: 1200px;
    margin: 1rem;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }

  .modal-text {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #383844;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
  }
</style>
