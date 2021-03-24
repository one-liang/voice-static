<template>
  <button
    class="flex items-center justify-center rounded-full btn"
    :class="btnClass"
    :disabled="disabled"
    type="button"
    @click.prevent="submit"
  >
    <svg
      v-if="status"
      class="favorite-icon"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="heart"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
      />
    </svg>
    <svg
      v-else
      class="favorite-icon"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="heart"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'FavoriteButton',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '',
      validator (val) {
        return [
          '',
          'program',
          'course',
          'audiobook',
          'episode',
          'chapter',
          'lesson'
        ].includes(val.toLowerCase())
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
        // not-active
        'btn-outline-secondary-white':
          !this.status && this.styleType === 'white',
        'btn-outline-secondary': !this.status && this.styleType === 'secondary',
        'text-secondary':
          (this.status || !this.status) &&
          this.styleType === 'secondary-noborder',
        'text-white':
          (this.status || !this.status) && this.styleType === 'white-noborder',
        // active
        'text-white bg-secondary':
          this.status &&
          (this.styleType === 'white' || this.styleType === 'secondary')
      }
    }
  },
  methods: {
    submit () {
      // if (!this.$store.state.auth.loggedIn) {
      this.$modal.show('not-logged-in-modal')

      // return false
      // }

      if (this.id === '' || this.type === '') {
        return
      }

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
.favorite-icon {
  @apply w-full h-full;

  padding: 6px;
}

.favorite-small svg {
  padding: 6px !important;
}

@screen lg {
  .favorite-small svg {
    padding: 4px !important;
  }
}
</style>
