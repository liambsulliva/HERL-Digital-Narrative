<script lang="ts">
  import { modalStore } from './stores/modalStore';
  
  function closeModal() {
    modalStore.set({ isOpen: false, content: null });
  }
</script>

{#if $modalStore.isOpen}
  <div class="modal-backdrop" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation role="dialog" aria-modal="true">
      <button class="close-button" on:click={closeModal}>×</button>
      <p>{$modalStore.content}</p>
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
    padding: 2rem;
    border-radius: 4px;
    width: 90%;
    max-width: 800px;
    margin: 2rem;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style> 