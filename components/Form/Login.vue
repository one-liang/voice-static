<template>
  <div>
    <div
      class="flex items-center justify-between mb-6 lg:justify-center lg:space-x-6"
    >
      <LoginGoogle />
      <LoginFacebook />
      <LoginApple />
    </div>
    <ValidationObserver ref="loginForm" tag="div">
      <form @submit.prevent="checkFields" @reset.prevent="reset">
        <ValidationProvider
          v-slot="{ errors, classes }"
          vid="email"
          name="帳號(E-mail)"
          rules="required|email"
          tag="div"
          class="mb-4"
        >
          <div class="relative">
            <span
              class="absolute left-0 ml-3 transform -translate-y-1/2 top-50"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                />
              </svg>
            </span>
            <TInput
              v-model="username"
              type="email"
              name="email"
              placeholder="請以 E-mail 格式輸入您的帳號"
              class="w-full pl-10"
              :class="classes"
            />
          </div>
          <span class="text-sm text-red">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors, classes }"
          vid="password"
          name="密碼"
          rules="required|password"
          tag="div"
          class="mb-4"
        >
          <div class="relative">
            <span
              class="absolute left-0 ml-3 transform -translate-y-1/2 top-50"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="lock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                />
              </svg>
            </span>
            <TInput
              v-model="password"
              type="password"
              placeholder="長度8-30個字，含數字、大小寫字母的混合字串"
              class="w-full pl-10"
              :class="classes"
            />
          </div>
          <span class="text-sm text-red">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="flex justify-between">
          <NuxtLink
            :to="{ name: 'forget-password' }"
            class="text-sm text-gray-500"
          >
            忘記密碼？
          </NuxtLink>
          <div class="text-sm">
            <span class="text-gray-500">還不是會員？</span>
            <button
              class="text-secondary focus:outline-none"
              type="button"
              @click="changeTab()"
            >
              免費註冊
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="w-full py-2 mt-8 mb-2 font-medium btn btn-secondary"
          :disabled="sending"
        >
          登入
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    tab: {
      type: String,
      default: 'login'
    }
  },
  data () {
    return {
      sending: false,
      username: '',
      password: ''
    }
  },
  methods: {
    onError () {
      console.log('onError')
    },
    onExpired () {
      console.log('Expired')
    },
    checkFields () {
      console.log('checkFields')
    },
    onSubmit () {
      console.log('onSubmit')
    },
    onSuccess () {
      console.log('onSuccess')
    },
    changeTab () {
      this.$scrollTo('body', 0)
      this.$emit('update:tab', 'register')
    }
  }
}
</script>
