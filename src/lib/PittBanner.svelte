<script lang="ts">
  import lightbanner from "../images/pittbanner-light.png";
  import darkbanner from "../images/pittbanner-dark.png";
</script>

<a
  href="https://pitt.edu"
  class="w-32 p-2"
  aria-label="University of Pittsburgh"
>
  <img
    src={lightbanner}
    alt="University of Pittsburgh"
    class="dark:hidden block"
  />
  <img
    src={darkbanner}
    alt="University of Pittsburgh"
    class="dark:block hidden"
  />
</a>
