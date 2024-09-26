<script lang="ts">
  import { onMount } from "svelte";
  import FrontCover from "../images/Cover-Front.jpg";

  export let class_ = "";
  let book: HTMLElement;
  let isHovering = false;
  let isOpen = false;
  let tiltX = 0;
  let tiltY = 0;
  let translateX = 0;
  let translateY = 0;

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

  function handleMouseEnter() {
    if (!isOpen) isHovering = true;
  }

  function handleMouseLeave() {
    isHovering = false;
    if (!isOpen) {
      tiltX = 0;
      tiltY = 0;
    }
  }

  function handleClick() {
    isOpen = !isOpen;
    if (isOpen) {
      tiltX = 0;
      tiltY = 0;
      translateX = 50;
    } else {
      translateX = 0;
    }
    // Wait for initial animation to finish before setting book down
    setTimeout(() => {
      if (isOpen) {
        translateY = 100;
        tiltX = 50;
      } else {
        translateY = 0;
        tiltY = 0;
      }
    }, 500);
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
  <div class="back"></div>
  <div class="spine"></div>
  <div class="paper-block"></div>
  <div class="page1"></div>
  <div class="page2"></div>
  <div class="page3"></div>
  <div class="page4"></div>
  <div class="page5"></div>
  <div class="page6"></div>
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
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  .book.open .page1 {
    transform: rotateY(-160deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book.open .page2 {
    transform: rotateY(-30deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book.open .page3 {
    transform: rotateY(-150deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book.open .page4 {
    transform: rotateY(-40deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book.open .page5 {
    transform: rotateY(-140deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book.open .page6 {
    transform: rotateY(-20deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book.open .back {
    transform: rotateY(-10deg) scale(0.75);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }

  .book.open .paper-block,
  .book.open .spine {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .spine {
      transform: rotateY(-90deg) translateX(-40%) translateZ(10px);
    }
  }
</style>
