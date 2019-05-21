<template>
  <div id="overview">
    <day-select :selected="day"></day-select>
    <div class="main">
      <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
      <movie-filter></movie-filter>
    </div>
  </div>
</template>
<script>
import MovieList from './MovieList.vue';
import MovieFilter from './MovieFilter.vue';
import DaySelect from './DaySelect.vue';

export default {
  name: 'overview',
  components: {
    MovieList,
    MovieFilter,
    DaySelect,
  },
  props: ['genre', 'time', 'movies', 'day'],
};
</script>
