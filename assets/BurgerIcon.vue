<script setup lang="ts">
const props = defineProps<{
  color?: string;
}>();
</script>
<template>
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1H10M1 5H10M1 9H10" :stroke="props.color ?? 'black'" />
  </svg>
</template>
<style>
svg {
  cursor: pointer;
}
</style>
