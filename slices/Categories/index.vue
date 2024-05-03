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
  <div class="flex bounded large">
    <div class="links flex">
      <PrismicLink
        class="title"
        :field="category"
        v-for="category in categories"
        @mouseover="selectCategory(category)"
        >{{ category.uid }}</PrismicLink
      >
    </div>

    <div class="image" v-for="category in categories">
      <PrismicImage
        :field="category.data.image"
        v-show="category === selected"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex {
  height: 100vh;
  gap: 5rem;
  align-items: center;
  justify-content: flex-start;

  &.links {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    a:hover {
      color: var(--color-yellow);
    }
  }

  .title {
    text-transform: uppercase;
    text-align: left;
  }

  .image {
    max-width: 50%;

    img {
      max-height: calc(100vh - var(--menu-height) * 2);
      max-width: 100%;
      width: auto;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
    }
  }
}
</style>
