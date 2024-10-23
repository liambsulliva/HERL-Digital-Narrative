<script lang="ts">
  export let content: string;
  export let length = 300;
  let isTruncatedStr = true;

  const truncate = (description: string, maxLength: number) => {
    if (description.length <= maxLength || !isTruncatedStr) {
      return description;
    }

    const truncated = description.substring(0, maxLength - 3);
    return truncated + "...";
  };

  const isTruncated = () => {
    isTruncatedStr = !isTruncatedStr;
  };

  $: isTruncatedStr;
</script>

<button on:click={isTruncated} aria-label="description">
  {truncate(content, length)}
</button>
