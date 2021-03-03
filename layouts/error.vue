<template>
  <div class="flex flex-col items-center justify-center px-2 py-6">
    <div v-if="error.statusCode === 404" class="mb-4">
      <img v-lazy="`/images/404.png`" class="w-full max-w-lg mb-6">
      <h1 class="mb-3 text-xl text-center lg:text-4xl">
        找不到此頁面
      </h1>
      <p class="mb-3 text-base text-center lg:text-xl">
        您要搜尋的頁面可能已刪除、更改名稱或暫時不可瀏覽。
      </p>
    </div>
    <h1 v-else class="mb-3">
      An error occurred
    </h1>
    <div class="flex space-x-3">
      <NuxtLink to="/" class="px-4 py-2 text-white rounded btn bg-primary">
        回首頁
      </NuxtLink>
      <a
        href="#"
        class="px-4 py-2 text-white rounded btn bg-primary"
        @click.prevent="$router.back()"
      >上一頁</a>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>
