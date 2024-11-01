import { writable } from 'svelte/store';

type ModalState = {
    isOpen: boolean;
    content: string | null;
}

export const modalStore = writable<ModalState>({
    isOpen: false,
    content: null
}); 