<script lang="ts">
  import { onMount } from "svelte";
  import FrontCover from "../images/Cover-Front.jpg";

  export let class_ = "";
  let book: HTMLElement;
  let isHovering = false;
  let tiltX = 0;
  let tiltY = 0;

  function handleMouseMove(event: MouseEvent) {
    if (!isHovering) return;
    const rect = book.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    tiltX = ((y - centerY) / centerY) * 10;
    tiltY = ((centerX - x) / centerX) * 10;
  }

  function handleMouseEnter() {
    isHovering = true;
  }

  function handleMouseLeave() {
    isHovering = false;
    tiltX = 0;
    tiltY = 0;
  }

  onMount(() => {
    book.addEventListener("mousemove", handleMouseMove);
    book.addEventListener("mouseenter", handleMouseEnter);
    book.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      book.removeEventListener("mousemove", handleMouseMove);
      book.removeEventListener("mouseenter", handleMouseEnter);
      book.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
</script>

<div
  bind:this={book}
  class="book {class_}"
  style="transform: rotateX({tiltX}deg) rotateY({tiltY}deg)"
>
  <img
    src={FrontCover}
    alt="Front Cover"
    class="rounded-r w-full h-full object-cover"
  />
</div>

<style>
  .book {
    transform-style: preserve-3d;
    position: relative;
    margin: 5rem;
    height: 25rem;
    width: 35rem;
    cursor: pointer;
    transition: transform 0.1s ease-out;
  }

  .front,
  .back,
  .page1,
  .page2,
  .page3,
  .page4,
  .page5,
  .page6 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: left center;
    transition:
      transform 0.5s ease-in-out,
      box-shadow 0.35s ease-in-out;
  }

  .front {
    z-index: 8;
  }

  .back {
    z-index: 1;
    background: #003594;
  }

  .front,
  .page1,
  .page3,
  .page5 {
    border-bottom-right-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }

  .back,
  .page2,
  .page4,
  .page6 {
    border-bottom-right-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }

  .page1 {
    background: #efefef;
    transform: rotateY(-5deg);
    z-index: 7;
  }
  .page2 {
    background: #efefef;
    transform: rotateY(-4deg);
    z-index: 6;
  }
  .page3 {
    background: #f5f5f5;
    transform: rotateY(-3deg);
    z-index: 5;
  }
  .page4 {
    background: #f5f5f5;
    transform: rotateY(-2deg);
    z-index: 4;
  }
  .page5 {
    background: #fafafa;
    transform: rotateY(-1deg);
    z-index: 3;
  }
  .page6 {
    background: #fdfdfd;
    transform: rotateY(0deg);
    z-index: 2;
  }

  /* Hover effects remain commented out as requested */
  /*
  .book:hover .front {
    transform: rotateY(-160deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book:hover .page1 {
    transform: rotateY(-150deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book:hover .page2 {
    transform: rotateY(-30deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book:hover .page3 {
    transform: rotateY(-140deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book:hover .page4 {
    transform: rotateY(-40deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book:hover .page5 {
    transform: rotateY(-130deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book:hover .page6 {
    transform: rotateY(-50deg) scale(1.1);
    box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
  }
  .book:hover .back {
    transform: rotateY(-20deg) scale(1.1);
  }
  */
</style>
