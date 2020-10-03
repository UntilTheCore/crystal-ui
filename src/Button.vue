<template>
  <button :class="{[`icon-${iconPosition}`]:true}">
    <c-icon v-if="iconName" :name="iconName"></c-icon>
    <span class="content"> <slot /> </span>
  </button>
</template>
<script lang="js">

export default {
  props: {
    iconName: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display        : inline-flex;
  align-items    : center;
  font-style     : var(--font-size);
  height         : var(--button-height);
  padding        : 0 1em;
  border-radius  : var(--border-radius);
  border         : 1px solid var(--border-color);
  background     : var(--button-bg);
  outline        : none;
  line-height    : 1;
  vertical-align : middle;

  &:hover {
    background-color : var(--border-color-hover);
  }

  &:active {
    background-color : var(--button-active-bg);
  }

  > svg {
    order        : 1;
    margin-right : .2em;
  }

  > .content {
    order          : 2;
    vertical-align : middle;
  }

  &.icon-right {
    > svg {
      order        : 2;
      margin-right : 0;
      margin-left  : .2em;
    }

    > .content {
      order : 1;
    }
  }
}

</style>