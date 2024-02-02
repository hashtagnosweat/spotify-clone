<script setup>
import { RouterLink } from 'vue-router';
import BellOutline from 'vue-material-design-icons/BellOutline.vue';
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue';
import CogOutline from 'vue-material-design-icons/CogOutline.vue';
import GreetingComponent from '../components/GreetingComponent.vue';

import playlists from '../data/playlists.json';
import artist from '../data/artist.json';
</script>
<template>
  <div class="px-3 pt-4 pb-[150px]">
    <div class="bg-red w-full flex items-center justify-between">
      <span class="text-white font-bold text-xl"><GreetingComponent /></span>
      <div class="flex items-center gap-3">
        <BellOutline fillColor="#FFFFFF" />
        <ClockOutline fillColor="#FFFFFF" />
        <CogOutline fillColor="#FFFFFF" />
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
            <img
              :src="`https://picsum.photos/id/${playlist.id}/300/300`"
              width="48"
              class="rounded-[4px]"
            />
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
          :free-mode="true"
          :breakpoints="{
            360: {
              slidesPerView: 2.2,
              spaceBetween: 0,
            },
            420: {
              slidesPerView: 2.7,
              spaceBetween: 0,
            },
          }"
        >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div
                class="text-[#A7A7A7] pt-1 pb-3 text-[14px] h-[50px] text-ellipsis overflow-hidden"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                sequi blanditiis. Voluptatum error esse est unde tempore quos,
                non maxime, ullam, consequatur nesciunt necessitatibus. Nemo
                maiores voluptates qui minus quisquam.
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
        </swiper-container>
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
          :free-mode="true"
          :breakpoints="{
            360: {
              slidesPerView: 2.2,
              spaceBetween: 0,
            },
            420: {
              slidesPerView: 2.7,
              spaceBetween: 0,
            },
          }"
        >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
        </swiper-container>
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
          :free-mode="true"
          :breakpoints="{
            360: {
              slidesPerView: 2.2,
              spaceBetween: 0,
            },
            420: {
              slidesPerView: 2.7,
              spaceBetween: 0,
            },
          }"
        >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
        </swiper-container>
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
          :free-mode="true"
          :breakpoints="{
            360: {
              slidesPerView: 2.2,
              spaceBetween: 0,
            },
            420: {
              slidesPerView: 2.7,
              spaceBetween: 0,
            },
          }"
        >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
        </swiper-container>
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
          :free-mode="true"
          :breakpoints="{
            360: {
              slidesPerView: 2.2,
              spaceBetween: 0,
            },
            420: {
              slidesPerView: 2.7,
              spaceBetween: 0,
            },
          }"
        >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="m-2">
              <img class="" :src="artist.albumCover" width="150" />
              <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">Halooo</div>
            </div></swiper-slide
          >
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobil-swiper .swiper {
  width: 100% !important;
  overflow: visible !important;
}
</style>
