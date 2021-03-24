<template>
  <div class="publisher-swiper">
    <div v-swiper:publisherSwiper="swiperOption">
      <div class="swiper-wrapper">
        <template v-for="publisher in 6">
          <div :key="`publisher_${publisher}`" class="swiper-slide">
            <div class="border-4 shadow-md border-secondary">
              <NuxtLink
                class="block px-5 py-4 bg-white border-b-4 lg:py-6 border-secondary"
                to="/"
              >
                <h4 class="mb-2 text-xl font-light tracking-wider lg:text-2xl">
                  關於<span class="font-medium">發現名稱</span>
                </h4>
                <p
                  class="text-sm leading-6 line-clamp line-clamp-3 lg:text-base"
                >
                  介紹介紹介紹介紹介紹
                </p>
              </NuxtLink>
              <section
                class="px-5 py-2 divide-y-2 divide-gray-400 lg:py-4 bg-yellow-light"
              >
                <template v-for="audiobook in 5">
                  <div
                    :key="`publisher_audiobook_${audiobook}`"
                    class="flow-root py-4"
                  >
                    <NuxtLink
                      class="relative inline-block float-left pb-20 pr-20 mr-3 lg:pb-24 lg:pr-24"
                      :to="{
                        name: 'audiobooks-audiobook',
                        params: { audiobook: 1 },
                      }"
                    >
                      <img
                        v-lazy=""
                        class="absolute object-cover w-full h-full rounded"
                      >
                    </NuxtLink>
                    <div class="flex flex-col h-20 lg:h-24">
                      <div class="flex items-center mb-1">
                        <span
                          class="inline-block px-2 text-sm tracking-wide text-white truncate whitespace-nowrap bg-blue-light"
                        >有聲書</span>
                        <template
                          v-for="(category, index) in 1"
                        >
                          <NuxtLink
                            v-if="index === 0"
                            :key="`audiobook_category_${category}`"
                            class="ml-2 text-sm tracking-wide truncate text-blue-light"
                            :to="{
                              name: 'audiobooks',
                              query: { category: category },
                            }"
                          >
                            分類名稱
                          </NuxtLink>
                        </template>
                      </div>
                      <NuxtLink
                        class="text-sm text-black tracking-wid line-clamp line-clamp-1 lg:line-clamp-2 lg:text-base"
                        :to="{
                          name: 'audiobooks-audiobook',
                          params: { audiobook: 1 },
                        }"
                      >
                        有聲書名稱
                      </NuxtLink>
                      <template
                        v-for="(author, index) in 1"
                      >
                        <span
                          v-if="index === 0"
                          :key="`author_${author}`"
                          class="block mt-auto text-sm text-gray-600 truncate lg:text-sm"
                        >
                          有聲書主播
                        </span>
                      </template>
                    </div>
                  </div>
                </template>
              </section>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="publisher-swiper-button-prev swiper-button-prev">
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
    <div class="publisher-swiper-button-next swiper-button-next">
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
  name: 'SwiperPublisher',
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
          nextEl: '.publisher-swiper-button-next',
          prevEl: '.publisher-swiper-button-prev'
        },
        breakpoints: {
          // when window width is >= 768px
          768: {
            touchRatio: 1,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
          },
          // when window width is >= 1280px
          1280: {
            touchRatio: 0,
            slidesPerView: 3,
            slidesPerGroup: 3,
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
  @apply pt-1 pb-8;
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

.publisher-swiper {
  @apply relative;
}

@media (max-width: 767px) {
  >>> .swiper-slide {
    width: 270px !important;
  }
}

@screen xl {
  >>> .swiper-button-prev,
  >>> .swiper-button-next {
    @apply flex;
  }
}
</style>
