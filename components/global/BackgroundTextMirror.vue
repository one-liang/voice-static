<template>
  <div class="background-mirror">
    <h4 class="background-mirror__text background-mirror__text--fill">
      MIRROR
    </h4>
    <h4 class="background-mirror__text background-mirror__text--stroke">
      MIRROR
    </h4>
    <h4 class="background-mirror__text background-mirror__text--stroke">
      MIRROR
    </h4>
  </div>
</template>

<script>
export default {
  name: 'BackgroundTextMirror'
}
</script>

<style lang="postcss" scoped>
.background-mirror {
  @apply hidden z-0 left-0 flex-col pointer-events-none select-none;

  bottom: 3%;

  .background-mirror__text {
    @apply opacity-50 tracking-wider;

    font-family: Impact, sans-serif;
    font-size: 160px;
    line-height: 145px;

    &--fill {
      color: #ffd943;
    }

    &--stroke {
      -webkit-text-stroke: 2px #ffd943;
      -webkit-text-fill-color: transparent;
    }
  }
}

@screen lg {
  .background-mirror {
    @apply flex;
  }
}
</style>
