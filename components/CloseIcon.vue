<script setup lang="ts">
const props = defineProps<{
  isActive: boolean;
  isLightTheme?: boolean;
}>();
</script>
<template>
  <div class="icon" :class="{ open: props.isActive }">
    <div class="burger" :class="{ open: props.isActive }">
      <span :class="{ light: props.isLightTheme }"></span>
      <span :class="{ light: props.isLightTheme }"></span>
      <span :class="{ light: props.isLightTheme }"></span>
      <span :class="{ light: props.isLightTheme }"></span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.icon {
  padding: 0.5rem;

  width: min-content;
  border-radius: 100%;

  &.open {
    border: solid 0.5px var(--color-black);
  }

  .burger {
    width: 9px;
    height: 9px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 0.5px;
      width: 100%;
      background: var(--color-black);
      border-radius: 9px;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &.light {
        background: var(--color-light-background);
      }

      &:nth-child(1) {
        top: 0px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 4px;
      }

      &:nth-child(4) {
        top: 8px;
      }
    }

    &.open {
      span {
        background: var(--color-black);

        &:nth-child(1),
        &:nth-child(4) {
          top: 8px;
          width: 0%;
          left: 50%;
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
