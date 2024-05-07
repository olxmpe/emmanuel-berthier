<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();

const { data: category } = useAsyncData(`articles/${route.params.uid}`, () =>
  prismic.client.getByUID("category", route.params.uid as string)
);
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="category?.data.slices ?? []"
    :components="components"
  />
</template>
