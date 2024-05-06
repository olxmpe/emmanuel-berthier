<template>
  <div class="desktop">
    <div class="navbar secondary"></div>
    <div class="navbar main"></div>
  </div>
</template>
<style scoped lang="scss">
.navbar {
  z-index: var(--z-index-nav-background);
  width: 100%;
  position: fixed;
  height: 200px;

  &.secondary {
    top: 0;
    background: linear-gradient(
      to bottom,
      var(--color-grey-background) 40%,
      #ffffff00 100%
    );
  }

  &.main {
    bottom: 0;
    background: linear-gradient(
      to top,
      var(--color-grey-background) 40%,
      #ffffff00 100%
    );
  }
}
</style>
