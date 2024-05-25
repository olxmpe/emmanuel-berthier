<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import ArrowLeft from "~/assets/ArrowLeft.vue";
import CloseIcon from "./CloseIcon.vue";
import ArrowRight from "~/assets/ArrowRight.vue";

const props = defineProps<{
  images: any;
  category: string;
  activeIndex: number;
}>();

const emits = defineEmits(["onClose"]);
const activeIndex = ref(props.activeIndex + 1);
const activeImage = ref(props.images[props.activeIndex].photo);

const goToPreviousSlide = () => {
  activeIndex.value =
    activeIndex.value === 1 ? props.images.length : activeIndex.value - 1;
  activeImage.value = props.images[activeIndex.value - 1].photo;
};

const goToNextSlide = () => {
  activeIndex.value =
    activeIndex.value === props.images.length ? 1 : activeIndex.value + 1;
  activeImage.value = props.images[activeIndex.value - 1].photo;
};

const handleMobileSlideChange = (swiper: any) => {
  let index = swiper.activeIndex;

  if (swiper.loopedSlides) {
    index = swiper.realIndex;
  }

  activeIndex.value = index + 1;
};
</script>
<template>
  <div class="header">
    <div class="flex">
      <div>
        {{ props.category[0].toUpperCase() + props.category.slice(1) }}
        {{ activeIndex }} / {{ props.images.length }}
      </div>
      <div @click="emits('onClose')"><CloseIcon :isActive="true" /></div>
    </div>
  </div>
  <div class="container">
    <div class="arrow desktop pointer" @click="goToPreviousSlide()">
      <ArrowLeft />
    </div>
    <Swiper
      :slides-per-view="1"
      :centeredSlides="true"
      :navigation="false"
      :pagination="false"
      :modules="[EffectFade]"
      :loop="true"
      class="swiper desktop"
      :effect="'fade'"
      :initialSlide="props.activeIndex"
    >
      <SwiperSlide>
        <div class="slide">
          <PrismicImage :field="activeImage" />
        </div>
      </SwiperSlide>
    </Swiper>

    <Swiper
      :slides-per-view="1"
      :centeredSlides="true"
      :navigation="true"
      :pagination="false"
      :modules="[EffectFade]"
      :loop="true"
      class="swiper mobile"
      :effect="'fade'"
      :initialSlide="props.activeIndex"
      @slideChange="handleMobileSlideChange"
      :zoom="true"
    >
      <SwiperSlide v-for="image in props.images">
        <div class="slide">
          <PrismicImage :field="image.photo" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="arrow desktop pointer" @click="goToNextSlide()">
      <ArrowRight />
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  z-index: var(--z-index-modal);
  position: fixed;
  top: 0;
  height: var(--menu-height);
  width: 100%;

  .flex {
    padding: 2rem 5%;

    justify-content: space-between;
  }
}

.container {
  width: 100vw;
  height: 100vh;
  z-index: var(--z-index-top);
  position: fixed;
  background-color: var(--color-grey-background);
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper {
    height: 80%;
    @media screen and (max-width: 800px) {
      width: 90%;
      &.desktop {
        display: none;
      }
    }
    @media screen and (min-width: 800px) {
      width: 60%;
      &.mobile {
        display: none;
      }
    }

    .slide {
      background-color: var(--color-grey-background);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }

  .arrow {
    padding: 0 5rem;
  }
}
</style>
