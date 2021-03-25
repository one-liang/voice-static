<template>
  <div class="work">
    <div class="flex items-start w-full">
      <NuxtLink
        :to="{
          name: 'audiobooks-audiobook',
          params: { audiobook: 1 },
        }"
        class="work__cover"
      >
        <img
          v-lazy=""
          class="absolute object-cover w-full h-full"
        >
        <span
          v-if="true"
          class="album-tag"
          :class="1 ? ' bg-blue-dark' : ' bg-primary'"
        >{{ 1 ? '暢聽' : '單購' }}
        </span>
      </NuxtLink>
      <div
        class="flex flex-col justify-between w-full h-100 lg:h-full lg:flex-row"
      >
        <section class="relative w-full overflow-hidden lg:w-2/3">
          <div class="flex mb-2">
            <span
              class="inline-block px-2 text-sm leading-5 tracking-wide text-white whitespace-nowrap font-base bg-blue-light"
            >有聲書</span>
            <template v-for="(category, index) in 1">
              <NuxtLink
                v-if="index === 0"
                :key="`audiobook_category_${category}`"
                :to="{ name: 'audiobooks', query: { category: category } }"
                class="ml-2 text-sm tracking-wide truncate font-base text-blue-light"
              >
                專輯名稱
              </NuxtLink>
            </template>
          </div>
          <h4 class="work__title line-clamp line-clamp-1">
            <NuxtLink
              :to="{
                name: 'audiobooks-audiobook',
                params: { audiobook: 1 },
              }"
            >
              有聲書名稱
            </NuxtLink>
          </h4>
          <div class="hidden lg:block">
            <div class="flex flex-wrap mb-2">
              <div
                v-if="true"
                class="flex flex-wrap mb-2 mr-3"
              >
                <span
                  class="pr-1 mb-1 mr-1 text-sm leading-5 text-gray-600 border-r border-gray-600"
                >主播</span>
                <template v-for="anchor in 3">
                  <NuxtLink
                    :key="`anchor_${anchor}`"
                    :to="{
                      name: `voices-anchor-id`,
                      params: { id: anchor },
                    }"
                    class="mb-1 text-sm leading-5 text-gray-600 symbol"
                  >
                    主播名稱
                  </NuxtLink>
                </template>
              </div>
              <div
                v-if="true"
                class="flex flex-wrap mb-2 mr-3"
              >
                <span
                  class="pr-1 mb-1 mr-1 text-sm leading-5 text-gray-600 border-r border-gray-600"
                >作者</span>
                <template v-for="author in 3">
                  <span
                    :key="`author_${author}`"
                    class="mb-1 text-sm leading-5 text-gray-600 symbol"
                  >作者名稱</span>
                </template>
              </div>
              <div
                v-if="true"
                class="flex flex-wrap mb-2 mr-3"
              >
                <span
                  class="pr-1 mb-1 mr-1 text-sm leading-5 text-gray-600 border-r border-gray-600"
                >譯者</span>
                <template v-for="translator in 3">
                  <span
                    :key="`translator_${translator}`"
                    class="mb-1 text-sm leading-5 text-gray-600 symbol"
                  >譯者名稱</span>
                </template>
              </div>
            </div>
            <p class="work__content line-clamp line-clamp-2">
              介紹介紹介紹介紹介紹
            </p>
            <div
              class="absolute bottom-0 w-full space-x-2 overflow-x-auto whitespace-nowrap"
            >
              <template v-for="tag in 5">
                <NLink
                  :key="`tag_${tag}`"
                  :to="{
                    name: 'tags',
                    query: { type: 'audiobook', tag: tag },
                  }"
                  class="px-2 py-1 text-sm leading-5 text-gray-600 bg-gray-300 rounded-full"
                >
                  #標籤名稱
                </NLink>
              </template>
            </div>
          </div>
        </section>
        <div class="flex flex-col items-end justify-between w-full lg:w-1/3">
          <div class="flex items-end justify-between w-full lg:flex-col">
            <div class="flex flex-col">
              <client-only>
                <StarRating
                  :rating="4"
                  :read-only="true"
                  :star-size="15"
                  :increment="0.01"
                  :show-rating="false"
                  active-color="#798fa7"
                />
              </client-only>
              <span
                class="mt-1 text-sm text-gray-600 lg:text-right lg:mb-2"
              >4 (10)</span>
            </div>
            <div class="flex flex-col items-end leading-8 lg:flex-row">
              <p class="text-sm text-gray-600 lg:mr-2">
                單購價
              </p>
              <p class="leading-3 lg:leading-8 text-secondary">
                <span class="text-lg font-bold lg:text-4xl">199</span>
                <span class="text-sm font-bold">元</span>
              </p>
            </div>
          </div>
          <div class="flex-col hidden space-y-2 lg:flex">
            <ShoppingCartAddButton
              v-if="true"
              id="1"
              type="audiobook"
              class="px-4 py-1 text-sm font-medium leading-6 tracking-widest xl:px-8 btn btn-gray"
            />
            <PlayerPlayButton
              collect-type="audiobook"
              collect="1"
              :have="false"
              class="flex items-center justify-center px-4 py-1 text-sm font-medium leading-6 tracking-widest xl:px-8 btn btn-secondary"
            />
          </div>
        </div>
      </div>
    </div>
    <section class="mt-4 lg:hidden">
      <div class="flex flex-wrap mb-2">
        <div
          v-if="true"
          class="flex flex-wrap mb-2 mr-3"
        >
          <span
            class="pr-1 mb-1 mr-1 leading-5 text-gray-600 border-r border-gray-600 5ext-sm"
          >主播</span>
          <template v-for="anchor in 3">
            <NuxtLink
              :key="`anchor_${anchor}`"
              :to="{
                name: `voices-anchor-id`,
                params: { id: anchor },
              }"
              class="mb-1 text-sm leading-5 text-gray-600 symbol"
            >
              主播名稱
            </NuxtLink>
          </template>
        </div>
        <div
          v-if="true"
          class="flex flex-wrap mb-2 mr-3"
        >
          <span
            class="pr-1 mb-1 mr-1 leading-5 text-gray-600 border-r border-gray-600 5ext-sm"
          >作者</span>
          <template v-for="author in 3">
            <span
              :key="`author_${author}`"
              class="mb-1 text-sm leading-5 text-gray-600 symbol"
            >作者名稱</span>
          </template>
        </div>
        <div
          v-if="true"
          class="flex flex-wrap mb-2 mr-3"
        >
          <span
            class="pr-1 mb-1 mr-1 leading-5 text-gray-600 border-r border-gray-600 5ext-sm"
          >譯者</span>
          <template v-for="translator in 3">
            <span
              :key="`translator_${translator}`"
              class="mb-1 text-sm leading-5 text-gray-600 symbol"
            >譯者名稱</span>
          </template>
        </div>
      </div>
      <p class="work__content line-clamp line-clamp-2">
        介紹介紹介紹介紹介紹
      </p>
      <div class="mb-4 space-x-2 overflow-x-auto whitespace-nowrap">
        <template v-for="tag in 1">
          <NLink
            :key="`tag_${tag}`"
            :to="{
              name: 'tags',
              query: { type: 'audiobook', tag: tag },
            }"
            class="px-2 py-1 text-sm leading-5 text-gray-600 bg-gray-300 rounded-full"
          >
            #標籤名稱
          </NLink>
        </template>
      </div>
      <div class="flex space-x-2">
        <ShoppingCartAddButton
          v-if="true"
          id="1"
          type="audiobook"
          class="flex-1 px-4 py-1 text-sm font-medium leading-6 tracking-widest btn btn-gray"
        />
        <PlayerPlayButton
          collect-type="audiobook"
          collect="1"
          :have="true"
          class="flex items-center justify-center flex-1 px-4 py-1 text-sm font-medium leading-6 tracking-widest btn btn-secondary"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AudiobookCardLeft'
}
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  display: none;
}

.work {
  @apply relative flex flex-col pr-3 py-4 border-b-2 border-gray-200 transition duration-200 ease-linear;

  &__cover {
    @apply relative block rounded-lg overflow-hidden mr-3;

    padding-bottom: 100px;
    padding-right: 100px;
  }

  &__title {
    @apply text-black font-medium leading-6 mb-2;
  }

  &__content {
    @apply mb-3 text-sm text-black tracking-wide leading-5;
  }
}

.album-tag {
  @apply absolute left-0 top-0 text-white text-xs mt-3 rounded-r-md;

  padding: 2px 6px;
}

.symbol:not(:last-child)::after {
  content: '、';
}

@screen lg {
  .work {
    @apply flex-row;

    &__cover {
      @apply mr-5;

      padding-bottom: 175px;
      padding-right: 175px;
    }
    &__content {
      @apply mb-8;
    }
  }

  .album-tag {
    @apply text-sm mt-4;

    padding: 2px 8px;
  }
}
</style>
