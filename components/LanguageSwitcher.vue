<script setup lang="ts">
const { setLocale } = useI18n();
const alternateLanguages = useAlternateLanguages();

const props = defineProps<{
  class?: string;
}>();

const changeLocale = (locale: string) => {
  setLocale(locale).then(() => {
    reloadNuxtApp();
  });
};
</script>
<template>
  <div
    v-for="lang in alternateLanguages"
    @click="changeLocale(lang.lang)"
    class="link"
    :class="props.class"
  >
    {{ lang.lang.substring(0, 2).toUpperCase() }}
  </div>
</template>
