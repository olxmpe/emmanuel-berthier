<script setup lang="ts">
defineProps({
  as: {
    type: [String, Object, Function],
    default: "div",
  },
});
</script>

<template>
  <Component :is="as">
    <div class="bounded">
      <slot />
    </div>
  </Component>
</template>
<style scoped lang="scss">
.bounded {
  margin: auto;
  padding: 10rem 10rem;
}
</style>
