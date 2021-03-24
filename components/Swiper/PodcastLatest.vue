<template>
  <SwiperChannel name="podcastLatest">
    <SwiperSlide
      v-for="episode in 6"
      :key="`podcastLatest_${episode}`"
    >
      <PodcastCardTop />
    </SwiperSlide>
  </SwiperChannel>
</template>

<script>
export default {
  name: 'SwiperPodcastLatest'
}
</script>
