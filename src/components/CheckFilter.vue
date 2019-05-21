<template>
  <div :class="{'check-filter': true, 'active': checked}" @click="checkFilter">
    <span class="checkbox"></span>
    <span class="check-filter-title">{{genre}}</span>
  </div>
</template>
<script>
export default {
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
};
</script>
