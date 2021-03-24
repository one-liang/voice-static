<template>
  <SwiperChannel name="courseRecommend">
    <SwiperSlide
      v-for="course in 6"
      :key="`courseRecommend_${course}`"
    >
      <CourseCardTop />
    </SwiperSlide>
  </SwiperChannel>
</template>

<script>
export default {
  name: 'SwiperCourseRecommended'
}
</script>
