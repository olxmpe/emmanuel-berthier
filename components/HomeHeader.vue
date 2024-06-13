<script setup lang="ts">
import InstagramIcon from "~/assets/InstagramIcon.vue";
import CloseIcon from "./CloseIcon.vue";

const navigation = useNavigation();
const settings = useSettings();
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
      <PrismicImage
        v-if="settings"
        :field="settings.data.light_logo"
        class="logo"
      />
      <div class="menu-items">
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
$breakpoint: 800px;

.home-nav {
  z-index: var(--z-index-nav);
  position: absolute;
  top: var(--menu-height);

  @media screen and (min-width: $breakpoint) {
    left: 15%;
    right: 15%;
  }

  .flex {
    justify-content: space-between;

    @media screen and (max-width: $breakpoint) {
      width: 100vw;
      justify-content: center;
    }
  }

  .logo {
    height: 7rem;

    @media screen and (max-width: $breakpoint) {
      position: fixed;
    }
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: $breakpoint) {
      display: none;
    }

    a {
      font-family: var(--font-family-title-light);
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--color-light-background);

      &:hover,
      svg:hover {
        color: var(--color-yellow);
        fill: var(--color-yellow);
      }

      svg {
        fill: var(--color-light-background);
        max-height: 1.5rem;
      }
    }
  }
}

@media screen and (min-width: $breakpoint) {
  .burger-menu {
    display: none !important;
  }
}
</style>
