<template>
  <div class="flex items-center text-white lg:items-end">
    <h4 class="subTitle">
      <slot name="subTitleTW" />
    </h4>
    <span class="text-sm font-bold uppercase lg:tracking-widest lg:text-lg">
      <slot name="subTitleEN" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'SubTitle'
}
</script>

<style lang="postcss" scoped>
.subTitle {
  @apply relative text-lg font-medium tracking-wider leading-none mr-1 pl-4;

  &::before {
    @apply absolute left-0 bg-white w-1 h-3;

    content: '';
    bottom: 3px;
  }
}

@screen lg {
  .subTitle {
    @apply text-4xl pl-6;

    &::before {
      @apply w-2 h-4;
    }
  }
}
</style>
