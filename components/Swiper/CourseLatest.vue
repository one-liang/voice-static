<template>
  <SwiperChannel name="courseLatest">
    <SwiperSlide
      v-for="course in 6"
      :key="`courseLatest_${course}`"
    >
      <CourseCardTop />
    </SwiperSlide>
  </SwiperChannel>
</template>

<script>
export default {
  name: 'SwiperCourseLatest'
}
</script>
