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
  <div class="flex centered full-size">
    <div class="links flex">
      <PrismicLink
        class="title"
        :field="category"
        v-for="category in categories"
        @mouseover="selectCategory(category)"
        :key="category.id"
        >{{ category.uid }}</PrismicLink
      >
    </div>

    <div
      class="image-container"
      v-for="category in categories"
      :key="category.id"
    >
      <PrismicImage
        :field="category.data.image"
        v-show="category === selected"
        class="resizable"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
}

.centered {
  justify-content: center;
  align-items: center;
}

.full-size {
  width: 100vw;
  height: 100vh;
}

.links {
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  .title {
    text-transform: uppercase;
    text-align: left;

    &:hover {
      color: var(--color-yellow);
    }
  }
}

.image-container {
  max-width: 50%;
  margin-top: 2rem;

  img {
    position: fixed;

    &.resizable {
      max-height: calc(100vh - var(--menu-height) * 2);
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }
}
</style>
