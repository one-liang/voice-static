<template>
  <div :class="{ 'menu--open': menuOpen }" class="menu">
    <div
      class="flex flex-col divide-y divide-white divide-opacity-50 lg:divide-y-0 lg:flex-row lg:space-x-2"
      @click="isOpen(menuOpen)"
    >
      <NuxtLink
        :to="{ name: 'discover' }"
        class="px-12 py-4 text-lg font-medium leading-5 text-white lg:text-base lg:text-black lg:px-2 lg:py-2"
      >
        發現
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'podcasts' }"
        class="px-12 py-4 text-lg font-medium leading-5 text-white lg:text-base lg:text-black lg:px-2 lg:py-2"
      >
        節目
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'audiobooks' }"
        class="px-12 py-4 text-lg font-medium leading-5 text-white lg:text-base lg:text-black lg:px-2 lg:py-2"
      >
        有聲書
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'courses' }"
        class="px-12 py-4 text-lg font-medium leading-5 text-white lg:text-base lg:text-black lg:px-2 lg:py-2"
      >
        課程
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'voices' }"
        class="px-12 py-4 text-lg font-medium leading-5 text-white lg:text-base lg:text-black lg:px-2 lg:py-2"
      >
        節目主持人/有聲書主播
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'mirrorvoice-plus' }"
        class="px-12 py-4 text-lg font-medium leading-5 text-white lg:text-base lg:text-black lg:px-2 lg:py-2"
      >
        訂閱說明
      </NuxtLink>
      <!-- <a
        href="http://onelink.to/mirrorvoiceapp"
        class="inline-block px-12 py-4 text-lg font-medium leading-5 text-white xl:hidden lg:text-base lg:text-black lg:px-2 lg:py-2"
        target="_blank"
        rel="noopener noreferrer"
        >APP下載</a
      > -->
      <div class="flex px-12 py-4 space-x-2 lg:hidden">
        <a
          href="https://www.facebook.com/mirrorvoice2019"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-8 h-8 text-white border border-white rounded-full"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/mirror_voice"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-8 h-8 text-white border border-white rounded-full"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isOpen (menu) {
      this.$emit('update:menu-open', !menu)
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu {
  @apply bg-secondary absolute left-0 w-full opacity-0 invisible scale-0 transition-all duration-150 ease-in-out;

  top: 3rem;
}

.menu--open {
  @apply opacity-100 visible;

  top: 4rem;
}

@screen lg {
  .menu {
    @apply bg-transparent static w-auto ml-6 opacity-100 visible;

    top: auto;
  }
}
</style>
