<script setup lang="ts">
import { type Content } from "@prismicio/client";
import "swiper/css";

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div
    class="image-container"
    :style="{ backgroundImage: `url(${slice.items[0].slider_image.url})` }"
  ></div>
</template>

<style scoped lang="scss">
.image-container {
  position: fixed;
  z-index: var(--z-index-slider);
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 10% bottom;
  background-size: cover;
}
</style>
