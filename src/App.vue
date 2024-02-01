<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import MenuItem from './components/MenuItem.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import LibraryItem from './components/LibraryItem.vue';
import Navigation from './components/Navigation.vue';
import playlists from './data/playlists.json';

import { useSongStore } from './stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack } = storeToRefs(useSong);

onMounted(() => {
  isPlaying.value = false;
});
</script>

<template>
  <main class="bg-black h-screen">
    <!-- <div
      class="hidden lg:flex w-[calc(100%-444px)] my-2 mr-2 h-[60px] rounded-t-lg fixed right-0 z-20 bg-[#101010] items-center justify-between"
    >
      <Navigation />
    </div> -->

    <div class="hidden lg:flex flex-col h-[calc(100%-97px)]">
      <div class="rounded-lg my-2 ml-2 px-6 pt-4 w-[420px] z-50 bg-[#111111]">
        <RouterLink to="/">
          <MenuItem
            class="ml-[1px]"
            :iconSize="23"
            name="Home"
            iconString="home"
            pageUrl="/"
          />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem
            class="ml-[1px]"
            :iconSize="23"
            name="Search"
            iconString="search"
            pageUrl="/search"
          />
        </RouterLink>
      </div>
      <div
        class="rounded-lg ml-2 px-6 py-4 w-[420px] z-50 h-[550px] bg-[#111111] overflow-y-auto"
      >
        <LibraryItem
          class="ml-[1px]"
          :iconSize="23"
          name="Your Library"
          iconString="library"
          pageUrl="/library"
          :playlists="playlists"
        />
      </div>
    </div>

    <div
      class="hidden lg:block fixed right-0 top-0 my-2 mr-2 w-[calc(100%-444px)] h-[calc(100%-105px)] rounded-lg overflow-auto overflow-x-hidden bg-[#111111]"
    >
      <div
        class="flex items-center justify-between sticky top-0 h-[60px] bg-black z-200"
      >
        <Navigation />
      </div>
      <RouterView :playlists="playlists" />
      <div class="mb-[100px]"></div>
    </div>

    <MusicPlayer v-if="currentTrack" />
  </main>
</template>
