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

const { locale } = useI18n();
const $route = useRoute();
const $router = useRouter();
const client = prismic.createClient("emmanuel-berthier");

const currentCategoryUID = ref<string>($route.params.uid.toString());

const isFullWidthGalleryOpen = ref(false);

const galleryActiveIndex = ref<number>(0);
const horizontal = ref<HTMLDivElement | null>(null);

const onWheel = (event: WheelEvent) => {
  event.preventDefault();
  const horizontalContainer = horizontal.value;
  if (horizontalContainer) {
    horizontalContainer.scrollLeft += event.deltaY;
  }
};

const { data: categories } = useAsyncData("$categories", () =>
  client.getAllByType("category", { lang: locale.value })
);

const { data: currentCategory } = useAsyncData("$category", () =>
  client.getByUID("category", currentCategoryUID.value, {
    lang: locale.value,
  })
);

const navigateToNextCategory = (categoryUID: string) => {
  const nextCategory = getNextCategory(categoryUID);

  if (nextCategory) {
    $router.replace(nextCategory.uid);
    currentCategory.value = nextCategory;
  }
};

const getNextCategory = (categoryUID: string) => {
  if (categories.value) {
    const currentIndex = categories.value.findIndex(
      (category) => category.uid === categoryUID
    );

    return currentIndex === categories.value.length - 1
      ? categories.value[0]
      : categories.value[currentIndex + 1];
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

watch(
  () => currentCategory.value?.alternate_languages,
  () => {
    useAlternateLanguages().value =
      currentCategory.value?.alternate_languages || [];
  },
  { immediate: true }
);
</script>

<template>
  <FullwidthGallery
    v-if="isFullWidthGalleryOpen"
    :images="slice.items"
    :category="currentCategoryUID"
    @on-close="isFullWidthGalleryOpen = false"
    :activeIndex="galleryActiveIndex"
  />

  <PrismicImage class="mobile header" :field="slice.items[0].photo" />

  <div v-if="slice.variation === 'print'" class="print">
    <div class="grid desktop bounded large">
      <template v-for="(item, index) in slice.items.slice(0, 4)">
        <PrismicImage
          :field="item.photo"
          @click="openFullwithGallery(index)"
          class="pointer"
        />
      </template>

      <div class="text desktop">
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
    <div class="mobile">
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
    <div class="mobile bounded large">
      <div class="text">
        <h1>{{ currentCategory?.data.display_title[0]!.text }}</h1>
      </div>
    </div>
    <div class="desktop">
      <div ref="horizontal" @wheel="onWheel" class="horizontal desktop">
        <div class="flex">
          <PrismicImage
            class="pointer"
            v-for="(item, index) in slice.items"
            @click="openFullwithGallery(index)"
            :field="item.photo"
            :style="{
              maxHeight:
                index === 0 ? 'calc(100% - (var(--menu-height)* 4))' : 'auto',
              height:
                index === 0
                  ? 'calc(100% - (var(--menu-height)* 4))'
                  : Math.floor(Math.random() * 70) + 30 + '%',
            }"
          />
          <h1 class="desktop category" v-if="!isFullWidthGalleryOpen">
            {{ currentCategory?.data.display_title[0]!.text }}
          </h1>
          <div
            class="flex next-category link"
            @click="navigateToNextCategory(currentCategoryUID)"
          >
            <h1>
              {{
                getNextCategory(currentCategoryUID)?.data.display_title[0]?.text
              }}
            </h1>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
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
        class="flex next-category mobile link"
        @click="navigateToNextCategory(currentCategoryUID)"
      >
        <h1>
          {{ getNextCategory(currentCategoryUID)?.data.display_title[0]?.text }}
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
        padding: var(--menu-height) 5% !important;
      }
    }

    @media screen and (min-width: 1025px) {
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
        object-position: center bottom;
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

  &:not(.mobile) {
    margin-left: -10rem;
    padding-right: 10rem;
  }

  &.mobile {
    padding-bottom: 10rem;
  }
}

.mobile {
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
