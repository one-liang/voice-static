<template>
  <div class="discover">
    <figure class="relative overflow-hidden rounded-t">
      <NuxtLink
        :to="{
          name: 'discover-id',
          params: {
            id: 1,
          },
        }"
        class="discover__cover"
      >
        <img
          v-lazy=""
          class="absolute object-cover w-full h-full"
        >
      </NuxtLink>
      <figcaption class="absolute bottom-0 left-0 w-full p-5 space-y-1">
        <NuxtLink
          :to="{
            name: 'discover-id',
            params: {
              id: 1,
            },
          }"
          class="block text-xl font-bold text-white truncate"
        >
          發現名稱
        </NuxtLink>
        <div class="leading-none divide-x">
          <span class="pr-1 text-sm text-white">發現作者</span>
          <span class="pl-1 text-sm text-white">發布時間</span>
        </div>
      </figcaption>
    </figure>
    <article class="relative p-5 bg-black bg-opacity-75 rounded-b">
      <p class="discover__intro line-clamp line-clamp-3">
        介紹介紹介紹介紹介紹
      </p>
      <div class="flex flex-wrap h-12 mb-4 overflow-y-auto">
        <a
          v-for="tag in 5"
          :key="`tag_${tag}`"
          href="javascript:;"
          class="self-start px-2 mb-2 mr-2 text-sm leading-5 text-gray-400 bg-white bg-opacity-25 rounded-full"
        >#標籤名稱</a>
      </div>
      <NuxtLink
        :to="{
          name: 'discover-id',
          params: {
            id: 1,
          },
        }"
        class="absolute bottom-0 flex items-center justify-center w-40 py-2 tracking-widest transform -translate-x-1/2 translate-y-4 btn btn-secondary left-50"
      >
        看全文
        <svg
          class="w-4 h-4"
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
    </article>
  </div>
</template>

<script>
export default {
  name: 'DiscoverSwiperItem'
}
</script>

<style lang="postcss" scoped>
.discover {
  @apply shadow-lg transition-shadow duration-150 ease-linear;

  &:hover {
    @apply shadow-2xl;
  }

  &__cover {
    @apply relative block pb-64;

    &::after {
      @apply absolute left-0 top-0 bg-black bg-opacity-50 w-full h-full;

      content: '';
    }
  }

  &__intro {
    @apply text-gray-500 text-sm leading-6 mb-4;

    height: 72px;
  }
}

@screen lg {
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
