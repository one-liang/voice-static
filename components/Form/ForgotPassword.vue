<template>
  <div class="wrap">
    <h1 class="text-2xl font-bold lg:text-3xl">
      忘記密碼
    </h1>
    <p class="mb-6 text-sm text-gray-600">
      請輸入會員帳號，我們將發送重設密碼連結至您的電子信箱。
    </p>
    <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }" tag="div">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset">
        <ValidationProvider
          v-slot="{ errors }"
          vid="email"
          name="帳號(E-mail)"
          tag="div"
          rules="required|email"
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
              v-model="form.email"
              type="email"
              name="email"
              placeholder="請輸入帳號（電子信箱）"
              class="w-full pl-10"
            />
          </div>
          <span class="text-sm text-secondary">{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- <recaptcha class="flex justify-center" @error="onError" @success="onSuccess" @expired="onExpired" /> -->
        <button
          type="submit"
          class="w-full py-2 mt-8 mb-2 font-medium btn btn-secondary"
          :disabled="sending"
        >
          {{ sended === false ? '發送重設密碼連結' : '重新發送重設密碼連結' }}
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'FormForgotPassword',
  data () {
    return {
      sending: false,
      sended: false,
      form: {
        email: ''
      }
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
