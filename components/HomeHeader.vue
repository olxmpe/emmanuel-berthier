<script setup lang="ts">
import InstagramIcon from "~/assets/InstagramIcon.vue";
import CloseIcon from "./CloseIcon.vue";

const navigation = useNavigation();
const isFullwidthNavOpen = ref(false);

const menuItems = navigation.value?.data.links.filter(
  (item) => item.main_menu && item.label?.toLowerCase() !== "home"
);
const instagramLink =
  navigation.value?.data.links.find(
    (item) => item.label?.toLowerCase() === "instagram"
  ) ?? null;
</script>

<template>
  <div class="home-nav">
    <div class="flex">
      <img class="logo" src="./../assets/logo-full-grey.png" />
      <div class="menu-items desktop">
        <div v-for="item in menuItems">
          <PrismicLink :field="item.link">{{ item.label }}</PrismicLink>
        </div>
        <PrismicLink v-if="instagramLink !== null" :field="instagramLink.link"
          ><InstagramIcon
        /></PrismicLink>
      </div>
    </div>
  </div>
  <div class="burger-menu" @click="isFullwidthNavOpen = !isFullwidthNavOpen">
    <div class="menu no-logo">
      <CloseIcon :isActive="isFullwidthNavOpen" :isLightTheme="true" />
    </div>
  </div>
  <MobileNavigation
    :class="{ active: isFullwidthNavOpen }"
    v-if="isFullwidthNavOpen"
    @on-close="isFullwidthNavOpen = false"
  />
</template>

<style scoped lang="scss">
.home-nav {
  z-index: var(--z-index-nav);
  position: absolute;
  @media screen and (min-width: 800px) {
    left: 215px;
    right: 215px;
  }
  top: var(--menu-height);

  .flex {
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      width: 100vw;
      justify-content: center;
    }
  }

  .logo {
    margin-top: 8rem;
    height: 8rem;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 800px) {
      display: none;
    }

    a {
      font-family: var(--font-family-title-light);
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--color-light-background);

      &:hover {
        color: var(--color-yellow);
      }

      svg {
        fill: var(--color-light-background);
        max-height: 1.5rem;

        &:hover {
          fill: var(--color-yellow);
        }
      }
    }
  }
}
</style>
