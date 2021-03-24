<template>
  <div class="wrap">
    <h1 class="text-2xl font-bold lg:text-3xl">
      重設密碼
    </h1>
    <p class="mb-6 text-sm text-gray-600">
      請重新設定您的密碼
    </p>
    <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }" tag="div">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset">
        <ValidationProvider
          v-slot="{ errors }"
          vid="password"
          name="新密碼"
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
              placeholder="請輸入新密碼，長度8-30個字，含數字、大小寫字母的混合字串"
              class="w-full pl-10"
            />
          </div>
          <span class="text-sm text-secondary">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="confirmed"
          name="確認密碼"
          rules="required|confirmed:password"
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
              v-model="confirmed"
              type="password"
              placeholder="請再輸入一次新密碼"
              class="w-full pl-10"
            />
          </div>
          <span class="text-sm text-secondary">{{ errors[0] }}</span>
        </ValidationProvider>
        <!-- <recaptcha class="flex justify-center"  @error="onError" @success="onSuccess" @expired="onExpired" /> -->
        <button
          type="submit"
          class="w-full py-2 mt-8 mb-2 font-medium btn btn-secondary"
          :disabled="sending"
        >
          確認送出
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'FormResetPassword',
  data () {
    return {
      sending: false,
      password: '',
      confirmed: ''
    }
  },
  methods: {
    onError () {
      console.log('onError')
    },
    onExpired () {
      console.log('Expired')
    },
    onSubmit () {
      console.log('onSubmit')
    },
    onSuccess () {
      console.log('onSuccess')
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
