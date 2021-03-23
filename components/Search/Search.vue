<template>
  <div
    class="flex items-center border border-black rounded-full btn hover:bg-black hover:bg-opacity-25"
    style="padding: 6px"
  >
    <label class="cursor-pointer" for="search" @click="isOpen(searchOpen)">
      <svg
        class="w-4 h-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="search"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        />
      </svg>
    </label>
    <div :class="{ 'search--open': searchOpen }" class="search">
      <span class="search__wrap">
        <svg
          class="block w-4 h-4 lg:hidden"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          />
        </svg>
        <input
          id="search"
          v-model="searchText"
          type="text"
          placeholder="請填入關鍵字"
          class="search__wrap__keyword"
          :class="{ 'search__wrap__keyword--open': searchOpen }"
        >
      </span>
      <button
        class="ml-2 text-gray-600 focus:outline-none"
        @click="isOpen(searchOpen)"
      >
        <svg
          class="block w-6 h-6 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    searchOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    isOpen (search) {
      this.$emit('update:search-open', !search)
    }
  }
}
</script>

<style lang="postcss" scoped>
.search {
  @apply w-0 h-0;

  &--open {
    @apply w-full h-auto !important;
  }

  &__wrap__keyword {
    @apply bg-transparent w-0 h-0 text-sm leading-none transition-all duration-150;

    &::placeholder {
      @apply text-black;
    }

    &:focus {
      @apply outline-none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 rgba(255, 255, 255, 0);
      transition: background-color 5000s ease-in-out 0s;
    }

    &--open {
      @apply w-3/4 h-auto mx-3 !important;
    }
  }
}

@screen lg {
  .search__wrap__keyword--open {
    @apply w-32 !important;
  }
}

@media (max-width: 1024px) {
  .search {
    @apply bg-gray-100 absolute left-0 w-full h-auto flex items-center m-0 p-4 opacity-0 invisible transition-all duration-150;

    top: 4rem;

    &--open {
      @apply opacity-100 visible !important;
    }

    &__wrap {
      @apply flex items-center w-full border border-black rounded-full p-2;

      &__keyword {
        @apply transition-none;
      }
    }
  }
}
</style>
