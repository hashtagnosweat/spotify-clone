import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import LibraryView from '../views/LibraryView.vue';
import MobileHomeView from '../views/MobileHomeView.vue';
import MobileSearchView from '../views/MobileSearchView.vue';
import MobileLibraryView from '../views/MobileLibraryView.vue';
import MobilePlaylistView from '../views/MobilePlaylistView.vue';

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
      components: {
        default: SearchView,
        mobile: MobileSearchView,
      },
    },
    // Mobile only
    {
      path: '/library',
      components: {
        mobile: MobileLibraryView,
      },
    },
    {
      path: '/library/:playlistId(\\d+)',
      components: {
        default: LibraryView,
        mobile: MobilePlaylistView,
      },
      props: true,
    },
  ],
});

export default router;
