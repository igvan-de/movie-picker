<template>
  <main>
    <MoviePicker />
  </main>
</template>
<script setup>
  import About from '@/components/About.vue'
  import MoviePicker from '@/components/MoviePicker.vue'
</script>
<style scoped>
main {
    display: flex;
    justify-content: center;
    top: 7rem;
}
</style>