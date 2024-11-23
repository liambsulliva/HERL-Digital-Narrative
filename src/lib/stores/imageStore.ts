import { writable } from "svelte/store";

type ImageCache = {
  [key: string]: boolean;
};

function createImageLoader() {
  const { subscribe, update } = writable<ImageCache>({});

  return {
    subscribe,
    preloadImage: (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          update((cache) => ({ ...cache, [src]: true }));
          resolve(true);
        };
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      });
    },
    isLoaded: (src: string) => {
      let cache: ImageCache = {};
      subscribe((value) => {
        cache = value;
      })();
      return cache[src] || false;
    },
  };
}

export const imageLoader = createImageLoader();
