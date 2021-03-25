<template>
  <div class="w-full px-4 py-2 border-b border-white lg:p-0">
    <div class="relative">
      <input
        v-model.trim="syncSearchText"
        class="w-5/6 py-1 font-medium text-white bg-transparent lg:text-2xl focus:outline-none"
        type="text"
        :placeholder="placeholderName"
      >
      <div
        class="absolute right-0 flex items-center space-x-2 transform -translate-y-1/2 top-50"
      >
        <!-- search -->
        <button class="hidden focus:outline-none" type="button">
          <svg
            class="w-5 h-5 text-white lg:w-6 lg:h-6"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-circle-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
              class=""
            />
          </svg>
        </button>
        <!-- reset -->
        <button class="focus:outline-none" type="button" @click="clearSearch">
          <svg
            class="w-5 h-5 text-white lg:w-6 lg:h-6"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
              class=""
            />
          </svg>
        </button>
        <!-- arrow -->
        <button
          class="block transition-transform duration-150 transform lg:hidden focus:outline-none"
          :class="{
            'rotate-180': classifierOpen,
          }"
          type="button"
          @click="isOpen"
        >
          <svg
            class="block w-5 h-5 text-white lg:w-6 lg:h-6 lg:hidden"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-circle-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"
              class=""
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    classifierOpen: {
      type: Boolean,
      default: false
    },
    placeholderName: {
      type: String,
      default: ''
    },
    searchText: {
      type: String,
      default: ''
    }
  },
  computed: {
    syncSearchText: {
      get () {
        return this.searchText
      },
      set (val) {
        this.$emit('update:search-text', val)
      }
    }
  },
  methods: {
    clearSearch () {
      this.syncSearchText = ''
    },
    isOpen () {
      this.$emit('update:classifier-open', !this.classifierOpen)
    }
  }
}
</script>
