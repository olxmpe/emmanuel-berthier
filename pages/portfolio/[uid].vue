<script setup lang="ts">
import { components } from "~/slices";

const { locale } = useI18n();
const prismic = usePrismic();
const route = useRoute();
const settings = useSettings();

const { data: page } = useAsyncData(
  `${locale.value}/${route.params.uid}` as string,
  () =>
    prismic.client.getByUID("page", route.params.uid as string, {
      lang: locale.value,
    })
);

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

useSeoMeta({
  title: computed(
    () =>
      `${prismic.asText(category.value?.data.display_title)} | ${prismic.asText(settings.value?.data.siteTitle)}`
  ),
  description: page.value?.data.meta_description,
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="category?.data.slices ?? []"
    :components="components"
  />
</template>
