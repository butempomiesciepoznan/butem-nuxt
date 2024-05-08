// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.DEVTOOLS_ENABLED },
  ssr: true,
  nitro: {
    externals: {
      traceOptions: { base: process.cwd() }
    }
  },
  css: [
    '@/assets/css/styles.css'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/image'
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
  }
})
