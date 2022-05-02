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

    <section>
        <div v-for="movie in listedMovies"
         :key="movie.imdbID">
            <p>{{ movie.Title }} - {{ movie.Type }} - {{ movie.Year }}</p>
        </div>
    </section>
    
</template>

<script>
export default({
  data: () => {
      
  },
  methods: {
      getMovieList: function() {
          this.$store.dispatch("fetchMovies", this.searchTerm);
          console.log('get: ',this.$store.dispatch("fetchMovies", this.searchTerm));
      },
      getMovieDetails: function() {
          this.$store.dispatch("fetchMovieDetails", this.searchTerm);
      }
  },
  computed: {
      listedMovies() {
          console.log('movieList: ',this.$store.getters.listedMovies);
          return this.$store.getters.listedMovies;
      }
  }
});
</script>

/** 
    requirements in this component:
        - list of fetched movies after search request
        - link to movieDetails component to view all data of cerntain movie
        - 
*/