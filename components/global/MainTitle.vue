<template>
  <div>
    <h2 :class="`title--${themeColor}`" class="title title__en">
      <slot name="titleEN" />
    </h2>
    <br>
    <h3 :class="`title--${themeColor}`" class="title title__tw">
      <slot name="titleTW" />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    themeColor: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
.title {
  @apply relative inline-block leading-none;

  &__en {
    @apply text-5xl font-black uppercase tracking-wider mb-1 pr-4;

    font-family: Impact, sans-serif;
  }

  &__tw {
    @apply font-bold text-2xl tracking-wider pr-4;
  }

  &--primary {
    @apply text-primary;

    &.title__en::after {
      border-color: transparent transparent #ffb01c transparent;
    }

    &.title__tw::after {
      @apply bg-primary;
    }
  }

  &--primary-light {
    @apply text-primary-light;

    &.title__en::after {
      border-color: transparent transparent #ffd943 transparent;
    }

    &.title__tw::after {
      @apply bg-primary-light;
    }
  }

  &--secondary {
    @apply text-secondary;

    &.title__en::after {
      border-color: transparent transparent #ff6d2d transparent;
    }

    &.title__tw::after {
      @apply bg-secondary;
    }
  }

  &--white {
    @apply text-white;

    &.title__en::after {
      border-color: transparent transparent #fff transparent;
    }

    &.title__tw::after {
      @apply bg-white;
    }
  }

  &--black {
    @apply text-black;

    &.title__en::after {
      border-color: transparent transparent #1e1e1e transparent;
    }

    &.title__tw::after {
      @apply bg-black;
    }
  }
}

@screen lg {
  .title {
    &__en {
      font-size: 80px;
    }

    &__tw {
      @apply text-4xl pr-24;
    }
  }
}
</style>
