<template>
  <div id="movie-filter">
    <h2>Movie Filters</h2>
    <div class="filter-group">
      <check-filter
        v-for="(genre, index) in genres"
        :key="index"
        :genre="genre"
        @check-filter="checkFilter"
      ></check-filter>
    </div>
  </div>
</template>
<script>
import CheckFilter from './CheckFilter.vue';
import genres from '../util/genres';

export default {
  name: 'movie-filter',
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
    CheckFilter,
  },
};
</script>
