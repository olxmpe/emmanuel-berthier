<script setup lang="ts">
import { components } from "~/slices";

const { locale } = useI18n();
const prismic = usePrismic();
const route = useRoute();
const settings = useSettings();

const { data: category } = useAsyncData(`portfolio/${route.params.uid}`, () =>
  prismic.client.getByUID("category", route.params.uid as string, {
    lang: locale.value,
  })
);

watch(
  () => category.value?.alternate_languages,
  () => {
    useAlternateLanguages().value = category.value?.alternate_languages || [];
  },
  { immediate: true }
);

useHead({
  title: computed(
    () =>
      `${prismic.asText(category.value?.data.display_title)} | ${prismic.asText(settings.value?.data.siteTitle)}`
  ),
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="category?.data.slices ?? []"
    :components="components"
  />
</template>
