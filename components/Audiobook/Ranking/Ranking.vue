<template>
  <div class="px-4 py-6 bg-white lg:px-6">
    <template v-for="(item, index) in 5">
      <AudiobookRankingItem
        v-if="index <= 4"
        :key="`rank_${index}`"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'AudiobookRanking'
}
</script>
