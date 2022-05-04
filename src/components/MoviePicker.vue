<template>

    <section>
        <h2>Search your movie</h2>
    </section>

    <!-- Input section to submit name of movie or serie -->
    <section class="moviepicker">
        <section class="searchbox-wrap">
            <input
                type="text"
                placeholder="Search for a movie..."
                class="searchbox"
                v-model="searchTerm"
                @keypress.enter="getMoviesList"
            />

            <button class="submit" @click="getMoviesList">      
                <img src="../assets/loupe.png">
            </button>
        </section>

        <!-- List of all the movies received from getMoviesList method function -->
        <section>
            <div class="listedMovie"
             v-for="movie in listedMovies"
            :key="movie.imdbID">
                <img v-if="movie.Poster != 'N/A'" :src="movie.Poster">
                <img v-else src="../assets/video-camera.png">
                <p>{{ movie.Title }} - {{ movie.Type }} - {{ movie.Year }}</p>
            </div>
        </section>
    </section>
    
</template>

<script>
export default({
  data: () => ({
      searchTerm: ""
  }),
  /*
    Method function to create dispatch calls to set received data from api call in the state elements
     - getMoviesList sets state.listedMovie to received array of movies with certain name or title
     - getMovieDetails sets state.movieDetails to object of received date of specific movie
  */
  methods: {
      getMoviesList: function() {
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
<style>
h2 {
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #46d6d4;
}


.moviepicker {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.searchbox-wrap {
    display: flex;
    width: 100%;
    align-items: center;
}

.searchbox {
    width: 80%;
    height: 2.5rem;
    border: 0rem solid black;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow:4px 4px 10px rgba(6, 6, 6, 0.068);
}

    .searchbox:focus {
        border: 0rem solid black;
        background-color: white;
        color: black;
    }

    .submit {
        width: 2rem;
        height: 2rem;
        border: 0rem;
        border-radius: 1rem;
        margin-left: 1rem;
        background-color: rgba(0, 0, 0, 0);
    }

        .submit img {
            width: 1.5rem;
            height: 1.5rem;
        }

.listedMovie {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

    .listedMovie:hover {
        transform: scale(110%);
    }

    .listedMovie img {
        width: 10rem;
        height: 10rem;
        border-radius: 1rem;
        box-shadow:4px 4px 10px rgba(6, 6, 6, 0.068);
    }

    .listedMovie p {
        font-size: 1rem;
        font-weight: bold;
    }



</style>
/** 
    requirements in this component:
        - list of fetched movies after search request
        - link to movieDetails component to view all data of cerntain movie
        - 
*/