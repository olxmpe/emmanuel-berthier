<script setup lang="ts">
import * as prismic from "@prismicio/client";

const client = prismic.createClient("emmanuel-berthier");
const categories = ref();
const selected = ref();

onMounted(async () => {
  categories.value = await client.getByType("category").then((response) => {
    selected.value = response.results[0];
    return response.results;
  });
});

const selectCategory = (category: any) => {
  selected.value = category;
};
</script>

<template>
  <div class="flex container bounded">
    <div class="links">
      <PrismicLink
        class="title link"
        :field="category"
        v-for="category in categories"
        @mouseover="selectCategory(category)"
        @click="$router.push('/portfolio/' + category.uid)"
        :key="category.id"
        >{{ category.data.display_title }}</PrismicLink
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
    <div class="images mobile">
      <PrismicImage
        v-for="(category, index) in categories"
        :key="category.id"
        :field="category.data.image"
        v-show="index < 2"
        :class="index === 0 ? 'first' : 'second'"
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

      @media screen and (min-width: 800px) {
        position: fixed;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    gap: 2rem;
  }

  @media screen and (max-width: 800px) {
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0;

    .images {
      &:not(.desktop) {
        z-index: var(--z-index-null);
        img {
          max-width: 16rem;
          position: fixed;

          &.first {
            position: absolute;
            top: 25%;
            right: 40%;
          }
          &.second {
            position: absolute;
            top: 80%;
            left: 35%;
          }
        }
      }
    }

    .links {
      position: absolute;
      z-index: var(--z-index-default);
      align-items: center;
    }
  }
}
</style>
