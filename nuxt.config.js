export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
  //   base: '/voice-static/'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '鏡好聽 Mirror Voice',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'author',
        name: 'author',
        content: 'Mirror Media'
      },
      {
        hid: 'copyright',
        name: 'copyright',
        content: '2021 鏡好聽'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '鏡好聽為「鏡傳媒」旗下的聲音平台。我們以優質內容為主體，聲音為媒介，創新媒體科技為手段，致力於打通一條用聲音提升內容能見度的全新道路。透過鏡好聽的聲音平台與產業和使用者交流，於創作中有新的想像與刺激，並讓作品用嶄新且多元的方式，與現代的閱聽者展開對話、創造聆聽閱讀新體驗。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '鏡好聽 Mirror Voice'
      },
      {
        hid: 'rating',
        name: 'rating',
        content: 'general'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '鏡好聽 Mirror Voice'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          '鏡好聽為「鏡傳媒」旗下的聲音平台。我們以優質內容為主體，聲音為媒介，創新媒體科技為手段，致力於打通一條用聲音提升內容能見度的全新道路。透過鏡好聽的聲音平台與產業和使用者交流，於創作中有新的想像與刺激，並讓作品用嶄新且多元的方式，與現代的閱聽者展開對話、創造聆聽閱讀新體驗。'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: process.env.BASE_URL
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: '鏡好聽 Mirror Voice'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/mirrorvoice-banner.jpg'
      },
      {
        hid: 'og:image:type',
        name: 'og:image:type',
        content: 'image/jpg'
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '1200'
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '630'
      },
      {
        hid: 'og:rich_attachment',
        name: 'og:rich_attachment',
        content: 'true'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '鏡好聽 Mirror Voice'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '鏡好聽為「鏡傳媒」旗下的聲音平台。我們以優質內容為主體，聲音為媒介，創新媒體科技為手段，致力於打通一條用聲音提升內容能見度的全新道路。透過鏡好聽的聲音平台與產業和使用者交流，於創作中有新的想像與刺激，並讓作品用嶄新且多元的方式，與現代的閱聽者展開對話、創造聆聽閱讀新體驗。'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/images/mirrorvoice-banner.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // loading-bar
  loading: {
    color: '#ff6d2d',
    height: '2px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 安裝的套件
    { src: '~/plugins/vue-lazyload', mode: 'client' },
    { src: '~/plugins/vue-swiper.js', mode: 'client' },
    { src: '~/plugins/star-rating.js', mode: 'client' },
    { src: '~/plugins/vue-tailwind.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://vue-scrollto.netlify.app/
    'vue-scrollto/nuxt',
    // https://github.com/nicolasbeauvais/vue-social-sharing
    'vue-social-sharing/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  },

  // https://github.com/tailwindlabs/tailwindcss-jit
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    jit: true
  }
}
