// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: { transpile: ["@fawmi/vue-google-maps"] },
  ssr: false,
  devtools: { enabled: true },
  imports: {
    dirs: ['stores']
  },
  // optimizeDeps: {
  //   // fast-deep-equal doesnt have default export
  //   // https://github.com/vitejs/vite/issues/2679
  //   include: ['@apollo/client/core', '@apollo/client/cache', '@apollo/client/link/context', 'fast-deep-equal'],
  //   exclude: ['@apollo/react'],
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    // '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8000/api',
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyBpbGDauyaUGh1An6TwIcwEfHxLwKy_C4U',
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  tailwindcss: {
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
    // theme: {
    //   colors: {
    //     primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","610":"#8eaef5","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
    //   },
    //   variables: {
    //     'navbar-height': '100px',
    //   },
    // },
  },
})
