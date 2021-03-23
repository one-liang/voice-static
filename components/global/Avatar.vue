<template>
  <picture :class="size" class="avatar">
    <img
      v-lazy="{ src: avatar, error: '/default/member.jpg' }"
      class="absolute object-cover w-full h-full rounded-full"
    >
  </picture>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatar: {
      type: String,
      default: '/default/member.jpg'
    },
    size: {
      type: String,
      default: 'avatar--50'
    }
  }
}
</script>

<style lang="postcss" scoped>
.avatar {
  @apply relative block overflow-hidden;

  &--30 {
    width: 30px;
    height: 30px;
  }

  &--50 {
    width: 50px;
    height: 50px;
  }

  &--120 {
    width: 75px;
    height: 75px;
  }

  &--150 {
    width: 120px;
    height: 120px;
  }

  &--175 {
    width: 100px;
    height: 100px;
  }

  &--200 {
    width: 125px;
    height: 125px;
  }

  &--350 {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 374px) {
  .avatar--120 {
    width: 60px;
    height: 60px;
  }
}

@screen lg {
  .avatar {
    &--120 {
      width: 120px;
      height: 120px;
    }

    &--150 {
      width: 150px;
      height: 150px;
    }

    &--175 {
      width: 175px;
      height: 175px;
    }

    &--200 {
      width: 200px;
      height: 200px;
    }

    &--350 {
      width: 300px;
      height: 300px;
    }
  }
}

@screen xl {
  .avatar--350 {
    width: 350px;
    height: 350px;
  }
}
</style>
