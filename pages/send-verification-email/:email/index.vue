<template>
  <div
    v-lazy:background-image="'/cover/login-bg.jpg'"
    class="relative min-h-screen py-12 bg-fixed bg-center bg-no-repeat bg-cover lg:py-20"
  >
    <FormVerificationEmail />
  </div>
</template>

<script>
export default {
  name: 'SendVerificationEmail',
  head: {
    titleTemplate: '收驗證信 - 鏡好聽 Mirror Voice'
  },
  mounted () {
    this.$scrollTo('body', 0)
  }
}
</script>
