<template>
  <div class="relative">
    <Swiper ref="channelSwiper" :options="swiperOption">
      <slot />
    </Swiper>
    <div :id="`${name}-prev`" class="swiper-button-prev">
      <svg
        class="w-5 h-5 text-white"
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
    <div :id="`${name}-next`" class="swiper-button-next">
      <svg
        class="w-5 h-5 text-white"
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
  name: 'SwiperChannel',
  props: {
    name: {
      type: String,
      default: 'swiper'
    }
  },
  data () {
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        freeMode: true,
        touchRatio: 1,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: `#${this.name}-next`,
          prevEl: `#${this.name}-prev`
        },
        breakpoints: {
          // when window width is >= 768px
          768: {
            touchRatio: 1,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          },
          // when window width is >= 1280px
          1280: {
            touchRatio: 0,
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.channelSwiper.$swiper
    }
  }
}
</script>

<style lang="postcss" scoped>
>>> .swiper-wrapper {
  @apply pt-1 pb-12;
}

>>> .swiper-button-prev,
>>> .swiper-button-next {
  @apply hidden bg-secondary w-12 h-12 rounded-full;

  &::after {
    content: none;
  }
}

>>> .swiper-button-prev {
  left: -70px;
}

>>> .swiper-button-next {
  right: -70px;
}

@screen xl {
  >>> .swiper-button-prev,
  >>> .swiper-button-next {
    @apply flex;
  }
}

@media (max-width: 767px) {
  >>> .swiper-slide {
    width: 140px !important;
  }
}
</style>
