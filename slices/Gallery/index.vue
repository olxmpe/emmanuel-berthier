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

  <div v-if="slice.variation === 'print'" class="print">
    <div class="grid desktop bounded large">
      <template v-for="(item, index) in slice.items.slice(0, 4)">
        <PrismicImage :field="item.photo" />
      </template>

      <div class="text desktop">
        <h1>{{ slice.primary.display_title }}</h1>
        <PrismicRichText :field="slice.primary.text"></PrismicRichText>
      </div>

      <template v-for="item in slice.items.slice(4, 8)">
        <PrismicImage :field="item.photo" />
      </template>
    </div>
    <div class="mobile">
      <div class="text">
        <h1>{{ slice.primary.display_title }}</h1>
        <PrismicRichText :field="slice.primary.text"></PrismicRichText>
      </div>
      <div class="images print">
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
    </div>
  </div>
  <div v-else class="default">
    <div class="mobile bounded large">
      <div class="text">
        <h1>{{ slice.primary.category.uid }}</h1>
      </div>
    </div>
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
      <div class="flex next-category mobile">
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

.print {
  .grid {
    @media screen and (min-width: 800px) {
      display: grid;
      height: calc(100vh - var(--menu-height) * 2);
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;

      img {
        max-width: 100%;
        height: 100%;
        max-height: calc((100vh - var(--menu-height) * 2 - 6rem) / 3);
        object-fit: cover;
        width: 100%;
        height: 100%;
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
  }
}

.default {
  .desktop {
    .horizontal {
      overflow-x: auto;
      padding-left: 10rem;
      position: relative;

      h1 {
        margin: 1rem 0;

        &.category {
          position: absolute;
          z-index: var(--z-index-top);
          bottom: var(--menu-height);
        }
      }

      .flex {
        height: 100vh;
        gap: 5rem;
        align-items: center;

        img {
          max-width: 80vw;
          max-height: calc(100% - (var(--menu-height) * 3));
        }
      }
    }
  }
}

.next-category {
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;

  > svg {
    flex-shrink: 0;
  }

  &:not(.mobile) {
    margin-left: -10rem;
    padding-right: 10rem;
  }

  &.mobile {
    padding-bottom: 10rem;

    h1 {
      font-size: 30px;
    }
  }
}

.mobile {
  max-width: 100%;

  .text {
    text-align: center;
    padding: 0 10%;
    margin: auto;

    h1 {
      font-size: 30px;
      margin: 5rem 0 3rem 0;
    }
  }

  &:not(.header) {
    padding: 0 5%;
  }

  .images {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;

    &.print {
      padding-bottom: 10rem;
    }

    .image-container {
      text-align: center;

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
}
</style>
