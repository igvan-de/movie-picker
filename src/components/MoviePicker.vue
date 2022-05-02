<template>

    <!-- Input section to submit name of movie or serie -->
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

    <!-- List of all the movies received from getMovieList method function -->
    <section>
        <div v-for="movie in listedMovies"
         :key="movie.imdbID">
            <p>{{ movie.Title }} - {{ movie.Type }} - {{ movie.Year }}</p>
        </div>
    </section>
    
</template>

<script>
export default({
  data: () => ({
      searchTerm: ""
  }),
  /*
    Method function to create dispatch calls to set received data from api call in the state elements
     - getMovieList sets state.listedMovie to received array of movies with certain name or title
     - getMovieDetails sets state.movieDetails to object of received date of specific movie
  */
  methods: {
      getMovieList: function() {
          this.$store.dispatch("fetchMovies", this.searchTerm);
      },
      getMovieDetails: function() {
          this.$store.dispatch("fetchMovieDetails", this.searchTerm);
      }
  },
  /*
    Computed functions to receice the state values of the store
     - listedMovies() receives the listedMovies state via the getters in the store
  */
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