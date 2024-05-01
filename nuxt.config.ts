// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: false,

  app: {
    head: {
      title: "Emmanuel Berthier",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Emmanuel Berthier",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },

  css: ["~/styles/main.scss"],

  modules: ["@nuxtjs/prismic"],

  prismic: {
    endpoint: "emmanuel-berthier",
    preview: "/api/preview",
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
      ],
    },
  },
});
