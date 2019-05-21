<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie.movie"
      >{{movie.movie.Title}}</movie-item>
    </div>
    <div class="no-results" v-else-if="movies.length">No Results.</div>
    <div class="no-results" v-else>Loading...</div>
  </div>
</template>
<script>
import genres from '../util/genres';

import MovieItem from './MovieItem.vue';

export default {
  name: 'movie-list',
  components: {
    MovieItem,
  },
  props: ['genre', 'time', 'movies'],
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    },
  },
  methods: {
    moviePassesGenreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else {
        let movieGenres = movie.movie.Genre.split(', ');
        let matched = true;
        this.genre.forEach(genre => {
          if (movieGenres.indexOf(genre) === -1) {
            matched = false;
          }
        });
        return matched;
      }
    },
  },
};
</script>
