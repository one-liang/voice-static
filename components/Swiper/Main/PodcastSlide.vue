<template>
  <div class="swiper-slide">
    <div class="relative flex justify-center lg:p-12 lg:items-center lg:h-full">
      <div
        class="container flex flex-wrap items-center justify-center h-full lg:justify-between lg:flex-nowrap"
      >
        <div class="cover">
          <img
            v-lazy=""
            class="object-cover w-full h-full"
          >
        </div>
        <div class="info">
          <div
            class="relative h-full px-6 py-4 ml-8 bg-white lg:px-10 lg:py-8 xl:ml-16 lg:ml-12"
          >
            <div class="flex items-center mb-2">
              <NuxtLink
                :to="{ name: 'podcasts' }"
                class="inline-block px-2 mr-2 text-sm tracking-wide text-white lg:text-lg bg-blue-dark"
              >
                節目
              </NuxtLink>
              <template v-for="(category, index) in 1">
                <NuxtLink
                  v-if="index === 0"
                  :key="`program_category_${category}`"
                  :to="{
                    name: 'podcasts',
                    query: {
                      category: category,
                    },
                  }"
                  class="text-sm lg:text-lg text-blue-dark"
                >
                  節目分類
                </NuxtLink>
              </template>
            </div>
            <NuxtLink
              :to="{
                name: 'podcasts-podcast',
                params: { podcast: 1 },
              }"
              class="block mb-3 text-base tracking-wider text-black truncate lg:text-4xl"
            >
              節目名稱
            </NuxtLink>
            <p
              class="mb-4 text-sm text-gray-700 lg:text-xl line-clamp line-clamp-2"
            >
              介紹介紹介紹介紹介紹
            </p>
            <div class="truncate">
              <span
                class="pr-2 mr-2 text-sm text-gray-700 border-r border-gray-700 lg:text-base"
              >主持人</span>
              <template v-for="presenter in 1">
                <NuxtLink
                  :key="`program_presenter_${presenter}`"
                  :to="{
                    name: 'voices-presenter-id',
                    params: { id: presenter },
                  }"
                  class="text-sm text-gray-700 lg:text-base symbol"
                >
                  主持人名稱
                </NuxtLink>
              </template>
            </div>
            <footer
              class="absolute bottom-0 -mb-4 transform -translate-x-1/2 lg:-mb-8 left-50"
            >
              <NuxtLink
                class="flex items-center justify-center w-32 py-2 mx-auto text-sm tracking-widest lg:text-lg lg:w-48 lg:py-4 btn btn-secondary"
                :to="{
                  name: 'podcasts-podcast',
                  params: { podcast: 1 },
                }"
              >
                前往收聽
                <svg
                  class="w-4 h-4 ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </NuxtLink>
            </footer>
          </div>
        </div>
      </div>
      <!-- 背景圖 -->
      <div class="bg-mask">
        <img
          v-lazy=""
          class="bg-mask__cover"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPodcastSlide'
}
</script>

<style lang="postcss" scoped>
.bg-mask {
  @apply absolute top-0 left-0 w-full bg-black overflow-hidden;

  height: 250px;

  &__cover {
    @apply absolute w-full left-50 top-50 opacity-50 transform -translate-x-1/2 -translate-y-1/2;

    filter: blur(20px);
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
  }
}

.cover {
  @apply mt-12 shadow-lg z-10;

  width: 200px;
  height: 200px;
}

.info {
  @apply bg-secondary bg-opacity-50 w-5/6 z-10 shadow-xl transform ml-0;

  height: 200px;
  transform: translateY(-50px);

  &::after {
    @apply absolute bg-opacity-50 w-5/6 h-full -z-10;

    content: '';
    top: -15px;
    right: -15px;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(255, 109, 45, 0.8) 0,
      rgba(255, 109, 45, 0.8) 6px
    );
  }
}

.swiper-slide .info {
  @apply transition duration-150 ease-linear delay-200 opacity-0;
}

.swiper-slide-active .info {
  @apply opacity-100;

  transition-duration: 0;
  transition-delay: 0;
}

.symbol:not(:last-child)::after {
  content: '、';
}

@screen lg {
  .bg-mask {
    @apply h-full;
  }

  .cover {
    @apply mt-0;

    width: 380px;
    height: 380px;
  }

  .info {
    @apply w-1/2;

    height: 340px;
    transform: translateY(0);

    &::after {
      @apply w-4/5;

      top: -25px;
      right: -25px;
    }
  }
}

@screen xl {
  .cover {
    width: 450px;
    height: 450px;
  }

  .info {
    width: 58%;

    &::after {
      @apply w-5/6;
    }
  }
}
</style>
