export default {
  // Global page headers
  head: {
    title: 'CSN-Travel-AdminFrontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'CSN travel, travel, airline ticket, csn',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com"'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'},
    ],

    script: [
      { src: '/js/jquery-3.2.1.min.js', async: true, ssr:false },
      { src: '/js/popper.min.js', async: true, ssr:false },
      { src: '/js/bootstrap.min.js', async: true, ssr:false },
      { src: '/js/main.js', async: true, ssr:false },
      { src: '/js/select2.min.js', async: true, ssr:false }
    ],
  },

  // Global CSS
  css: [
    '~/assets/css/all.min.css',
    '~/assets/css/select2.min.css',
    '~/assets/css/slick-theme.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page
  plugins: [
    { src: '~/plugins/apex-chart.js', mode: 'client', ssr: false },
    { src: '~/plugins/bootstrapVueIcon.js', ssr: false },
    { src: '~/plugins/vuex-persistedstate.js', ssr: false },
    '~/plugins/moment-timezone-inject.js',
    '~/plugins/helpers.js',
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],

  // Axios module configuration
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // PWA module configuration
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  toast: {
    position: 'bottom-right',
    duration: 5000,
  },

  // Build Configuration
  build: {},
}
