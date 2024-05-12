<script setup lang="ts">
const currentLocale = useI18n().locale;
</script>
<template>
  <div class="app-container">
    <template
      v-if="
        $route.path === '/' || $route.path === '/' + currentLocale.toLowerCase()
      "
    >
      <HomeHeader />
    </template>
    <template v-else>
      <Header />
    </template>
    <slot />
  </div>
</template>
