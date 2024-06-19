<script setup lang="ts">
import { components } from "~/slices";

const { locale } = useI18n();
const prismic = usePrismic();
const settings = useSettings();

const { data: page } = useAsyncData(`${locale.value}/index`, () =>
  prismic.client.getByUID("page", "home", { lang: locale.value })
);

watch(
  () => page.value?.alternate_languages,
  () => {
    useAlternateLanguages().value = page.value?.alternate_languages || [];
  },
  { immediate: true }
);

useSeoMeta({
  title: computed(
    () =>
      `${page.value?.data.title} | ${prismic.asText(settings.value?.data.siteTitle)}`
  ),
  description: page.value?.data.meta_description,
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
