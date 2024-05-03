<script setup lang="ts">
import { type Content } from "@prismicio/client";
import ArrowRight from "~/assets/ArrowRight.vue";

defineProps(
  getSliceComponentProps<Content.GallerieSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const horizontal = ref<HTMLDivElement | null>(null);

const onWheel = (event: WheelEvent) => {
  event.preventDefault();
  const horizontalContainer = horizontal.value;
  if (horizontalContainer) {
    horizontalContainer.scrollLeft += event.deltaY;
  }
};
</script>

<template>
  <PrismicImage class="mobile header" :field="slice.items[0].photo" />
  <div v-if="slice.variation === 'print'">
    <div class="bounded large">
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
  <div v-else class="default-gallery">
    <h1 class="text mobile">{{ slice.primary.category.uid }}</h1>
    <div class="desktop">
      <div ref="horizontal" @wheel="onWheel" class="horizontal desktop">
        <div class="flex">
          <PrismicImage
            v-for="(item, index) in slice.items"
            :field="item.photo"
            :style="{
              maxHeight:
                index === 0 ? 'calc(100% - (var(--menu-height)* 4))' : 'auto',
              width: Math.floor(Math.random() * (100 - 45 + 1)) + 45 + '%',
            }"
          />
          <h1 class="desktop category">
            {{ slice.primary.category.uid }}
          </h1>
          <div class="flex next-category">
            <h1>Next category</h1>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="images">
        <div v-for="item in slice.items" class="image-container">
          <PrismicImage
            v-if="slice.items[0] !== item"
            :field="item.photo"
            :style="{
              width: Math.floor(Math.random() * (100 - 45 + 1)) + 45 + '%',
            }"
          />
        </div>
      </div>
      <div class="flex next-category">
        <h1>Next category</h1>
        <ArrowRight class="non-resized" />
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

.grid {
  display: grid;
  height: calc(100vh - var(--menu-height) * 2);
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
    max-height: calc((100vh - var(--menu-height) * 2 - 6rem) / 3);
    object-fit: cover;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 800px) {
      height: auto;
      max-height: none;
      max-width: 100%;
      width: auto;
    }
  }

  .text {
    text-align: center;
    padding: 0 5%;
    margin: auto;

    h1 {
      font-size: 20px;
      margin: 0 0 1rem 0;
    }
  }
}

.default-gallery {
  .desktop {
    height: 100vh;

    .horizontal {
      overflow-x: auto;
      padding-left: 10rem;
      position: relative;

      h1 {
        margin: 1rem 0;

        &.category {
          position: absolute;
          z-index: 1000;
          bottom: var(--menu-height);
        }
      }

      .flex {
        height: 100vh;
        gap: 5rem;
        align-items: center;

        &.next-category {
          gap: 1rem;
          margin-left: -10rem;
          padding-right: 10rem;
        }

        img {
          max-width: 80vw;
          max-height: calc(100% - (var(--menu-height) * 3));
        }
      }
    }
  }

  .mobile {
    max-width: 100%;
    padding: 0 10%;

    .images {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      gap: 3rem;

      .image-container {
        text-align: center;

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
    .next-category {
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      margin-left: 10%;
      > .non-resized {
        flex-shrink: 0 !important;
      }
    }
  }
}
</style>
