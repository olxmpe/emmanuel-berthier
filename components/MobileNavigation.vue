<script setup lang="ts">
import InstagramIcon from "~/assets/InstagramIcon.vue";
const navigation = useNavigation();

const emits = defineEmits(["onClose"]);

const mainNavigationItems = navigation.value?.data.links.filter(
  (item) => item.main_menu
);

const contactInfos = navigation.value?.data.links.filter(
  (item) => !item.main_menu && item.label !== "instagram"
);
const instagramLink =
  navigation.value?.data.links.find((item) => item.label === "instagram")
    ?.link ?? null;

const localePath = useLocalePath();
</script>
<template>
  <div class="fullwidth-navigation">
    <div class="menu top">
      <RouterLink to="/" v-if="$route.path === localePath('/')">
        <img class="logo" src="./../assets/logo-black.png" />
      </RouterLink>
    </div>
    <div class="menu main">
      <div v-for="item in mainNavigationItems">
        <PrismicLink
          v-if="item.label !== 'instagram'"
          @click="emits('onClose')"
          class="link title"
          :field="item.link"
          >{{ item.label }}</PrismicLink
        >
      </div>
      <PrismicLink
        @click="emits('onClose')"
        v-if="instagramLink !== null"
        :field="instagramLink"
        class="link"
        ><InstagramIcon
      /></PrismicLink>
    </div>

    <div class="menu secondary">
      <div v-for="item in contactInfos" :key="item.label ?? ''">
        <PrismicLink class="link" :field="item.link">{{
          item.label
        }}</PrismicLink>
      </div>
      <LanguageSwitcher />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fullwidth-navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

      svg {
        max-height: 2.5rem;
      }
    }
  }
}
</style>
