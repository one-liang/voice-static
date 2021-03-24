<template>
  <div class="relative">
    <button
      class="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 btn btn-outline-secondary share-btn"
      @click.prevent="shareOpen = !shareOpen"
    >
      <svg
        class="w-full h-full p-2"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="share-alt"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
        />
      </svg>
    </button>

    <div class="share-network" :class="{ 'share-network--active': shareOpen }">
      <!-- FB -->
      <ShareNetwork
        class="flex items-center justify-center w-8 h-8 mr-2 rounded-full cursor-pointer lg:w-10 lg:h-10 btn share-network-btn"
        :style="{ backgroundColor: '#1877f2' }"
        network="facebook"
        :url="resolveUrl('facebook')"
        :title="title"
        :description="description"
      >
        <svg
          class="w-full h-full p-2 text-white"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </ShareNetwork>
      <!-- LINE -->
      <ShareNetwork
        class="flex items-center justify-center w-8 h-8 mr-2 rounded-full cursor-pointer lg:w-10 lg:h-10 btn share-network-btn"
        :style="{ backgroundColor: '#00c300' }"
        network="line"
        :url="resolveUrl('line')"
        :title="title"
        :description="description"
      >
        <svg
          class="w-full h-full p-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180.433 68.195"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#ffffff"
            d="M7.228 68.066H35.18c3.976 0 7.228-3.253 7.228-7.229v-.603c0-3.976-3.252-7.228-7.228-7.228H15.059V7.228C15.059 3.252 11.807 0 7.831 0h-.603C3.252 0 0 3.252 0 7.228v53.609c0 3.976 3.252 7.229 7.228 7.229zm173.205-33.604v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12V15.187h20.12c3.976 0 7.229-3.252 7.229-7.228v-.603c0-3.976-3.253-7.228-7.229-7.228h-27.952c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.976 3.252 7.229 7.228 7.229h27.952c3.976 0 7.229-3.253 7.229-7.229v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12V41.69h20.12c3.976 0 7.229-3.252 7.229-7.228zm-53.755 31.449l.002-.003a7.207 7.207 0 0 0 2.09-5.07V7.228c0-3.976-3.252-7.228-7.229-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v31.469L87.585 3.655C86.337 1.477 83.987 0 81.309 0h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.252 7.229 7.229 7.229h.603c3.976 0 7.228-3.253 7.228-7.229V28.78l26.314 35.941c.162.252.339.494.53.724l.001.002c.723.986 1.712 1.662 2.814 2.075.847.35 1.773.544 2.742.544h.603a7.162 7.162 0 0 0 3.377-.844c.722-.345 1.331-.788 1.76-1.311zM55.47 68.066h.603c3.976 0 7.228-3.253 7.228-7.229V7.228C63.3 3.252 60.048 0 56.072 0h-.602c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.253 7.229 7.229 7.229z"
          />
        </svg>
      </ShareNetwork>
      <!-- COPY -->
      <ClipboardUrlButton
        :url="resolveUrl('copy')"
        class="w-8 h-8 text-white rounded-full btn bg-secondary lg:w-10 lg:h-10 share-network-btn"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareButton',
  props: {
    url: {
      type: String,
      default: ''
    },
    utm: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      shareOpen: false
    }
  },
  methods: {
    resolveUrl (type) {
      if (this.utm) {
        return process.env.BASE_URL + this.url + `&utm_source=${type}`
      }

      return process.env.BASE_URL + this.url
    }
  }
}
</script>

<style lang="postcss" scoped>
.share-card {
  .share-btn {
    @apply border-white text-white w-8 h-8;
  }

  .share-network-btn {
    @apply w-8 h-8;

    &:not(:last-child) {
      @apply mr-4;
    }
  }
}

.share-network {
  @apply flex items-center absolute bottom-0 right-0 transform opacity-0 -z-10;

  &--active {
    @apply translate-y-10 opacity-100 transition duration-150 ease-linear z-0 !important;
  }
}

.share--left {
  .share-network {
    @apply right-auto;

    left: -40px;
  }
}

@screen lg {
  .share-network--active {
    @apply translate-y-12 !important;
  }

  .share--left .share-network {
    left: -48px;
  }
}
</style>
