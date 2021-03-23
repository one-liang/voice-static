<template>
  <nav class="fixed inset-x-0 top-0 z-50 w-full bg-primary">
    <div class="flex items-center h-16 px-4 mx-auto lg:px-6">
      <div class="flex items-center mr-auto lg:flex-1 lg:items-stretch">
        <NuxtLink to="/" class="flex items-center">
          <img
            class="object-cover w-24 lg:w-32"
            src="/images/voice_logo_h.svg"
            alt="鏡好聽"
          >
        </NuxtLink>
        <Menu :menu-open.sync="menuOpen" />
      </div>
      <div class="flex items-center pr-2 space-x-2 lg:space-x-4 lg:pr-0">
        <Search :search-open.sync="searchOpen" />
        <Record />
        <Cart />
        <client-only>
          <MemberState />
        </client-only>
      </div>

      <!-- menu button -->
      <div class="flex items-center h-full -mr-4 bg-secondary lg:hidden">
        <!-- Mobile menu button-->
        <button
          class="inline-flex items-center justify-center h-full p-3 text-white rounded-md focus:outline-none"
          @click="menuOpen = !menuOpen"
        >
          <span
            :class="{ 'burger-menu--active': menuOpen }"
            class="burger-menu"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      menuOpen: false,
      searchOpen: false
    }
  },
  watch: {
    menuOpen () {
      if (this.menuOpen) { this.searchOpen = false }
    },
    searchOpen () {
      if (this.searchOpen) { this.menuOpen = false }
    }
  }
}
</script>

<style lang="postcss" scoped>
.burger-menu,
.burger-menu::before,
.burger-menu::after {
  @apply relative block w-6 bg-white rounded-sm transition-all duration-150 ease-in-out;

  height: 2px;
  backface-visibility: hidden;
}

.burger-menu::after,
.burger-menu::before {
  @apply absolute left-0;

  content: '';
  top: -6px;
}

.burger-menu::after {
  top: 6px;
}

.burger-menu--active {
  @apply bg-transparent;
}

.burger-menu--active::before {
  transform: rotate(45deg) translate(3px, 3px);
}

.burger-menu--active::after {
  transform: rotate(-45deg) translate(5px, -6px);
}
</style>
