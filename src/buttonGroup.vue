<template>
  <div class="c-button-group">
    <slot />
  </div>
</template>

<script lang="js">
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.tagName.toLowerCase()
      if (name !== 'button') {
        console.warn(`c-button-group的子元素应该是c-button,但你使用了${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-button-group {
  display        : inline-flex;
  vertical-align : middle;

  > .c-button {
    border-radius : 0;

    &:not(:first-child) {
      margin-left : -1px;
    }

    &:first-child {
      border-top-left-radius    : var(--border-radius);
      border-bottom-left-radius : var(--border-radius);
    }

    &:last-child {
      border-top-right-radius    : var(--border-radius);
      border-bottom-right-radius : var(--border-radius);
    }

    &:hover {
      position : relative;
      z-index  : 1;
    }
  }
}
</style>