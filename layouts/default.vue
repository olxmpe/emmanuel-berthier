<template>
  <div class="app-container">
    <template v-if="$route.path === '/'">
      <HomeHeader />
    </template>
    <template v-else>
      <Header />
    </template>
    <slot />
  </div>
</template>
<style scoped lang="scss">
.app-container {
  background: var(--color-grey-background);
}
</style>
