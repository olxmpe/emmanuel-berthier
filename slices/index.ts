// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  categories: defineAsyncComponent(() => import("./Categories/index.vue")),
  content_page: defineAsyncComponent(() => import("./ContentPage/index.vue")),
  gallerie: defineAsyncComponent(() => import("./Gallery/index.vue")),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
});
