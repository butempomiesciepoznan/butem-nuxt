// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.DEVTOOLS_ENABLED },
  ssr: true,
  nitro: {
    externals: {
      traceOptions: { base: process.cwd() }
    }
  },
  tailwindcss: { 
    config: {
      prefix: 'tw-',
    },  
  },
  css: [
    '@/assets/css/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    "vuetify-nuxt-module",
    '@vueuse/nuxt'
  ],

  runtimeConfig: {
    public: {
      wordpressUrl: process.env.BACKEND_URL
    }
  },
  // routeRules: {
  //   '/**': {
  //     swr: true   // cache
  //   }
  // },
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 700],
        ital: [400, 700]
      }
    },
    display: 'fallback',
    subsets: 'latin',
    preload: true
  },
  colorMode: {
    preference: 'light'
  },
  image: {
    provider: "ipx",
    dir: 'public/',
    domains: [process.env.DOMAIN_FOR_IMAGES_URL]
  },
  compatibilityDate: '2024-08-04'
})