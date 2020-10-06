<template>
  <button class="c-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <c-icon v-if="iconName && !loading" :name="iconName"></c-icon>
    <c-icon v-if="loading" class="icon-spin" name="loading"></c-icon>
    <span class="content"> <slot/> </span>
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
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes spin {
  0% {
  }
  100% {
    transform : rotate(360deg);
  }
}

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
  // 解决按钮不对齐的问题
  vertical-align : middle;

  &:hover {
    background-color : var(--button-color-hover-bg);
  }

  &:active {
    background-color : var(--button-active-bg);
  }

  > svg {
    order        : 1;
    margin-right : .2em;
  }

  > .icon-spin {
    animation : spin 1s infinite linear;
  }

  > .content {
    order       : 2;
    line-height : 1.2;
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