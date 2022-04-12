import getMetaTags from './config/meta'
const meta = getMetaTags()

export default {
  server: {
    host: '0' // you can access dev mode from your IP
  },
  target: 'static',
  head: {
    title: 'Nuxt-Web-Boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [],
  build: {
  }
}
