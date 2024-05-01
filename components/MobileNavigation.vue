<script setup lang="ts">
import CloseIcon from "~/assets/CloseIcon.vue";
import InstagramIcon from "~/assets/InstagramIcon.vue";
const navigation = useNavigation();
const isFullwidthNavOpen = ref(false);

const emits = defineEmits(["onClose"]);
const contactInfos = navigation.value?.data.links.filter(
  (item) => !item.main_menu && item.label !== "instagram"
);
const mainNavigationItems = navigation.value?.data.links.filter(
  (item) => item.main_menu || item.label === "instagram"
);
</script>
<template>
  <div class="fullwidth-navigation">
    <div class="menu top">
      <img class="logo" src="./../assets/logo-black.png" />
      <div @click="emits('onClose')" class="link"><CloseIcon /></div>
    </div>

    <div class="menu main">
      <div v-for="item in mainNavigationItems" :key="item.label ?? ''">
        <PrismicLink
          v-if="item.label !== 'instagram'"
          class="link title"
          :field="item.link"
          >{{ item.label }}</PrismicLink
        >
        <PrismicLink v-else :field="item.link" class="link"
          ><InstagramIcon
        /></PrismicLink>
      </div>
    </div>

    <div class="menu secondary">
      <div v-for="item in contactInfos" :key="item.label ?? ''">
        <PrismicLink class="link" :field="item.link">{{
          item.label
        }}</PrismicLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fullwidth-navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-light-background);
  z-index: var(--z-index-nav);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .menu {
    display: flex;
    max-width: 100%;

    &.top,
    &.secondary {
      justify-content: space-between;
      padding: 2rem 1.5rem;

      .logo {
        height: 1rem;
      }
    }

    &.main {
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      flex-grow: 1;
      max-height: 60%;
    }
  }
}
</style>
