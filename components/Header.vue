<script setup lang="ts">
import InstagramIcon from "~/assets/InstagramIcon.vue";
import CloseIcon from "./CloseIcon.vue";

const navigation = useNavigation();

const isFullwidthNavOpen = ref(false);

const topNavigationItems = navigation.value?.data.links.filter(
  (item) => !item.main_menu
);
const mainNavigationItems = navigation.value?.data.links.filter(
  (item) => item.main_menu && item.label?.toLowerCase() !== "home"
);

const homePage = navigation.value?.data.links.find(
  (item) => item.label?.toLowerCase() === "home"
);
</script>
<template>
  <div class="navbar secondary">
    <div class="menu secondary">
      <div class="menu-items">
        <LanguageSwitcher />
        <div v-for="item in topNavigationItems" :key="item.label ?? ''">
          <PrismicLink
            class="link"
            :field="item.link"
            v-if="item.label !== 'instagram'"
            >{{ item.label }}</PrismicLink
          >
          <PrismicLink :field="item.link" v-else><InstagramIcon /></PrismicLink>
        </div>
      </div>
    </div>
  </div>

  <div class="navbar main">
    <div class="menu main">
      <div class="menu-items">
        <div v-for="item in mainNavigationItems" :key="item.label ?? ''">
          <PrismicLink class="link" :field="item.link">{{
            item.label
          }}</PrismicLink>
        </div>
      </div>

      <PrismicLink v-if="homePage" :field="homePage.link" class="link">
        <img class="logo" src="./../assets/logo-black.png" />
      </PrismicLink>
    </div>
  </div>
  <div class="burger-menu">
    <div class="menu">
      <PrismicLink v-if="homePage" :field="homePage.link" class="link">
        <img class="logo" src="./../assets/logo-black.png" />
      </PrismicLink>
      <div @click="isFullwidthNavOpen = !isFullwidthNavOpen">
        <CloseIcon :isActive="isFullwidthNavOpen" />
      </div>
    </div>
  </div>
  <MobileNavigation
    :class="{ active: isFullwidthNavOpen }"
    v-if="isFullwidthNavOpen"
    @on-close="isFullwidthNavOpen = false"
  />
</template>
<style scoped lang="scss">
.navbar {
  z-index: var(--z-index-nav);

  @media screen and (max-width: 1025px) {
    display: none;
  }

  width: 100%;
  position: fixed;

  &.scondary {
    top: 0;
  }

  &.main {
    bottom: 0;
  }

  .menu {
    display: flex;
    align-items: center;
    padding: 2rem 5rem;
    height: 100px;

    .menu-items {
      display: flex;
      gap: 3rem;
    }
    .logo {
      height: 2rem;
    }

    svg {
      max-width: 1.5rem;
      max-height: 1.5rem;

      &:hover {
        fill: var(--color-yellow);
      }
    }

    &.secondary {
      justify-content: flex-end;
      align-items: baseline;
    }

    &.main {
      justify-content: space-between;
      align-items: flex-end;
    }
  }
}

.router-link-active {
  color: var(--color-yellow);
}
</style>
