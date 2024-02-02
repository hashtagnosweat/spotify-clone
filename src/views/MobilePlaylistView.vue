<script setup>
import { RouterLink } from 'vue-router';
import artist from '../data/artist.json';
import SongRow from '../components/SongRow.vue';

import Magnify from 'vue-material-design-icons/Magnify.vue';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
</script>
<template>
  <div class="px-3 pt-4 pb-[150px]">
    <RouterLink to="/library">
      <div class="w-full">
        <ArrowLeft fillColor="#FFFFFF" />
      </div>
    </RouterLink>

    <div class="flex items-center w-full pt-6 pb-4 gap-2">
      <div class="relative flex-grow">
        <Magnify
          class="absolute top-1/2 transform -translate-y-1/2 left-3"
          fillColor="#000000"
          :size="30"
        />
        <input
          class="pl-12 py-2 pr-3 rounded-[3px] border border-gray-300 focus:border-black focus:outline-none focus:ring focus:ring-black placeholder-black font-semibold w-full"
          type="text"
          v-bind="$attrs"
          placeholder="Find in playlist"
        />
      </div>
      <div class="w-1/5">
        <button class="bg-white rounded-[3px] py-2 border-gray-300 w-full">
          <span class="text-black font-semibold">Sort</span>
        </button>
      </div>
    </div>

    <div class="flex justify-center mt-5 mb-3">
      <img :src="artist.albumCover" alt="" width="250" />
    </div>

    <div class="w-full">
      <span class="text-white font-semibold text-[26px]">Beyond Happy</span>
    </div>

    <div class="flex items-center mt-3">
      <img
        class="rounded-full"
        width="27"
        src="https://yt3.googleusercontent.com/yti/AGOGRCod5TyFy5fPJY_Miol6ybCTLTmPITpNhsXog7uGtA=s88-c-k-c0x00ffffff-no-rj"
      />
      <span class="ml-3 text-white font-semibold text-md">hashtagnosweat</span>
    </div>

    <div class="flex items-center mt-3 text-white">14h 54min</div>

    <ul class="w-full" v-for="(track, index) in artist.tracks" :key="track">
      <SongRow :artist="artist" :track="track" :index="++index" />
    </ul>
  </div>
</template>

<style scoped></style>
