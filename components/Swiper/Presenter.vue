<template>
  <div class="relative">
    <div v-swiper:presenterSwiper="swiperOption">
      <div class="pb-2 swiper-wrapper">
        <div
          v-for="presenter in 10"
          :key="`presenter_${presenter}`"
          class="swiper-slide"
        >
          <NuxtLink
            :to="{
              name: 'voices-presenter-id',
              params: { id: presenter },
            }"
            class="block mb-3"
          >
            <Avatar
              :avatar="''"
              :size="'avatar--175'"
              class="mx-auto"
            />
          </NuxtLink>
          <span
            class="inline-block px-2 mb-2 text-sm leading-5 tracking-wide text-white bg-pink"
          >節目主持人</span>
          <NuxtLink
            :to="{
              name: 'voices-presenter-id',
              params: { id: presenter },
            }"
            class="block mb-2 text-black truncate lg:text-lg"
          >
            主持人名稱
          </NuxtLink>
          <FollowButton
            id="1"
            type="presenter"
            :add="true"
            class="px-8 lg:px-10"
          />
        </div>
      </div>
    </div>
    <div class="presenter-swiper-button-prev swiper-button-prev">
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
    <div class="presenter-swiper-button-next swiper-button-next">
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
  name: 'SwiperPresenter',
  data () {
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        freeMode: true,
        touchRatio: 1,
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
          nextEl: '.presenter-swiper-button-next',
          prevEl: '.presenter-swiper-button-prev'
        },
        breakpoints: {
          // when window width is >= 768px
          768: {
            touchRatio: 1,
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 15
          },
          // when window width is >= 1280px
          1280: {
            touchRatio: 0,
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 30
          }
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
>>> .swiper-slide {
  @apply text-center;
}

>>> .swiper-button-prev,
>>> .swiper-button-next {
  @apply hidden bg-secondary w-12 h-12 rounded-full;

  top: 27%;

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
    width: 100px !important;
  }
}
</style>
