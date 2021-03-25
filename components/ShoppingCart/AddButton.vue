<template>
  <button :disabled="loading" @click="onClick">
    加入購物車
  </button>
</template>

<script>
export default {
  name: 'ShoppingCartAddButton',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator (val) {
        return ['audiobook', 'course'].includes(val.toLowerCase())
      }
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    onClick () {
      console.log('onCLick')
    }
  }
}
</script>
