<template>
  <div class="app-container">
    <HeaderBackground
      v-if="$route.path === '/travel' || $route.path === '/about'"
    />
    <template v-if="$route.path === '/'">
      <HomeHeader />
    </template>
    <template v-else>
      <Header />
    </template>
    <slot />
  </div>
</template>
