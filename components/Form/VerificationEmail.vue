<template>
  <div class="wrap">
    <h1 class="mb-2 text-2xl font-bold text-center lg:text-3xl">
      收取驗證信
    </h1>
    <p class="mb-4 text-sm text-center text-gray-600">
      我們已經寄出驗證信至您的信箱，<br>請前往信箱點擊驗證連結，完成帳號驗證。
    </p>
    <button
      class="w-full py-2 mb-2 font-medium btn btn-secondary"
    >
      再寄一次
    </button>
  </div>
</template>

<script>
export default {
  name: 'FormVerificationEmail',
  methods: {
    onSubmit () {
      console.log('onSubmit')
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
