<script setup>
import { RouterLink } from 'vue-router';
import Sort from 'vue-material-design-icons/Sort.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import ArrowExpandAll from 'vue-material-design-icons/ArrowExpandAll.vue';

import playlists from '../data/playlists.json';
</script>

<template>
  <div class="px-3 pt-4 pb-[80px]">
    <div class="bg-red w-full flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="rounded-full"
          width="27"
          src="https://yt3.googleusercontent.com/yti/AGOGRCod5TyFy5fPJY_Miol6ybCTLTmPITpNhsXog7uGtA=s88-c-k-c0x00ffffff-no-rj"
        />
        <span class="ml-3 text-white font-bold text-xl">Your Library</span>
      </div>
      <div class="flex items-center gap-3">
        <Magnify fillColor="#FFFFFF" />
        <Plus fillColor="#FFFFFF" />
      </div>
    </div>

    <div class="flex items-center mt-5 gap-2">
      <div
        class="border-solid border-2 border-zinc-400 text-white rounded-full px-4 py-1"
      >
        Music
      </div>
      <div
        class="border-solid border-2 border-zinc-400 text-white rounded-full px-4 py-1"
      >
        Podcast
      </div>
    </div>

    <div
      class="border-b-1 left-0 absolute bg-black h-[2px] my-2 overflow-x-hidden"
      style="width: calc(100%)"
    ></div>

    <div class="flex items-center justify-between mt-7 mb-4">
      <div class="flex items-center text-white">
        <Sort fillColor="#FFFFFF" />
        <span class="ml-2 text-[14px]">Recents</span>
      </div>
      <ArrowExpandAll fillColor="#FFFFFF" />
    </div>

    <div
      v-for="(playlist, index) in playlists"
      :key="index"
      class="hover:bg-[#2A2929] rounded-md"
    >
      <RouterLink :to="`/library/${playlist.id}`">
        <div class="flex items-center mb-5">
          <img :src="playlist.albumCover" alt="" width="60" />
          <div class="ml-3">
            <span class="text-white"> {{ playlist.name }}</span>
            <div class="flex items-center w-full text-gray-400">
              <span>Playlist</span>
              <div class="mx-1 mt-1 circle" />
              <span>{{ playlist.creator }}</span>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.mobil-swiper .swiper {
  width: 100% !important;
  overflow: visible !important;
}
</style>
