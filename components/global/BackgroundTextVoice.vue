<template>
  <div class="background-voice">
    <h4 class="background-voice__text background-voice__text--stroke">
      VOICE
    </h4>
    <h4 class="background-voice__text background-voice__text--stroke">
      VOICE
    </h4>
    <h4 class="background-voice__text background-voice__text--fill">
      VOICE
    </h4>
  </div>
</template>

<script>
export default {
  name: 'BackgroundTextVoice'
}
</script>

<style lang="postcss" scoped>
.background-voice {
  @apply hidden z-0 right-0 flex-col pointer-events-none select-none;

  top: 4%;

  .background-voice__text {
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
  .background-voice {
    @apply flex;
  }
}
</style>
