<template>
  <div
    v-lazy:background-image="'/cover/login-bg.jpg'"
    class="relative min-h-screen py-12 bg-fixed bg-center bg-no-repeat bg-cover lg:py-20"
  >
    <div class="wrap">
      <h1 class="mb-4 text-2xl text-center lg:text-3xl">
        <span class="font-bold">歡迎使用</span><span class="font-light">鏡好聽</span>
      </h1>
      <ul class="flex border-b border-gray-500">
        <li class="w-1/2 -mb-px">
          <button
            class="w-full py-2 text-lg text-gray-500 focus:outline-none"
            :class="{
              'text-secondary border-b-4 border-secondary': tab === 'login',
            }"
            @click="changeTab('login')"
          >
            會員登入
          </button>
        </li>
        <li class="w-1/2 -mb-px">
          <button
            class="w-full py-2 text-lg text-gray-500 focus:outline-none"
            :class="{
              'text-secondary border-b-4 border-secondary': tab === 'register',
            }"
            @click="changeTab('register')"
          >
            免費註冊
          </button>
        </li>
      </ul>
      <div class="pt-8">
        <client-only>
          <FormLogin v-if="tab === 'login'" :tab.sync="tab" />
          <FormRegister v-else-if="tab === 'register'" :tab.sync="tab" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      tab: 'login'
    }
  },
  head: {
    titleTemplate: '會員登入/註冊 - 鏡好聽 Mirror Voice'
  },
  mounted () {
    this.$scrollTo('body', 0)
  },
  methods: {
    changeTab (tabName) {
      this.tab = tabName
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrap {
  @apply relative bg-white shadow-10 mx-auto px-4 py-6 rounded z-10;

  max-width: 320px;
}

@screen lg {
  .wrap {
    @apply px-8;

    max-width: 550px;
  }
}
</style>
