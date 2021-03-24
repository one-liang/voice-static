<template>
  <div class="album">
    <NuxtLink
      :to="{
        name: 'audiobooks-audiobook',
        params: { audiobook: 1 },
      }"
      class="album__wrap"
    >
      <div class="album__cover">
        <PlayerPlayButton
          collect-type="audiobook"
          collect="1"
          layout="circle"
          class="absolute w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-full hover:bg-secondary left-50 top-50"
        />
        <div
          class="absolute bottom-0 flex justify-center w-full mb-3 space-x-4"
        >
          <FavoriteButton
            id="1"
            type="audiobook"
            :add="true"
            class="w-8 h-8"
            style-type="white"
          />
          <!-- <PlaylistOpenButton
            :id="1"
            type="audiobook"
            class="w-8 h-8 btn-outline-secondary-white"
          />-->
          <ShareButton
            :url="
              $router.resolve({
                name: 'audiobooks-audiobook',
                params: { audiobook: 1 },
                query: { utm_medium: 'album', utm_campaign: 'share' },
              }).href
            "
            :utm="true"
            title="audiobook.og_title"
            description="audiobook.og_description"
            class="share-card"
          />
        </div>
      </div>
      <img
        v-lazy=""
        class="absolute z-10 object-cover w-full h-full"
      >
    </NuxtLink>
    <section class="flex flex-col justify-between h-40 p-2 lg:p-4 lg:h-56">
      <div class="mb-1">
        <div class="flex">
          <span
            class="inline-block px-2 text-sm text-white whitespace-nowrap bg-blue-light"
          >有聲書</span>
          <!-- 分類 -->
          <template v-for="(category, index) in 1">
            <NuxtLink
              v-if="index === 0"
              :key="`audiobook_category_${category}`"
              :to="{ name: 'audiobooks', query: { category: category } }"
              class="ml-2 text-sm uppercase truncate text-blue-light"
            >
              分類名稱
            </NuxtLink>
          </template>
        </div>
        <!-- 專輯名稱 -->
        <NuxtLink
          :to="{
            name: 'audiobooks-audiobook',
            params: { audiobook: 1 },
          }"
          class="album__title line-clamp line-clamp-2"
        >
          有聲書名稱
        </NuxtLink>
      </div>
      <div>
        <!-- 作者 -->
        <template v-for="(author, index) in 1">
          <span
            v-if="index === 0"
            :key="`author_${author}`"
            class="block mb-2 text-sm text-gray-600 truncate"
          >有聲書作者</span>
        </template>
        <div class="flex justify-between">
          <div class="flex flex-col justify-between">
            <client-only>
              <StarRating
                :rating="4"
                :read-only="true"
                :star-size="12"
                :increment="0.01"
                :show-rating="false"
                active-color="#798fa7"
              />
            </client-only>
            <span
              class="text-sm text-gray-600"
            >4 (10)</span>
          </div>
          <div class="flex flex-col">
            <p class="mb-1 text-sm text-gray-500">
              單購價
            </p>
            <span class="leading-none text-secondary">
              <span class="text-base font-bold lg:text-2xl">199</span>
              <span class="text-sm">元</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AudiobookCardTop'
}
</script>

<style lang="postcss" scoped>
>>> .vue-star-rating-star > svg {
  width: 12px;
  height: 12px;
}

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

@screen md {
  >>> .vue-star-rating-star > svg {
    width: 15px;
    height: 15px;
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
