<template>
    <!-- Section of whole component with all the related details of seleted movie -->
    <section v-if="movie" class="movieDetails">
        <div class="movieIMG">
            <img v-if="movie.Poster != 'N/A'" :src="movie.Poster">
            <img v-else src="../assets/video-camera.png">
        </div>
        <!-- The main details of a movie, like name, year of release and rating -->
        <div class="mainDetails">
            <h2>{{movie.Title}} - {{movie.Year}} 
            <span class="rating" v-if="movie.imdbRating && movie.imdbRating != 'N/A'"> -<span class="star"></span>{{movie.imdbRating}}</span></h2>
        </div>
        <!-- Description of the movie -->
        <div class="description">
            <p v-if="movie.Plot && movie.Plot != 'N/A'">{{movie.Plot}}</p>
        </div>
        <!-- All extra details of a the movie, like genre, actors etc. All of them are also checked if the are in the movie object and if they are not empty -->
        <div class="extraDetails">
            <div v-if="movie.Genre && movie.Genre != 'N/A'" class="extraDetail">
                <h3>Genre:</h3><p>{{movie.Genre}}</p>
            </div>
            <div v-if="movie.Released && movie.Released != 'N/A'" class="extraDetail">
                <h3>Released:</h3><p>{{movie.Released}}</p>
            </div>
            <div v-if="movie.Actors && movie.Actors != 'N/A'" class="extraDetail">
                <h3>Actors:</h3><p>{{movie.Actors}}</p>
            </div>
            <div v-if="movie.Director && movie.Director != 'N/A'" class="extraDetail">
                <h3>Director(s):</h3><p>{{movie.Director}}</p>
            </div>
            <div v-if="movie.Writer && movie.Writer != 'N/A'" class="extraDetail">
                <h3>Writer(s):</h3><p>{{movie.Writer}}</p>
            </div>
            <div v-if="movie.Awards && movie.Awards != 'N/A'" class="extraDetail">
                <h3>Awards:</h3><p>{{movie.Awards}}</p>
            </div>
            <div v-if="movie.Language && movie.Language != 'N/A'" class="extraDetail">
                <h3>Language:</h3><p>{{movie.Language}}</p>
            </div>
            <div v-if="movie.BoxOffice && movie.BoxOffice != 'N/A'" class="extraDetail">
                <h3>BoxOffice:</h3><p>{{movie.BoxOffice}}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default ({
    data: () => ({
        return: {}
    }),
    methods: {},
    /* 
        movie() computed functions gets the selected movie from the store.getters which is defined in the movieDetails state
    */
    computed: {
        movie() {
            console.log('details', this.$store.getters.movieDetails);
            return this.$store.getters.movieDetails;
        }
    }
})
</script>
<style scoped>

.movieDetails {
    display: flex;
    flex-direction: column;
}

.movieIMG {
    display: flex;
    justify-content: center;
}

    .movieIMG img {
        display: flex;
        width: 20rem;
        height: 20rem;
        border-radius: 1rem;
        box-shadow:4px 4px 10px rgba(6, 6, 6, 0.068);
        margin-bottom: 1.5rem;
    }

.mainDetails {
    display: inline-block;
    width: 100%;
}

    .mainDetails h2 {
        font-size: 2rem;
        font-weight: 900;
    }

    .star {
        display: inline-block;
        background-image: url('../assets/star.png');
        background-size: cover;
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
    }

    .rating {
        font-size: 2rem;
        font-weight: 900;
    }

.extraDetails {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
}

    .extraDetail {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

        .extraDetail h3 {
            font-weight: 600;
        }

</style>