<template>
  <button>
    <slot />
  </button>
</template>
<script lang="js">
export default {}
</script>

<style lang="scss" scoped>
.c-button {
  font-style    : var(--font-size);
  height        : var(--button-height);
  padding       : 0 1em;
  border-radius : var(--border-radius);
  border        : 1px solid var(--border-color);
  background    : var(--button-bg);

  &:hover {
    background-color : var(--border-color-hover);
  }

  &:active {
    background-color : var(--button-active-bg);
  }
}

</style>