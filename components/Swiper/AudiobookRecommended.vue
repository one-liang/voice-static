<template>
  <SwiperChannel name="audiobookRecommend">
    <SwiperSlide
      v-for="audiobook in 6"
      :key="`audioBookRecommend_${audiobook}`"
    >
      <AudiobookCardTop />
    </SwiperSlide>
  </SwiperChannel>
</template>

<script>
export default {
  name: 'SwiperAudiobookRecommended'
}
</script>
