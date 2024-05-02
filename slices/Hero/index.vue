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
  <Swiper
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
      <PrismicImage :field="image.slider_image" class="swiper-image desktop" />
      <PrismicImage
        :field="image.slider_image.mobile"
        class="swiper-image mobile"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.swiper {
  z-index: var(--z-index-slider);

  .swiper-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
