import Vue from 'vue';
import VueResource from 'vue-resource';
import Moment from 'moment-timezone';

Moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {
  get() {
    return this.$root.Moment;
  },
});

import './style.scss';
import { checkFilter } from './util/bus';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

Vue.use(VueResource);

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus;
  },
});

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
    Moment,
    day: Moment(),
    bus,
  },
  components: {
    MovieList,
    MovieFilter,
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.body;
    });
    this.$bus.$on('check-filter', checkFilter.bind(this));
  },
});
