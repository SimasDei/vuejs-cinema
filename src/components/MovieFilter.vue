<template>
  <div id="movie-filter">
    <h2>Movie Filters</h2>
    <h3>By time of day</h3>
    <div class="filter-group">
      <check-filter
        v-for="(time, index) in times"
        :key="index"
        :title="time"
        @check-filter="checkFilter"
        category="time"
      ></check-filter>
    </div>
    <h3>By Genre</h3>
    <div class="filter-group">
      <check-filter
        v-for="(genre, index) in genres"
        :key="index"
        :title="genre"
        @check-filter="checkFilter"
        category="genre"
      ></check-filter>
    </div>
  </div>
</template>
<script>
import CheckFilter from './CheckFilter.vue';
import genres from '../util/genres';
import times from '../util/times';

export default {
  name: 'movie-filter',
  data() {
    return {
      genres,
      times,
    };
  },
  methods: {
    checkFilter(category, genre, checked) {
      this.$bus.$emit('check-filter', category, genre, checked);
    },
  },
  components: {
    CheckFilter,
  },
};
</script>
