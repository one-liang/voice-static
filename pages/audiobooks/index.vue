<template>
  <div class="flex">
    <section
      class="fixed z-10 w-full lg:px-6 lg:static lg:py-12 lg:w-1/4 bg-blue-light"
    >
      <SearchInput
        :classifier-open.sync="classifierOpen"
        placeholder-name="找書"
        :search-text.sync="searchText"
      />
      <div
        class="mt-4 lg:mt-6 classifier"
        :class="{ 'classifier--open': classifierOpen }"
      >
        <h3 class="px-4 mb-2 text-xl lg:px-0">
          分類
        </h3>
        <SearchClassifier
          :categories="categories"
          :search-categories="searchCategories"
          router-name="audiobooks"
        />
      </div>
    </section>
    <section
      class="w-full px-4 pt-16 pb-6 bg-gray-100 lg:w-3/4 lg:py-12 xl:px-32"
    >
      <div class="flex items-center mb-4 space-x-3 divide-x divide-gray-600">
        <h1 class="text-2xl font-bold lg:text-4xl text-blue-light">
          聽書
        </h1>
        <NuxtLink
          :to="{ name: 'podcasts', query: 1 }"
          class="pl-3 text-lg font-light text-gray-600 lg:text-2xl hover:font-medium"
        >
          聽節目
        </NuxtLink>
        <NuxtLink
          :to="{ name: 'courses', query: 1 }"
          class="pl-3 text-lg font-light text-gray-600 lg:text-2xl hover:font-medium"
        >
          聽課程
        </NuxtLink>
      </div>
      <client-only>
        <SearchAudiobookResult
          :search-text="searchText"
          :search-categories="searchCategories"
        />
      </client-only>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Audiobooks',
  data () {
    return {
      categories: [],
      searchText: '',
      searchCategories: [],
      classifierOpen: false
    }
  },
  head () {
    return {
      titleTemplate: '聽書 - 鏡好聽 Mirror Voice',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: '聽書 - 鏡好聽 Mirror Voice'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: process.env.BASE_URL + this.$route.fullPath
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: '聽書 - 鏡好聽 Mirror Voice'
        }
      ]
    }
  },
  mounted () {
    this.$scrollTo('body', 0)
  }
}
</script>

<style lang="postcss" scoped>
.classifier {
  @apply hidden opacity-0 min-h-screen invisible transition-all duration-150 ease-in-out;

  &--open {
    @apply block opacity-100 visible;
  }
}

@screen lg {
  .classifier {
    @apply block opacity-100 visible;
  }
}
</style>
