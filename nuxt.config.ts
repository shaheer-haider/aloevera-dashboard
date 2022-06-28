import { defineNuxtConfig } from "nuxt";


export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  target: 'static',
  debug: true
});