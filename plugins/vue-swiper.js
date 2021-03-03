import Vue from 'vue'
// Swiper 6.x
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Autoplay,
  Lazy
} from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'

// Swiper modules
SwiperClass.use([Pagination, Navigation, Autoplay, Lazy])

// -------------------------------------------------

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))
