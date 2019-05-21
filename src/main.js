import Vue from 'vue';
import VueResource from 'vue-resource';
import Moment from 'moment-timezone';
import VueRouter from 'vue-router';

Moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {
  get() {
    return this.$root.Moment;
  },
});

import './style.scss';
import { checkFilter, setDay } from './util/bus';
import routes from './util/routes';

const router = new VueRouter({ routes });

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus;
  },
});

Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  data: {
    genre: [],
    time: [],
    movies: [],
    Moment,
    day: Moment(),
    bus,
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.body;
    });
    this.$bus.$on('check-filter', checkFilter.bind(this));
    this.$bus.$on('set-day', setDay.bind(this));
  },
});
