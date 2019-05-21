<template>
  <div id="movie-list">
    <div class="movie" v-for="(movie, index) in filteredMovies" :key="index">{{movie.title}}</div>
  </div>
</template>
<script>
import genres from '../util/genres';

export default {
  name: 'movie-list',
  data() {
    return {
      movies: [
        { title: 'Pulp Fiction', genre: genres.DRAMA },
        { title: 'The Great Lebowski', genre: genres.COMEDY },
        { title: 'Beverly Hills Cop', genre: genres.COMEDY },
        { title: 'Robocop', genre: genres.CRIME },
      ],
    };
  },
  props: ['genre', 'time'],
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    },
  },
  methods: {
    moviePassesGenreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else return this.genre.find(genre => movie.genre === genre);
    },
  },
};
</script>
