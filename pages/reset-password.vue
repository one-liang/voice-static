<template>
  <div
    v-lazy:background-image="'/cover/login-bg.jpg'"
    class="relative min-h-screen py-12 bg-fixed bg-center bg-no-repeat bg-cover lg:py-20"
  >
    <FormResetPassword />
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  head: {
    titleTemplate: '重設密碼 - 鏡好聽 Mirror Voice'
  },
  mounted () {
    this.$scrollTo('body', 0)
  }
}
</script>
