export default {
  target: 'static',
  router: {
    base: '/',
  },
  head: {
    title: 'CodeDexterous',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Code Dexterous' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
  css: ['~/assets/css/style.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/fontawesome'],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: '/',
  },
  build: {},
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
}
