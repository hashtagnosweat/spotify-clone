import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import LibraryView from '../views/LibraryView.vue';
import MobileHomeView from '../views/MobileHomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: HomeView,
        mobile: MobileHomeView,
      },
    },
    {
      path: '/search',
      component: SearchView,
    },

    {
      path: '/library/:playlistId(\\d+)',
      component: LibraryView,
      props: true,
    },
  ],
});

export default router;
