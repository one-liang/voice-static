<template>
  <div class="album">
    <NuxtLink
      :key="`rank_podcast_item_link_${1}`"
      :to="{
        name: 'podcasts-podcast-episode',
        params: { podcast: 1, episode: 1 },
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
    <section
      :key="`rank_podcast_item_section_1`"
      class="flex flex-col justify-between lg:h-110"
    >
      <div class="flex flex-col justify-between mb-2">
        <div class="flex mb-1 truncate">
          <span
            class="inline-block px-2 text-sm text-white whitespace-nowrap bg-blue-dark"
          >節目</span>
          <template v-for="(category, index) in 1">
            <NuxtLink
              v-if="index === 0"
              :key="`program_category_${category}`"
              :to="{ name: 'podcasts', query: { category: category } }"
              class="ml-2 text-sm truncate text-blue-dark"
            >
              節目分類
            </NuxtLink>
          </template>
        </div>
        <NuxtLink
          :to="{
            name: 'podcasts-podcast-episode',
            params: { podcast: 1, episode: 1 },
          }"
          class="album__title line-clamp line-clamp-2"
        >
          節目單集名稱
        </NuxtLink>
      </div>
      <div class="items-center justify-between space-y-1 lg:flex">
        <NuxtLink
          :to="{
            name: 'podcasts-podcast',
            params: { podcast: 1 },
          }"
          class="flex-1 block text-sm truncate lg:text-gray-600"
        >
          節目名稱
        </NuxtLink>
        <div
          class="flex flex-wrap flex-1 lg:justify-end lg:truncate lg:flex-nowrap"
        >
          <template v-for="presenter in 1">
            <NuxtLink
              :key="`program_presenter_${presenter}`"
              :to="{
                name: 'voices-presenter-id',
                params: { id: presenter },
              }"
              class="text-sm text-gray-600 symbol"
            >
              主持人
            </NuxtLink>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PodcastRankingItem'
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
    @apply text-sm leading-5;
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

.symbol:not(:last-child)::after {
  content: '、';
}
</style>
