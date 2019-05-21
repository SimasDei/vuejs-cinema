import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';

export default [
  { path: '/', name: 'Overview', component: Overview },
  { path: '/movie/:id', name: 'Movie', component: Detail },
  { path: '*', redirect: { name: 'Overview' } },
];
