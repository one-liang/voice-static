<template>
  <div class="pt-16">
    <Navbar />
    <nuxt class="main-screen" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style lang="postcss">
html,
body {
  @apply h-full;
}

@media (max-width: 1024px) {
  html,
  body {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.main-screen {
  min-height: calc(100vh - 200px);
}
</style>
