<template>
  <div class="relative">
    <div v-swiper:mainSwiper="swiperOption">
      <div class="swiper-wrapper">
        <template v-for="item in 1">
          <SwiperMainPodcastSlide
            :key="`main_swiper_podcast_${item}`"
          />
          <SwiperMainAudiobookSlide
            :key="`main_swiper_audiobook_${item}`"
          />
          <SwiperMainCourseSlide
            :key="`main_swiper_course_${item}`"
          />
          <SwiperMainDiscoverSlide
            :key="`main_swiper_discover_${item}`"
          />
        </template>
      </div>
    </div>

    <div class="main-swiper-pagination swiper-pagination" />
    <div class="main-swiper-prev swiper-button-prev">
      <svg
        class="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
        />
      </svg>
    </div>
    <div class="main-swiper-next swiper-button-next">
      <svg
        class="w-4 h-4 lg:w-5 lg:h-5 text-secondary"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwiperMain',
  data () {
    return {
      swiperOption: {
        // loop: true,
        touchRatio: 1,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.main-swiper-next',
          prevEl: '.main-swiper-prev'
        },
        pagination: {
          el: '.main-swiper-pagination',
          clickable: true
        },
        breakpoints: {
          // when window width is >= 1024px
          1024: {
            watchSlidesVisibility: true,
            // loopedSlides: 0,
            touchRatio: 0,
            slidesPerView: 'auto',
            spaceBetween: 30
          }
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
>>> .swiper-wrapper {
  height: 540px;
}

>>> .swiper-slide {
  @apply opacity-75 z-0;
}

>>> .swiper-slide-active {
  @apply opacity-100 z-10;
}

>>> .swiper-pagination {
  @apply flex items-center h-8 bottom-0 ml-8 mb-16;

  .swiper-pagination-bullet {
    @apply bg-white w-3 h-3 mr-2 rounded-full opacity-50 cursor-pointer;
  }

  .swiper-pagination-bullet-active {
    @apply opacity-100;
  }
}

>>> .swiper-button-prev,
>>> .swiper-button-next {
  @apply top-auto right-0 bottom-0 left-auto bg-white w-8 h-8 mb-16 rounded-full;

  &::after {
    content: none;
  }
}

>>> .swiper-button-prev {
  @apply mr-20;
}

>>> .swiper-button-next {
  @apply mr-8;
}

@screen lg {
  >>> .swiper-wrapper {
    height: 580px;
  }

  >>> .swiper-slide {
    width: 100% !important;
  }

  >>> .swiper-pagination {
    @apply right-0 mr-8 mb-8;
  }

  >>> .swiper-button-prev,
  >>> .swiper-button-next {
    @apply w-12 h-12;
  }

  >>> .swiper-button-prev {
    @apply mr-24;
  }
}
</style>
