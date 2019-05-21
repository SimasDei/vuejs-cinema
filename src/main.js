import Vue from 'vue';

import './style.scss';
import genres from './util/genres';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                 <div class="movie" v-for="(movie, index) in movies" :key="index">{{movie.title}}</div>
                 </div>`,
      data() {
        return {
          movies: [
            { title: 'Pulp Fiction' },
            { title: 'The Great Lebowski' },
            { title: 'Robocop' },
          ],
        };
      },
    },
    'movie-filter': {
      template: `<div id="movie-filter">
                  <h2>Movie Filters</h2>
                  <div class="filter-group">
                  <check-filter v-for="(genre, index) in genres">{{genre}}</check-filter>
                  </div>
                 </div>`,
      data() {
        return {
          genres,
        };
      },
      components: {
        'check-filter': {
          template: `<div><slot /></div>`,
        },
      },
    },
  },
});
