<script setup lang="ts">
import * as prismic from "@prismicio/client";
import type { Logger } from "sass";

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
    <div class="mobile image"></div>

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

    <div class="mobile image"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  justify-content: space-around;
  align-items: center;

  .links {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    gap: 2rem;
    z-index: var(--z-index-top);

    @media screen and (max-width: 800px) {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .images {
    width: 50%;
    z-index: var(--z-index-top);
    height: calc(100vh - var(--menu-height) * 2);

    img {
      max-height: calc(100vh - var(--menu-height) * 2);
      max-width: 40vw;
      top: 50%;
      transform: translateY(-50%);
      position: fixed;
    }
  }

  .mobile {
    img {
      max-width: 50%;
    }
  }
}
</style>
