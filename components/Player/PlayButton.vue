<template>
  <button class="focus:outline-none" @click.prevent="onPlay">
    <template v-if="display === 'circle'">
      <svg
        class="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" />
      </svg>
    </template>
    <template v-else-if="display === 'square-start'">
      開始播放
    </template>
    <template v-else-if="display === 'square-try'">
      前往試聽
      <svg
        class="w-3 h-3 ml-1"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
        />
      </svg>
    </template>
  </button>
</template>

<script>
export default {
  name: 'AudioPlayButton',
  props: {
    collectType: {
      type: String,
      required: true,
      validator (val) {
        return ['program', 'course', 'audiobook'].includes(val)
      }
    },
    collect: {
      type: String,
      required: true
    },
    trackType: {
      type: String,
      default: ''
    },
    track: {
      type: String,
      default: ''
    },
    layout: {
      type: String,
      default: ''
    },
    have: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    display () {
      if (this.layout === 'circle') {
        return 'circle'
      }

      if (this.collectType === 'program' || this.have === true) {
        return 'square-start'
      }

      if (
        this.collectType === 'audiobook' &&
        this.user.type === 'subscriber'
      ) {
        return 'square-start'
      }

      return 'square-try'
    }
  },
  methods: {
    onPlay () {
      console.log('onPlay')
    }
  }
}
</script>
