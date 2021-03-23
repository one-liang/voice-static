<template>
  <button
    class="text-gray-600 focus:outline-none"
    type="button"
  >
    <slot name="icon" />
    登出
  </button>
</template>

<script>
export default {
  name: 'LoginLogout'
}
</script>
