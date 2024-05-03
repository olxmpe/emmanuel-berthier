<script setup lang="ts">
import BurgerIcon from "~/assets/BurgerIcon.vue";
import InstagramIcon from "~/assets/InstagramIcon.vue";

const navigation = useNavigation();

const isFullwidthNavOpen = ref(false);

const topNavigationItems = navigation.value?.data.links.filter(
  (item) => !item.main_menu
);
const mainNavigationItems = navigation.value?.data.links.filter(
  (item) => item.main_menu
);
</script>
<template>
  <div class="navbar secondary">
    <div class="menu secondary">
      <div class="menu-items">
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

      <RouterLink to="/">
        <img class="logo" src="./../assets/logo-black.png" />
      </RouterLink>
    </div>
  </div>
  <div class="burger-menu" @click="isFullwidthNavOpen = true">
    <div class="menu">
      <RouterLink to="/">
        <img class="logo" src="./../assets/logo-black.png" />
      </RouterLink>
      <BurgerIcon />
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

  @media screen and (max-width: 800px) {
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
      max-width: 1rem;
    }

    &.secondary {
      justify-content: flex-end;
      align-items: baseline;
      background: linear-gradient(
        to bottom,
        var(--color-grey-background) 40%,
        #ffffff00 100%
      );
    }

    &.main {
      justify-content: space-between;
      align-items: flex-end;
      background: linear-gradient(
        to top,
        var(--color-grey-background) 40%,
        #ffffff00 100%
      );

      a {
        z-index: var(--z-index-top);
      }
    }
  }
}

.burger-menu {
  @media screen and (min-width: 800px) {
    display: none;
  }

  width: 100%;
  position: fixed;
  top: 0;

  .menu {
    padding: 2rem 1.5rem;
    display: flex;
    justify-content: space-between;

    .logo {
      height: 1rem;
    }
  }
}

.router-link-active {
  color: var(--color-yellow);
}
</style>