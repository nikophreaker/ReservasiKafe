// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  imports: {
    dirs: ['stores']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    // '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8000/api',
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
