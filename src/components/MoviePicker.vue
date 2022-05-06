<template>
    <section class="mainBody">
        <section>
            <h3>Search your movie</h3>
        </section>

        <!-- Input section to submit name of movie or serie -->
        <section class="moviePicker">
            <div class="searchboxWrap">
                <input
                    type="search"
                    placeholder="Search for a movie..."
                    class="searchbox"
                    v-model="movieName"
                    @keypress.enter="getMoviesList">
                <button class="submit" @click="getMoviesList">      
                    <img src="../assets/loupe.png">
                </button>
            </div>

            <!-- List of all the movies received from getMoviesList method function -->
            <div>
                <RouterLink to="/movie-details">
                    <div class="listedMovie"
                    v-for="movie in listedMovies"
                    :key="movie.imdbID"
                    @click="getMovieDetails(movie.imdbID)">
                    <!-- TODO: remove hyperLink underline!! -->
                        <img v-if="movie.Poster != 'N/A'" :src="movie.Poster">
                        <img v-else src="../assets/video-camera.png">
                        <p>{{ movie.Title }} - {{ movie.Type }} - {{ movie.Year }}</p>
                    </div>
                </RouterLink>
                <!-- If there is an error in the search query then here will the error respone been displayed -->
                <div class="error" v-if="error">
                    <img src="../assets/cancel.png"><p>{{error}}</p>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
export default({
  data: () => ({
      movieName: ""
  }),
  /*
    Method function to create dispatch calls to set received data from api call in the state elements
     - getMoviesList sets state.listedMovie to received array of movies with certain name or title
     - getMovieDetails sets state.movieDetails to object of received date of specific movie. The movieId parameter is to imdbID of the movie
  */
  methods: {
      getMoviesList: function() {
          this.$store.dispatch("fetchMovies", this.movieName);
      },
      getMovieDetails: function(movieId) {
          this.$store.dispatch("fetchMovieDetails", movieId);
      }
  },
  /*
    Computed functions to receice the state values of the store
     - listedMovies() receives the listedMovies state via the getters in the store
  */
  computed: {
      listedMovies() {
          return this.$store.getters.listedMovies;
      },
      error() {
          return this.$store.getters.error;
      }
  }
});
</script>
<style scoped>
@import '../assets/base.css';

h3 {
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #46d6d4;
}

.moviePicker {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.searchboxWrap {
    display: flex;
    width: 100%;
    align-items: center;
}

.searchbox {
    width: 80%;
    height: 2.5rem;
    border: 0rem;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow:4px 4px 10px rgba(6, 6, 6, 0.068);
}

    .searchbox:focus {
        border: 0rem;
        background-color: white;
        color: black;
    }

    .submit {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        border: 1px solid #3c3c3ca8;
        border-radius: 1.5rem;
        margin-left: 1rem;
        background-color: rgba(0, 0, 0, 0);
        align-items: center;
        justify-content: center;
    }

        .submit img {
            width: 1.5rem;
            height: 1.5rem;
        }

        .submit:hover {
            transform: scale(110%);
        }

.listedMovie {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

    .listedMovie:hover {
        transform: scale(110%);
    }

    .listedMovie img {
        width: 12rem;
        height: 12rem;
        border-radius: 1rem;
        box-shadow:4px 4px 10px rgba(6, 6, 6, 0.068);
    }

    .listedMovie p {
        font-size: 1.3rem;
        font-weight: bold;
        color: white;

    }

    .listedMovie:after {
        content: ' ';
        border: 1px solid #3c3c3ca8;
        position: absolute;
        /* left: calc(50% + 25px);; */
        /* top:  */
        bottom: -1rem;
        width: 100%;
    }

    .listedMovie:last-of-type:after {
        display: none;
    }

.error {
    display: flex;
    align-items: center;
    gap: 1rem;
}

    .error img {
        width: 2rem;
        height: 2rem;
    }

    .error p {
        color: #ED4337;
        font-weight: 900;
    }

@media (max-width: 1024px) {
.listedMovie img {
    max-width: 8rem;
}

.listedMovie p {
    font-size: 1rem;
}
}
</style>
