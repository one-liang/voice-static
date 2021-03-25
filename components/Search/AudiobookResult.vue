<template>
  <div>
    <template v-if="true">
      <template v-for="audiobook in 10">
        <AudiobookCardLeft
          :key="`audiobook_${audiobook}`"
          :audiobook="audiobook"
          class="p-5 mb-6 bg-white shadow-10"
        />
      </template>
      <TPagination
        :value="page"
        :total-items="1"
        :per-page="first"
        :limit="5"
        class="my-4"
        @change="changePage"
      />
    </template>
    <p v-else class="py-4 text-center text-gray-600">
      無符合條件有聲書，你是不是在找<NuxtLink
        :to="{ name: 'courses', query: search }"
        class="underline hover:no-underline"
      >
        課程
      </NuxtLink>？
    </p>
  </div>
</template>

<script>
export default {
  name: 'SearchAudiobookResult',
  props: {
    searchText: {
      type: String,
      required: true
    },
    searchCategories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      first: 10,
      page: 1
    }
  },
  computed: {
    search () {
      return this.searchText ? { search: this.searchText } : false
    }
  },
  watch: {
    searchText () {
      this.page = 1
    },
    searchCategories () {
      this.page = 1
    }
  },
  methods: {
    changePage (page) {
      this.page = page
    },
    onResult () {
      this.$scrollTo('body', 0)
    }
  }
}
</script>
