<template>
  <button
    class="btn"
    :class="btnClass"
    :disabled="disabled"
    type="button"
    @click.prevent="submit"
  >
    <span
      v-if="['anchor', 'presenter', 'coursePresenter'].includes(type)"
      class="small-hidden"
    >追蹤</span>
    <svg
      :class="svgClass"
      style="padding: 6px"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bell"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'FollowButton',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator (val) {
        return [
          'program',
          'course',
          'anchor',
          'presenter',
          'coursePresenter'
        ].includes(val)
      }
    },
    add: {
      type: Boolean,
      default: false
    },
    styleType: {
      type: String,
      default: 'secondary'
    }
  },
  data () {
    return {
      disabled: false,
      status: this.add
    }
  },
  computed: {
    btnClass () {
      return {
        // default
        'flex items-center justify-center border rounded-full': [
          'program',
          'course'
        ].includes(this.type),
        'py-1 border rounded-full': [
          'anchor',
          'presenter',
          'coursePresenter'
        ].includes(this.type),
        // not-active
        'btn-outline-secondary-white':
          !this.status && this.styleType === 'white',
        'btn-outline-secondary': !this.status && this.styleType === 'secondary',
        // active
        'text-white bg-secondary border-secondary': this.status
      }
    },
    svgClass () {
      return {
        'w-full h-full': ['program', 'course'].includes(this.type),
        'w-3 h-3 small-show': [
          'anchor',
          'presenter',
          'coursePresenter'
        ].includes(this.type)
      }
    }
  },
  methods: {
    submit () {
      // if (!this.$store.state.auth.loggedIn) {
      //   this.$modal.show('not-logged-in-modal')

      //   return false
      // }

      this.disabled = true

      if (this.status) {
        this.remove()
      } else {
        this.insert()
      }
    },
    remove () {
      console.log('remove')
    },
    insert () {
      console.log('insert')
    }
  }
}
</script>

<style lang="postcss" scoped>
.small-show {
  @apply hidden;

  padding: 0 !important;
}

.small-hidden {
  @apply inline-block;
}

@media (max-width: 374px) {
  .small-show {
    @apply inline-block;
  }

  .small-hidden {
    @apply hidden;
  }
}
</style>
