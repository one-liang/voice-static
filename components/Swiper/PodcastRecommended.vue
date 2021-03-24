<template>
  <SwiperChannel name="podcastRecommend">
    <SwiperSlide
      v-for="program in 6"
      :key="`podcastLatest_${program}`"
    >
      <PodcastCardTop />
    </SwiperSlide>
  </SwiperChannel>
</template>

<script>
export default {
  name: 'SwiperPodcastRecommended'
}
</script>
