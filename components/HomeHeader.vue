<script setup lang="ts">
import InstagramIcon from "~/assets/InstagramIcon.vue";

const navigation = useNavigation();
const menuItems = navigation.value?.data.links.filter((item) => item.main_menu);
const instagramLink =
  navigation.value?.data.links.find((item) => item.label === "instagram") ??
  null;
</script>

<template>
  <div class="home-nav">
    <div class="flex">
      <img class="logo" src="./../assets/logo-full-grey.png" />
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
</template>

<style scoped lang="scss">
.home-nav {
  width: 100vw;
  z-index: var(--z-index-top);
  position: absolute;

  .flex {
    padding: 12%;
    justify-content: space-between;
  }

  .logo {
    height: 8rem;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    a {
      font-family: var(--font-family-title-light);
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--color-light-background);
    }
  }
}
</style>
