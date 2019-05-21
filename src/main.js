import Vue from 'vue';

import './style.scss';
import genres from './util/genres';

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
  },
  methods: {
    checkFilter(category, genre, checked) {
      if (checked) {
        this[category].push(genre);
      } else {
        let index = this[category].indexOf(genre);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    },
  },
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                 <div class="movie" v-for="(movie, index) in filteredMovies" :key="index">{{movie.title}}</div>
                 </div>`,
      data() {
        return {
          movies: [
            { title: 'Pulp Fiction', genre: genres.DRAMA },
            { title: 'The Great Lebowski', genre: genres.COMEDY },
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
    },
    'movie-filter': {
      template: `
      <div id="movie-filter">
        <h2>Movie Filters</h2>
        <div class="filter-group">
        <check-filter v-for="(genre, index) in genres" :key="index" :genre="genre" @check-filter="checkFilter"></check-filter>
        </div>
      </div>
      `,
      data() {
        return {
          genres,
        };
      },
      methods: {
        checkFilter(category, genre, checked) {
          this.$emit('check-filter', category, genre, checked);
        },
      },
      components: {
        'check-filter': {
          template: `
          <div :class="{'check-filter': true, 'active': checked}" @click="checkFilter">
            <span class="checkbox"></span>
            <span class="check-filter-title">{{genre}}</span>
          </div>          
          `,
          data() {
            return {
              checked: false,
            };
          },
          props: ['genre'],
          methods: {
            checkFilter() {
              this.checked = !this.checked;
              this.$emit('check-filter', 'genre', this.genre, this.checked);
            },
          },
        },
      },
    },
  },
});
