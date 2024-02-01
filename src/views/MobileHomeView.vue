<script setup>
import { RouterLink } from 'vue-router';

import playlists from '../data/playlists.json';
import artist from '../data/artist.json';
</script>
<template>
  <div class="bg-red w-full flex items-center justify-between">
    <span class="text-white font-bold text-xl">Good Morning</span>
    <div class="flex items-center gap-3">
      <HeartOutline fillColor="#FFFFFF" />
      <HeartOutline fillColor="#FFFFFF" />
      <HeartOutline fillColor="#FFFFFF" />
    </div>
  </div>

  <div class="flex items-center mt-5 gap-2">
    <div class="bg-[#4b4745] text-white rounded-full px-4 py-1">Music</div>
    <div class="bg-[#4b4745] text-white rounded-full px-4 py-1">Podcast</div>
  </div>

  <div class="grid grid-cols-2 gap-2 my-5 text-white">
    <div v-for="playlist in playlists.slice(0, 6)" :key="playlist.id">
      <RouterLink to="/">
        <div
          class="flex items-center bg-[#2b2926] hover:bg-[#4b4745] rounded-[4px]"
        >
          <img :src="playlist.albumCover" width="48" class="rounded-[4px]" />
          <span class="ml-2 text-sm font-semibold">{{ playlist.name }}</span>
        </div>
      </RouterLink>
    </div>
  </div>

  <button
    type="button"
    class="text-white text-2xl font-semibold hover:underline cursor-pointer"
  >
    Made For You
  </button>
  <div class="py-1.5"></div>
  <div class="items-center text-white">
    <div class="mobile-swiper">
      <swiper-container
        :slides-per-view="3"
        :breakpoints="{
          768: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide>
          <div class="m-2">
            <img class="" :src="artist.albumCover" width="140" />
            <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="m-2">
            <img class="" :src="artist.albumCover" width="140" />
            <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="m-2">
            <img class="" :src="artist.albumCover" width="140" />
            <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="m-2">
            <img class="" :src="artist.albumCover" width="140" />
            <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="m-2">
            <img class="" :src="artist.albumCover" width="140" />
            <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="m-2">
            <img class="" :src="artist.albumCover" width="140" />
            <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  overflow: visible !important;
}
</style>
