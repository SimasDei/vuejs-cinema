import Vue from 'vue';
import VueResource from 'vue-resource';

import './style.scss';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

Vue.use(VueResource);

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
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
    MovieList,
    MovieFilter,
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.body;
    });
  },
});
