export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  // Menggunakan runtimeConfig agar TypeScript tidak protes
  // Modul sitemap akan otomatis membaca URL dari sini
  runtimeConfig: {
    public: {
      siteUrl: 'http://localhost:3000/' 
    }
  },

  css: [
    '~/assets/css/main.css' 
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})