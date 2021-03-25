<template>
  <ul class="flex flex-wrap px-4 pb-6 lg:px-0 lg:pb-0">
    <li class="mb-2 mr-2">
      <NLink
        :to="{ name: routerName }"
        class="px-4 py-1 text-sm text-white border border-white rounded-full hover:bg-white hover:text-blue-dark btn lg:text-base"
        :class="{
          'bg-white text-blue-dark': true,
        }"
      >
        全部
      </NLink>
    </li>
    <template v-for="category in 1">
      <li :key="`category_${category}`" class="mb-2 mr-2">
        <NLink
          :to="{ name: routerName, query: { category: category } }"
          class="px-4 py-1 text-sm text-white border border-white rounded-full hover:bg-white hover:text-blue-dark btn lg:text-base"
          :class="{
            'bg-white text-blue-dark': searchCategories.includes(category),
          }"
        >
          分類名稱
        </NLink>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'SearchClassifier',
  props: {
    categories: {
      type: Array,
      default () {
        return []
      }
    },
    searchCategories: {
      type: Array,
      default () {
        return []
      }
    },
    routerName: {
      type: String,
      required: true
    }
  }
}
</script>
