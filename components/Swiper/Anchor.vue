<template>
  <div class="relative">
    <div v-swiper:anchorSwiper="swiperOption">
      <div class="pb-2 swiper-wrapper">
        <div
          v-for="anchor in 10"
          :key="`anchor_${anchor}`"
          class="swiper-slide"
        >
          <NuxtLink
            :to="{ name: 'voices-anchor-id', params: { id: anchor } }"
            class="block mb-3"
          >
            <Avatar
              :avatar="''"
              :size="'avatar--175'"
              class="mx-auto"
            />
          </NuxtLink>
          <span
            class="inline-block px-2 mb-2 text-sm leading-5 tracking-wide text-white bg-yellow"
          >有聲書主播</span>
          <NuxtLink
            :to="{ name: 'voices-anchor-id', params: { id: anchor } }"
            class="block mb-2 text-black truncate lg:text-lg"
          >
            主播名稱
          </NuxtLink>
          <client-only>
            <StarRating
              :rating="4"
              :read-only="true"
              :star-size="15"
              :increment="0.01"
              :show-rating="false"
              active-color="#b49d73"
              class="justify-center mb-1"
            />
          </client-only>
          <span
            class="block mb-4 text-sm text-gray-500"
          >4 (10)</span>
          <FollowButton
            id="1"
            type="anchor"
            :add="true"
            class="px-8 lg:px-10"
          />
        </div>
      </div>
    </div>
    <div class="anchor-swiper-button-prev swiper-button-prev">
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
    <div class="anchor-swiper-button-next swiper-button-next">
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
  name: 'SwiperAnchor',
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
          nextEl: '.anchor-swiper-button-next',
          prevEl: '.anchor-swiper-button-prev'
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
