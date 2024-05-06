<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
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
  <!-- <Swiper
    :slides-per-view="1"
    :navigation="false"
    :pagination="false"
    :modules="[Autoplay, EffectFade]"
    :loop="true"
    :autoplay="{ delay: 5000 }"
    :style="{ height: '100vh' }"
    :speed="10"
    class="swiper"
    :effect="'fade'"
  >
    <SwiperSlide v-for="(image, index) in slice.items" :key="index">
      <PrismicImage :field="image.slider_image" class="swiper-image" />
    </SwiperSlide>
  </Swiper> -->
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

    @media screen and (max-width: 800px) {
      transform: translateX(-30vw);
    }
  }
}

// .swiper {
//   z-index: var(--z-index-slider);

//   .swiper-image {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// }
</style>
