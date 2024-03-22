// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss", "~/assets/scss/colors.scss"],
  components: [
    "~/components",
    { path: "~/components/a-components" },
    { path: "~/components/documentation" },
  ],
});
