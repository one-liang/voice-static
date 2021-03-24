<template>
  <div class="album">
    <NuxtLink
      :to="{
        name: 'audiobooks-audiobook',
        params: { audiobook: 1 },
      }"
      class="flow-root album__cover"
    >
      <img
        v-lazy=""
        class="absolute object-cover w-full h-full rounded"
      >
      <div class="absolute left-0 -top-2">
        <svg
          class="w-10 h-10 text-secondary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
        <span
          class="absolute font-bold text-white transform -translate-x-1/2 -translate-y-1/2 left-50 top-50"
        >1</span>
      </div>
    </NuxtLink>
    <section class="flex flex-col justify-between lg:h-110">
      <div class="flex justify-between">
        <div class="truncate">
          <div class="flex mb-1 truncate">
            <span
              class="inline-block px-2 text-sm text-white whitespace-nowrap bg-blue-light"
            >有聲書</span>
            <template v-for="(category, index) in 1">
              <NuxtLink
                v-if="index === 0"
                :key="`audiobook_category_${category}`"
                :to="{ name: 'audiobooks', query: { category: category } }"
                class="ml-2 text-sm truncate blue-dark"
              >
                分類名稱
              </NuxtLink>
            </template>
          </div>
          <NuxtLink
            :to="{
              name: 'audiobooks-audiobook',
              params: { audiobook: 1 },
            }"
            class="album__title"
          >
            有聲書名稱
          </NuxtLink>
        </div>
        <div class="flex flex-col items-end">
          <client-only>
            <StarRating
              :read-only="true"
              :star-size="15"
              :rating="4"
              :increment="0.01"
              :show-rating="false"
              active-color="#798fa7"
            />
          </client-only>
          <span
            class="mt-1 text-sm text-gray-600"
          >
            4
            (10)</span>
        </div>
      </div>
      <div class="flex items-end justify-between">
        <template v-for="(author, index) in 1">
          <span
            v-if="index === 0"
            :key="`author_${author}`"
            class="flex-1 text-sm text-gray-600"
          >作者名稱</span>
        </template>
        <div class="flex flex-col items-end flex-1">
          <p class="text-sm text-gray-600">
            單購價
          </p>
          <p class="text-secondary">
            <span class="text-base font-bold lg:text-2xl">199</span>
            <span class="text-sm font-bold">元</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AudiobookRankingItem'
}
</script>

<style lang="postcss" scoped>
.album {
  @apply py-4 border-b-2 border-gray-400 transition duration-200 ease-linear;

  &__cover {
    @apply relative block float-left mr-3;

    padding-right: 90px;
    padding-bottom: 90px;
  }

  &__title {
    @apply text-sm leading-5 truncate;
  }
}

@screen lg {
  .album {
    &__cover {
      @apply mr-5;

      padding-right: 110px;
      padding-bottom: 110px;
    }
    &__title {
      @apply text-lg leading-6;
    }
  }
}
</style>
