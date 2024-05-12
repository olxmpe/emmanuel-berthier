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
  <div class="image-container">
    <PrismicImage :field="slice.items[0].slider_image" />
  </div>
</template>

<style scoped lang="scss">
.image-container {
  z-index: var(--z-index-slider);
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  img {
    height: 100%;
    width: auto;

    @media screen and (max-width: 600px) {
      transform: translateX(-30vw);
    }
  }
}
</style>
