<script setup lang="ts">
const { locale } = useI18n();
const prismic = usePrismic();
const settings = useSettings();

const client = prismic.client;
const selected = ref();
const categories = ref();

const { data: page } = useAsyncData(`${locale.value}/portfolio`, () =>
  client.getByUID("portfolio", "portfolio", { lang: locale.value })
);

onMounted(async () => {
  categories.value = await client
    .getByType("category", { lang: locale.value })
    .then((response) => {
      selectCategory(response.results[0]);
      return response.results;
    });
});

const selectCategory = (category: any) => {
  selected.value = category;
};

watch(
  () => page.value?.alternate_languages,
  () => {
    useAlternateLanguages().value = page.value?.alternate_languages || [];
  },
  { immediate: true }
);

useHead({
  title: computed(
    () =>
      `${prismic.asText(page.value?.data.title)} | ${prismic.asText(settings.value?.data.siteTitle)}`
  ),
});
</script>

<template>
  <div class="flex container bounded">
    <div class="links">
      <RouterLink
        v-for="category in categories"
        class="title link"
        :to="$route.path + '/' + category.uid"
        @mouseover="selectCategory(category)"
        :key="category.id"
        >{{ category.data.display_title[0].text }}</RouterLink
      >
    </div>

    <div class="images desktop">
      <PrismicImage
        v-for="category in categories"
        :key="category.id"
        :field="category.data.image"
        v-show="category === selected"
      />
    </div>
    <div class="images mobile" v-if="page">
      <PrismicImage
        :field="page.data.featured_mobile_image_first"
        class="first"
      />
      <PrismicImage
        :field="page.data.featured_mobile_image_second"
        class="second"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  justify-content: space-around;
  align-items: center;

  .images {
    width: 50%;
    height: calc(100vh - var(--menu-height) * 2);

    img {
      max-height: calc(100vh - var(--menu-height) * 2);
      max-width: 40vw;
      top: 50%;
      transform: translateY(-50%);

      @media screen and (min-width: 1025px) {
        position: fixed;
      }
    }
  }

  .links {
    @media screen and (max-width: 1025px) {
      max-width: 50%;
    }

    @media screen and (min-width: 1025px) {
      max-width: 30%;
    }

    max-width: 45%;
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    gap: 1rem;
  }

  @media screen and (max-width: 1025px) {
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0;

    .images {
      &:not(.desktop) {
        z-index: var(--z-index-null);
        img {
          position: fixed;

          &.first {
            position: absolute;
            top: 25%;
            right: 50%;
          }
          &.second {
            position: absolute;
            top: 80%;
            left: 50%;
          }
        }
      }
    }

    .links {
      position: absolute;
      z-index: var(--z-index-default);
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
