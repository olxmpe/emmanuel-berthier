<script setup lang="ts">
import { type Content } from "@prismicio/client";
import ArrowRight from "~/assets/ArrowRight.vue";
import * as prismic from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.GallerieSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const $route = useRoute();
const $router = useRouter();

const isFullWidthGalleryOpen = ref(false);
const galleryActiveIndex = ref<number>(0);

const currentCategoryUID = ref<string>($route.params.uid.toString());
const nextCategory = ref<string | null>(null);

const client = prismic.createClient("emmanuel-berthier");
const horizontal = ref<HTMLDivElement | null>(null);

const onWheel = (event: WheelEvent) => {
  event.preventDefault();
  const horizontalContainer = horizontal.value;
  if (horizontalContainer) {
    horizontalContainer.scrollLeft += event.deltaY;
  }
};

const { data: categories } = useAsyncData("$categories", () =>
  client.getAllByType("category")
);

const navigateToNextCategory = (categoryUID: string) => {
  nextCategory.value = getNextCategory(categoryUID);

  if (nextCategory) {
    $router.replace(nextCategory.value!);
  }
};

const getNextCategory = (categoryUID: string) => {
  if (categories.value) {
    const currentIndex = categories.value.findIndex(
      (category) => category.uid === categoryUID
    );

    return currentIndex === categories.value.length - 1
      ? categories.value[0].uid
      : categories.value[currentIndex + 1].uid;
  }
  return null;
};

const openFullwithGallery = (index: number) => {
  isFullWidthGalleryOpen.value = true;
  galleryActiveIndex.value = index;
};

onMounted(() => {
  getNextCategory(currentCategoryUID.value);
});
</script>

<template>
  <FullwidthGallery
    v-if="isFullWidthGalleryOpen"
    :images="slice.items"
    :category="currentCategoryUID"
    @on-close="isFullWidthGalleryOpen = false"
    :activeIndex="galleryActiveIndex"
  />

  <PrismicImage class="mobile-gallery header" :field="slice.items[0].photo" />

  <div v-if="slice.variation === 'print'" class="print">
    <div class="grid desktop-gallery bounded large">
      <template v-for="(item, index) in slice.items.slice(0, 4)">
        <PrismicImage
          :field="item.photo"
          @click="openFullwithGallery(index)"
          class="pointer"
        />
      </template>

      <div class="text desktop-gallery">
        <h1>{{ slice.primary.display_title }}</h1>
        <PrismicRichText :field="slice.primary.text"></PrismicRichText>
      </div>

      <template v-for="(item, index) in slice.items.slice(4, 8)">
        <PrismicImage
          :field="item.photo"
          @click="openFullwithGallery(index + 4)"
          class="pointer"
        />
      </template>
    </div>
    <div class="mobile-gallery">
      <div class="text">
        <h1>{{ slice.primary.display_title }}</h1>
        <PrismicRichText :field="slice.primary.text"></PrismicRichText>
      </div>
      <div class="images print">
        <div v-for="(item, index) in slice.items" class="image-container">
          <PrismicImage
            @click="openFullwithGallery(index)"
            class="pointer"
            v-if="slice.items[0] !== item"
            :field="item.photo"
            :style="{
              width: Math.floor(Math.random() * 40) + 60 + '%',
            }"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="default">
    <div class="mobile-gallery bounded large">
      <div class="text">
        <h1>{{ currentCategoryUID }}</h1>
      </div>
    </div>
    <div class="desktop-gallery">
      <div ref="horizontal" @wheel="onWheel" class="horizontal desktop-gallery">
        <div class="flex">
          <PrismicImage
            class="pointer"
            v-for="(item, index) in slice.items"
            @click="openFullwithGallery(index)"
            :field="item.photo"
            :style="{
              maxHeight:
                index === 0 ? 'calc(100% - (var(--menu-height)* 4))' : 'auto',
              height: Math.floor(Math.random() * 70) + 30 + '%',
            }"
          />
          <h1 class="desktop-gallery category" v-if="!isFullWidthGalleryOpen">
            {{ currentCategoryUID }}
          </h1>
          <div
            class="flex next-category link"
            @click="navigateToNextCategory(currentCategoryUID)"
          >
            <h1>
              {{ getNextCategory(currentCategoryUID) }}
            </h1>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-gallery">
      <div class="images">
        <div v-for="(item, index) in slice.items" class="image-container">
          <PrismicImage
            @click="openFullwithGallery(index)"
            class="pointer"
            v-if="slice.items[0] !== item"
            :field="item.photo"
            :style="{
              width: Math.floor(Math.random() * 40) + 60 + '%',
            }"
          />
        </div>
      </div>
      <div
        class="flex next-category mobile-gallery link"
        @click="navigateToNextCategory(currentCategoryUID)"
      >
        <h1>
          {{ getNextCategory(currentCategoryUID) }}
        </h1>
        <ArrowRight class="non-resized" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.print {
  .grid {
    &.large {
      @media screen and (max-width: 1200px) {
        padding: var(--menu-height) 15% !important;
      }
      @media screen and (max-width: 1000px) {
        padding: var(--menu-height) 10% !important;
      }
    }

    @media screen and (min-width: 800px) {
      display: grid;
      height: calc(100vh - var(--menu-height) * 2);
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: calc((100vh - var(--menu-height) * 2 - 6rem) / 3);
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
  .desktop-gallery {
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
          width: auto;
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
  height: min-content !important;

  > svg {
    flex-shrink: 0;
  }

  &:not(.mobile-gallery) {
    margin-left: -15rem;
    padding-right: 10rem;
  }

  &.mobile-gallery {
    padding-bottom: 10rem;
  }
}

.mobile-gallery {
  max-width: 100%;

  .text {
    text-align: center;
    padding: 0 10%;
    margin: auto;

    h1 {
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

.pointer {
  cursor: pointer;
}
</style>
