import { createStore } from 'vuex';
import axios from "axios";

/* 
IDEAS:
    - searchEventListener that displays movies after the first 3 letters are past in the searchbar (NOT POSSIBLE, BUT COOL FEATURE!) 
    - display 3 or 4 random movies in the homescreen, with title and rate.
    - movie picker suggestions, that if the users doens't know which movie he or she wants to watch.
      They can pick a few keywords (gernes, etc.) to get a list of 4 suggested movies
*/

export default createStore({
    /* 
      There are 3 different kind of states in this application 
      - listedMovies[]  = Are all the movies listed after the search request
      - movieDetails    = All the details of a highlighted movie
      - error           = Error message when something went wrong
    */
  state:{
    listedMovies:  [],
    movieDetails: null,
    error:        ''
  },
  /*
    All required getters (store computed properties) of this store.
  */
  getters:{
    listedMovies: state => state.listedMovies,
    movieDetails: state => state.movieDetails,
    error: state => state.error
  },
  /* 
    In this store there a 4 mutations needed:
      - FETCHMOVIES = to asign state.listedMovies the given given data fetched from the request in action and will check if state.listedMovies & state.error have a value and will set them back to empty state
      - EMPTYLIST   = to set sate.listedMovies back to an empty list
      - FETCHMOVIESDETAILS = to asign state.movieDetails the given data fetched from the request in actions
      - CLOSEMOVIESDETAILS = to close the state.movieDetails (set the state back to null)
  */
  mutations: {
    FETCHMOVIES(state, payload) {
      if (state.listedMovies.length > 0) {
        state.listedMovies = [];
      }
      if (state.error.length > 0) {
        state.error = "";
      }
      if (payload.Response == 'True') {
        state.listedMovies = payload.Search;
      } else if (payload.Response == 'False') {
        state.error = payload.Error;
      }
    }
    ,
    EMPTYLIST: state => {
      state.listedMovies = [];
    },
    FETCHMOVIESDETAILS(state, payload) {
      if (payload.Response == 'True') {
        state.movieDetails = payload;
      } else if (payload.Response == 'False') {
        state.error = payload.Error;
      }
    },
    CLOSEMOVIEDETAILS: state => {
      state.movieDetails = [];
    }
  },
  /*
    This store makes usage of the following actions:
      - fetchMovies which receives a payload parameter which is the given name of the searchbox section,
        it will make a get request with the payload parameter to get an array of 10 movies with that name
      - fetchMovieDetails which receives a payload parameter with the omdbID of a movie,
        it will make a get request with the payload parameter to receive all data about that specific movie
  */
  actions:{
    fetchMovies({commit}, payload) {
      axios
        .get(`http://www.omdbapi.com/?s=${payload}&apikey=4750d3ac`)
        .then(result => {
          commit('FETCHMOVIES', result.data);
        })
    },
    fetchMovieDetails({commit}, payload) {
      axios
        .get(`http://www.omdbapi.com/?i=${payload}&apikey=4750d3ac`)
        .then(result => {
          commit('FETCHMOVIESDETAILS', result.data);
        })
    }
  }
})
