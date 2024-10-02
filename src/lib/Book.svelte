<script lang="ts">
  import { onMount } from "svelte";
  import FrontCover from "../images/Cover-Front.webp";
  import NextPageBtn from "./NextPageBtn.svelte";
  import LastPageBtn from "./LastPageBtn.svelte";

  export let class_ = "";
  let book: HTMLElement;

  let isHovering = false;
  export let isOpen = false;
  let frontPage = 0;
  let backPage = 0;

  $: switch (backPage) {
    case 1:
      const page1Element: HTMLElement | null = document.querySelector(`.page1`);
      if (page1Element) {
        page1Element.style.transform = `rotateY(-165deg) scale(0.75)`;
        page1Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    case 2:
      const page2Element: HTMLElement | null = document.querySelector(`.page2`);
      if (page2Element) {
        page2Element.style.transform = `rotateY(-160deg) scale(0.75)`;
        page2Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    case 3:
      const page3Element: HTMLElement | null = document.querySelector(`.page3`);
      if (page3Element) {
        page3Element.style.transform = `rotateY(-155deg) scale(0.75)`;
        page3Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    case 4:
      const page4Element: HTMLElement | null = document.querySelector(`.page4`);
      if (page4Element) {
        page4Element.style.transform = `rotateY(-150deg) scale(0.75)`;
        page4Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    case 5:
      const page5Element: HTMLElement | null = document.querySelector(`.page5`);
      if (page5Element) {
        page5Element.style.transform = `rotateY(-145deg) scale(0.75)`;
        page5Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    default:
      setTimeout(() => {
        if (!isOpen) {
          for (let i = 1; i <= 6; i++) {
            const pageElement: HTMLElement | null = document.querySelector(
              `.page${i}`,
            );
            if (pageElement) {
              pageElement.style.transform = `rotateY(0) scale(1)`;
              pageElement.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
            }
          }
        }
      }, 500);
      break;
  }

  $: switch (frontPage) {
    case 2:
      const page2Element: HTMLElement | null = document.querySelector(`.page2`);
      if (page2Element) {
        page2Element.style.transform = `rotateY(-35deg) scale(0.75)`;
        page2Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    case 3:
      const page3Element: HTMLElement | null = document.querySelector(`.page3`);
      if (page3Element) {
        page3Element.style.transform = `rotateY(-30deg) scale(0.75)`;
        page3Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    case 4:
      const page4Element: HTMLElement | null = document.querySelector(`.page4`);
      if (page4Element) {
        page4Element.style.transform = `rotateY(-25deg) scale(0.75)`;
        page4Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    case 5:
      const page5Element: HTMLElement | null = document.querySelector(`.page5`);
      if (page5Element) {
        page5Element.style.transform = `rotateY(-20deg) scale(0.75)`;
        page5Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
      break;
    default:
      setTimeout(() => {
        if (!isOpen) {
          for (let i = 1; i <= 6; i++) {
            const pageElement: HTMLElement | null = document.querySelector(
              `.page${i}`,
            );
            if (pageElement) {
              pageElement.style.transform = `rotateY(0) scale(1)`;
              pageElement.style.boxShadow = `none`;
            }
          }
        }
      }, 500);
      break;
  }

  // Applicable when let isOpen = false;
  let tiltX = 9;
  let tiltY = -9;
  let translateX = 0;
  let translateY = 0;
  let spineDisplay = "block";
  let paperBlockDisplay = "block";

  function handleMouseMove(event: MouseEvent) {
    if (!isHovering || isOpen) return;
    const rect = book.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    tiltX = ((y - centerY) / centerY) * 10;
    tiltY = ((centerX - x) / centerX) * 10;
    //console.log(tiltX, tiltY);
  }

  function handleMouseEnter() {
    if (!isOpen) isHovering = true;
  }

  function handleMouseLeave() {
    isHovering = false;
    if (!isOpen) {
      tiltX = 9;
      tiltY = -9;
    }
  }

  function handleClick() {
    isOpen = !isOpen;
    if (isOpen) {
      backPage = 1;
      frontPage = 2;
      tiltX = 0;
      tiltY = 0;
      translateX = 50;
      spineDisplay = "none";
      paperBlockDisplay = "none";
      const page1Element: HTMLElement | null = document.querySelector(`.page1`);
      const page2Element: HTMLElement | null = document.querySelector(`.page2`);
      const page3Element: HTMLElement | null = document.querySelector(`.page3`);
      const page4Element: HTMLElement | null = document.querySelector(`.page4`);
      const page5Element: HTMLElement | null = document.querySelector(`.page5`);
      const page6Element: HTMLElement | null = document.querySelector(`.page6`);
      if (
        page1Element &&
        page2Element &&
        page3Element &&
        page4Element &&
        page5Element &&
        page6Element
      ) {
        page1Element.style.transform = `rotateY(-165deg) scale(0.75)`;
        page1Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        page2Element.style.transform = `rotateY(-35deg) scale(0.75)`;
        page2Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        page3Element.style.transform = `rotateY(-30deg) scale(0.75)`;
        page3Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        page4Element.style.transform = `rotateY(-25deg) scale(0.75)`;
        page4Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        page5Element.style.transform = `rotateY(-20deg) scale(0.75)`;
        page5Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
        page6Element.style.transform = `rotateY(-15deg) scale(0.75)`;
        page6Element.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
      }
    } else {
      backPage = 0;
      frontPage = 0;
      translateX = 0;
      if (!isOpen) {
        for (let i = 1; i <= 6; i++) {
          const pageElement: HTMLElement | null = document.querySelector(
            `.page${i}`,
          );
          if (pageElement) {
            pageElement.style.transform = `rotateY(0) scale(1)`;
            pageElement.style.boxShadow = `0 1em 3em 0 rgba(0, 0, 0, 0.2)`;
          }
        }
      }
    }
    // Wait for initial animation to finish before setting down/picking up
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
        tiltY = -9;
      }
    }, 550);
  }

  onMount(() => {
    book.addEventListener("mousemove", handleMouseMove);
    book.addEventListener("mouseenter", handleMouseEnter);
    book.addEventListener("mouseleave", handleMouseLeave);
    book.addEventListener("click", handleClick);
    return () => {
      book.removeEventListener("mousemove", handleMouseMove);
      book.removeEventListener("mouseenter", handleMouseEnter);
      book.removeEventListener("mouseleave", handleMouseLeave);
      book.removeEventListener("click", handleClick);
    };
  });
</script>

<div
  bind:this={book}
  class="book {class_} {isOpen ? 'open' : ''}"
  style="transform: rotateX({tiltX}deg) rotateY({tiltY}deg) translateX({translateX}%) translateY({translateY}%)"
>
  <div class="front">
    <img
      src={FrontCover}
      alt="Front Cover"
      class="rounded-r w-full h-full object-cover"
    />
  </div>
  <div class="back rounded-r"></div>
  <div class="spine" style="display: {spineDisplay};"></div>
  <div class="paper-block" style="display: {paperBlockDisplay};"></div>
  {#each Array(6) as _, i}
    <div class="page{i + 1}">
      {#if i + 1 === frontPage}
        <NextPageBtn bind:frontPage bind:backPage />
      {:else if i + 1 === backPage}
        <LastPageBtn bind:frontPage bind:backPage />
      {/if}
    </div>
  {/each}
</div>

<style>
  .book {
    transform-style: preserve-3d;
    position: relative;
    margin: 5vmin;
    cursor: pointer;
    transition: transform 0.5s ease-out;
    height: 52.5vmin;
    width: 75vmin;
  }

  .front,
  .back,
  .spine,
  .paper-block,
  .page1,
  .page2,
  .page3,
  .page4,
  .page5,
  .page6 {
    position: absolute;
    top: 0;
    left: 0;
    transition:
      transform 0.5s ease,
      box-shadow 0.35s ease-in-out;
  }

  .page1,
  .page2,
  .page3,
  .page4,
  .page5,
  .page6,
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
    background: #624a2e;
    transform: rotateY(-90deg) translateX(-40%);
    transform-style: preserve-3d;
  }

  .spine::before,
  .spine::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #4a3923;
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

  .page1,
  .page2,
  .page3,
  .page4,
  .page5,
  .page6 {
    width: 98%;
    height: 98%;
    top: 1%;
    left: 1%;
  }

  .page1 {
    background: #efefef;
    transform: translateZ(8px);
  }
  .page2 {
    background: #efefef;
    transform: translateZ(6px);
  }
  .page3 {
    background: #f5f5f5;
    transform: translateZ(4px);
  }
  .page4 {
    background: #f5f5f5;
    transform: translateZ(2px);
  }
  .page5 {
    background: #fafafa;
    transform: translateZ(0px);
  }
  .page6 {
    background: #fdfdfd;
    transform: translateZ(-2px);
  }

  .front,
  .back,
  .paper-block,
  .page1,
  .page2,
  .page3,
  .page4,
  .page5,
  .page6 {
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
