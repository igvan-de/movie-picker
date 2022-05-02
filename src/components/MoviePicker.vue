<template>
    <section class="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        class="searchbox"
        v-model="searchTerm"
        @keypress.enter="getMovieList"
      />

      <button class="submit" @click="getMovieList">Search</button>
    </section>

</template>

<script>
export default({
  data: () => {
      
  },
  methods: {
  getMovieList: function() {
    this.$store.dispatch("fetchMovies", this.searchTerm);
  }}
});
</script>