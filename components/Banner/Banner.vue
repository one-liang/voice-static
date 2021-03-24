<template>
  <div>
    <img
      v-lazy="'/cover/banner-pc.jpg'"
      class="hidden object-cover w-full sm:block"
    >
    <img
      v-lazy="'/cover/banner-mb.jpg'"
      class="object-cover w-full sm:hidden"
    >
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
