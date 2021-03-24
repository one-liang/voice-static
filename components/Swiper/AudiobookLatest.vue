<template>
  <SwiperChannel name="audiobookLatest">
    <SwiperSlide
      v-for="audiobook in 6"
      :key="`audioBookLatest_${audiobook}`"
    >
      <AudiobookCardTop />
    </SwiperSlide>
  </SwiperChannel>
</template>

<script>
export default {
  name: 'SwiperAudiobookLatest'
}
</script>
