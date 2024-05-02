<script setup lang="ts">
import { type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.GallerieSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div v-if="slice.variation === 'print'">
    <PrismicImage class="mobile header" :field="slice.items[0].photo" />
    <div class="bounded">
      <div class="grid">
        <div class="text mobile">
          <h1>{{ slice.primary.display_title }}</h1>
          <PrismicRichText :field="slice.primary.text"></PrismicRichText>
        </div>
        <PrismicImage :field="slice.items[0].photo" class="desktop" />
        <PrismicImage :field="slice.items[1].photo" />
        <PrismicImage :field="slice.items[2].photo" />
        <PrismicImage :field="slice.items[3].photo" />
        <div class="text desktop">
          <h1>{{ slice.primary.display_title }}</h1>
          <PrismicRichText :field="slice.primary.text"></PrismicRichText>
        </div>
        <PrismicImage :field="slice.items[4].photo" />
        <PrismicImage :field="slice.items[5].photo" />
        <PrismicImage :field="slice.items[6].photo" />
        <PrismicImage :field="slice.items[7].photo" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  padding-top: 100px;
  width: 100vw;
  img {
    width: 100%;
    height: auto;
  }
}

.bounded {
  padding: 10rem 15%;

  @media screen and (max-width: 800px) {
    padding: var(--default-spacing) 10%;
  }

  .grid {
    display: grid;
    max-width: 100%;
    height: calc(100vh - 300px);
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    @media screen and (max-width: 800px) {
      display: flex;
      flex-wrap: wrap;
      height: auto;
    }

    img {
      max-width: 100%;
      height: 100%;
      max-height: calc((100vh - 300px - 6rem) / 3);
      object-fit: cover;
      width: 100%;
      height: 100%;

      @media screen and (max-width: 800px) {
        height: auto;
        max-height: none;
      }
    }

    .text {
      text-align: center;

      h1 {
        font-size: 20px;
        margin: 1rem 0;
      }
    }
  }
}
</style>
