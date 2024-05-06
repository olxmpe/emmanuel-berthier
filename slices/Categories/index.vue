<script setup lang="ts">
import * as prismic from "@prismicio/client";

const client = prismic.createClient("emmanuel-berthier");
const categories = ref();
const selected = ref();

const navigation = useNavigation();

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
  <div class="flex bounded">
    <div class="links">
      <PrismicLink
        class="title link"
        :field="category"
        v-for="category in categories"
        @mouseover="selectCategory(category)"
        :key="category.id"
        >{{ category.uid }}</PrismicLink
      >
    </div>

    <div class="images">
      <PrismicImage
        v-for="category in categories"
        :key="category.id"
        :field="category.data.image"
        v-show="category === selected"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex {
  justify-content: space-around;
  align-items: center;

  .links {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    gap: 2rem;
    z-index: var(--z-index-top);
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
}
</style>
