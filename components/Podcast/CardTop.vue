<template>
  <div class="album">
    <NuxtLink
      :key="`podcast_album_single_1`"
      :to="{
        name: 'podcasts-podcast-episode',
        params: { podcast: 1, episode: 1 },
      }"
      class="album__wrap"
    >
      <div class="album__cover">
        <PlayerPlayButton
          collect-type="program"
          collect="1"
          track-type="Episode"
          track="1"
          layout="circle"
          class="absolute w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-full hover:bg-secondary left-50 top-50"
        />
        <div
          class="absolute bottom-0 flex justify-center w-full mb-3 space-x-4"
        >
          <FollowButton
            id="1"
            type="program"
            :add="true"
            class="w-8 h-8"
            style-type="white"
          />
          <FavoriteButton
            id="1"
            type="program"
            :add="true"
            class="w-8 h-8"
            style-type="white"
          />
          <!-- <PlaylistOpenButton
            :id="episode.id"
            type="episode"
            class="w-8 h-8 btn-outline-secondary-white"
          /> -->
          <ShareButton
            :url="
              $router.resolve({
                name: 'podcasts-podcast',
                params: { podcast: 1 },
                query: { utm_medium: 'album', utm_campaign: 'share' },
              }).href
            "
            :utm="true"
            title="program.og_title"
            description="program.og_description"
            class="share-card"
          />
        </div>
      </div>
      <img
        v-lazy=""
        class="absolute z-10 object-cover w-full h-full"
      >
    </NuxtLink>
    <section class="flex flex-col justify-between h-40 p-2 lg:p-4 lg:h-48">
      <div class="mb-1">
        <div class="flex">
          <span
            class="inline-block px-2 text-sm text-white whitespace-nowrap bg-blue-dark"
          >節目</span>
          <!-- 分類 -->
          <template v-for="(category, index) in 1">
            <NuxtLink
              v-if="index === 0"
              :key="`program_category_${category}`"
              :to="{ name: 'podcasts', query: { category: category } }"
              class="ml-2 text-sm uppercase truncate text-blue-dark"
            >
              節目分類
            </NuxtLink>
          </template>
        </div>
        <!-- 專輯名稱 -->
        <NuxtLink
          :key="`episode_1`"
          :to="{
            name: 'podcasts-podcast-episode',
            params: { podcast: 1, episode: 1 },
          }"
          class="album__title line-clamp line-clamp-2"
        >
          節目名稱
        </NuxtLink>
      </div>
      <div class="flex flex-col justify-between lg:flex-row lg:space-x-2">
        <NuxtLink
          :to="{
            name: 'podcasts-podcast',
            params: { podcast: 1 },
          }"
          class="flex-1 text-sm text-black truncate lg:text-gray-600"
        >
          單曲名稱
        </NuxtLink>
        <template v-for="(presenter, index) in 1">
          <NuxtLink
            v-if="index === 0"
            :key="`program_presenter_${presenter}`"
            :to="{
              name: 'voices-presenter-id',
              params: { id: presenter },
            }"
            class="flex-1 text-sm text-gray-600 truncate lg:text-right"
          >
            主持人名稱
          </NuxtLink>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PodcastCardTop'
}
</script>

<style lang="postcss" scoped>
.album {
  @apply bg-white shadow-md rounded overflow-hidden transform transition duration-200 ease-linear;

  &__wrap {
    @apply relative block;

    padding-bottom: 140px;
    padding-right: 140px;
  }

  &__cover {
    @apply bg-black bg-opacity-75 absolute w-full h-full z-20 opacity-0 invisible transition duration-200 ease-linear;
  }

  &__title {
    @apply font-bold text-sm break-all leading-5 mt-1;
  }

  @media (hover: hover) {
    &:hover {
      @apply shadow-lg -translate-y-1;
    }

    &:hover &__cover {
      @apply opacity-100 visible;
    }
  }
}

@screen lg {
  .album {
    &__wrap {
      padding-bottom: 224px;
      padding-right: 224px;
    }

    &__title {
      @apply text-base mt-3 leading-6;
    }
  }
}
</style>
