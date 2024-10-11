<script lang="ts">
  import { onMount } from "svelte";
  import FrontCover from "../images/Cover-Front.webp";
  import BackCover from "../images/Cover-Back.webp";
  import BookTexture from "../images/BookTexture.webp";
  import NextPageBtn from "./NextPageBtn.svelte";
  import LastPageBtn from "./LastPageBtn.svelte";

  export let class_ = "";
  let book: HTMLElement;

  let isHovering = false;
  export let isOpen = false;
  export let isFlipped = false;
  export let page = 0;

  let tiltX = 9;
  let tiltY = -9;
  let rotateY = 0;
  let translateX = 0;
  let translateY = 0;
  let spineDisplay = "block";
  let paperBlockDisplay = "block";

  const totalPages = 14;
  let pages: HTMLElement[] = [];

  $: {
    if (!isOpen) {
      rotateY = isFlipped ? 180 : 0;
    } else if (isFlipped) {
      isFlipped = false;
      rotateY = 0;
    }
  }

  $: {
    if (isOpen) {
      pages.forEach((pageElement, index) => {
        const pageNum = index + 1;
        if (pageNum <= page) {
          const angle = -165 + (pageNum - 1) * 1.5;
          pageElement.style.transform = `rotateY(${angle}deg) scale(0.75)`;
          pageElement.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        } else if (pageNum === page + 1) {
          const angle = -35 + (pageNum - 2) * 1.5;
          pageElement.style.transform = `rotateY(${angle}deg) scale(0.75)`;
          pageElement.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        } else {
          const angle = -30 + (pageNum - 3) * 1.5;
          pageElement.style.transform = `rotateY(${angle}deg) scale(0.75)`;
          pageElement.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        }
      });
    } else {
      pages.forEach((pageElement) => {
        pageElement.style.transform = `rotateY(0) scale(1)`;
        pageElement.style.boxShadow = `none`;
      });
    }
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isHovering || isOpen) return;
    const rect = book.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    tiltX = ((y - centerY) / centerY) * 10;
    tiltY = ((centerX - x) / centerX) * 10;
  }

  function handleMouseLeave() {
    isHovering = false;
    if (!isOpen) {
      tiltX = 9;
      tiltY = -9;
    }
  }

  function handleMouseEnter() {
    if (!isOpen) isHovering = true;
  }

  function handleArrowKey(event: KeyboardEvent) {
    if (
      (event.key === "ArrowRight" && !isOpen) ||
      (event.key === "ArrowLeft" && page <= 1 && isOpen)
    ) {
      handleOpen();
    }
  }

  function handleOpen() {
    isOpen = !isOpen;
    if (isOpen) {
      page = 1;
      tiltX = 0;
      tiltY = 0;
      translateX = 50;
      spineDisplay = "none";
      paperBlockDisplay = "none";
    } else {
      page = 0;
      translateX = 0;
    }

    setTimeout(() => {
      if (isOpen) {
        translateY = 80;
        tiltX = 50;
      } else {
        translateY = 0;
        tiltX = 0;
        tiltY = 0;
      }
    }, 500);

    setTimeout(() => {
      if (!isOpen) {
        spineDisplay = "block";
        paperBlockDisplay = "block";
        tiltX = 9;
        tiltY = isFlipped ? 9 : -9;
      }
    }, 550);
  }

  onMount(() => {
    book.addEventListener("mousemove", handleMouseMove);
    book.addEventListener("mouseenter", handleMouseEnter);
    book.addEventListener("mouseleave", handleMouseLeave);
    book.addEventListener("click", handleOpen);
    window.addEventListener("keydown", handleArrowKey);
    return () => {
      book.removeEventListener("mousemove", handleMouseMove);
      book.removeEventListener("mouseenter", handleMouseEnter);
      book.removeEventListener("mouseleave", handleMouseLeave);
      book.removeEventListener("click", handleOpen);
      window.removeEventListener("keydown", handleArrowKey);
    };
  });
</script>

<div
  bind:this={book}
  class="book {class_} {isOpen ? 'open' : ''} {isFlipped ? 'flipped' : ''}"
  style="transform: rotateX({tiltX}deg) rotateY({tiltY +
    rotateY}deg) translateX({translateX}%) translateY({translateY}%)"
>
  <div class="front">
    <img
      src={FrontCover}
      alt="Front Cover"
      class="rounded-r w-full h-full object-cover"
    />
  </div>
  <div class="back">
    <img
      src={BackCover}
      alt="Back Cover"
      class="rounded-r w-full h-full object-cover"
    />
  </div>
  <div class="spine" style="display: {spineDisplay};"></div>
  <div class="paper-block" style="display: {paperBlockDisplay};"></div>
  {#each Array(totalPages) as _, i}
    <div bind:this={pages[i]} class="page" style="z-index: {totalPages - i};">
      {#if i + 1 === page}
        <LastPageBtn bind:page />
      {:else if i + 1 === page + 1}
        <NextPageBtn bind:page />
      {/if}
      <img
        src={BookTexture}
        alt="Book Texture"
        class="absolute inset-0 w-full h-full object-cover opacity-40"
      />
    </div>
  {/each}
</div>

<style>
  .book {
    transform-style: preserve-3d;
    position: relative;
    margin: 5vmin;
    cursor: pointer;
    transition:
      transform 0.5s ease-out,
      width 0.5s ease-out,
      height 0.5s ease-out;
    max-width: 75vw;
    height: 52.5vmin;
    width: 75vmin;
    z-index: 40;
  }

  .book.open {
    max-width: 65vw;
    position: fixed;
    bottom: 5rem;
  }

  .front,
  .back,
  .spine,
  .paper-block,
  .page {
    position: absolute;
    top: 0;
    left: 0;
    transition:
      transform 0.5s ease,
      box-shadow 0.35s ease-in-out;
  }

  .page,
  .front,
  .back {
    transform-origin: left center;
  }

  .book:hover {
    box-shadow: none;
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
  }

  .spine {
    width: 55px;
    height: 100%;
    left: -5%;
    background: #252525;
    transform: rotateY(-90deg) translateX(-40%);
    transform-style: preserve-3d;
  }

  .spine::before,
  .spine::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #252525;
  }

  .spine::before {
    left: -5px;
    transform: rotateY(-180deg);
  }

  .spine::after {
    right: -5px;
    transform: rotateY(180deg);
  }

  .front {
    z-index: 2;
    transform: translateZ(10px);
  }

  .back {
    z-index: 1;
    background: #624a2e;
    transform: translateZ(-55px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .paper-block {
    width: 95%;
    height: 98%;
    top: 1%;
    left: 2.5%;
    background: #f5f5f5;
    transform: translateZ(-54px);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .page {
    width: 98%;
    height: 98%;
    top: 1%;
    left: 1%;
    background: #fdfdfd;
    transform: translateZ(0);
  }

  .front,
  .back,
  .paper-block,
  .page {
    border-radius: 0 5px 5px 0;
  }

  .spine {
    border-radius: 5px 0 0 5px;
  }

  .book.open:hover {
    box-shadow: none;
  }

  .book.open .front {
    transform: rotateY(-170deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book.open .back {
    transform: rotateY(-10deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 600px) {
    .spine {
      transform: rotateY(-90deg) translateX(-40%) translateZ(10px);
    }
  }
</style>