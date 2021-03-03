import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  error: '/default/single.png',
  loading: '/images/spin.svg',
  attempt: 3,
  lazyComponent: true
})
