<script setup lang="ts">
import * as prismic from "@prismicio/client";
import { type Content } from "@prismicio/client";
defineProps(
  getSliceComponentProps<Content.ContentPageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded>
    <div
      class="flex container"
      :class="{ reversed: slice.variation === 'imageLeft' }"
    >
      <div class="text">
        <h1>{{ slice.primary.display_title }}</h1>
        <PrismicRichText :field="slice.primary.text_block" />
        <div class="flex logos" v-if="slice.variation === 'default'">
          <PrismicImage :field="slice.primary.logo_left" />
          <PrismicImage :field="slice.primary.logo_center" />
          <PrismicImage :field="slice.primary.logo_right" />
        </div>
        <div>
          <div v-for="(item, index) in slice.items" class="flex list">
            <p class="country">
              {{ item.country }}
            </p>
            <div class="travel-infos">
              <p>{{ item.description }}</p>
              <p>
                Du {{ item.start }} au {{ item.end }} -
                <span v-if="item.remaining === 0">Complet</span>
                <span v-else-if="item.remaining === 1">
                  {{ item.remaining }} place restante
                </span>
                <span v-else>{{ item.remaining }} places restantes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <PrismicImage :field="slice.primary.image" />
      </div>
    </div>
  </Bounded>
</template>
<style scoped lang="scss">
.flex {
  &.container {
    justify-content: space-between;
    gap: 10rem;
  }

  &.reversed {
    flex-direction: row-reverse;
  }

  &.list {
    gap: 60px;
    margin: 30px 0;
  }

  &.logos {
    margin: 60px 0;
    gap: 5rem;
    justify-content: center;
  }

  .text {
    width: 50%;

    .country {
      color: var(--color-yellow);
      text-transform: uppercase;
    }
  }
  .image {
    width: 50%;

    img {
      position: fixed;
      max-height: 70vh;
      object-fit: cover;
    }
  }
}
</style>
