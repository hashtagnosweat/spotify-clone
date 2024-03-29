<script setup>
import { ref, toRefs, onMounted } from 'vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue';

import { useSongStore } from '../stores/song.js';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack } = storeToRefs(useSong);

let isHover = ref(false);
let isTrackTime = ref(null);

const props = defineProps({
  track: Object,
  artist: Object,
  playlist: Object,
  index: Number,
});

const { track, artist, index, playlist } = toRefs(props);

onMounted(() => {
  const audio = new Audio(track.value.path);
  audio.addEventListener('loadedmetadata', function () {
    const duration = audio.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    isTrackTime.value = minutes + ':' + seconds.toString().padStart(2, '0');
  });
});
</script>

<template>
  <!-- Mobile -->
  <li
    class="md:hidden flex items-center justify-between rounded-md"
    @click="useSong.playOrPauseThisSong(artist, track)"
  >
    <div class="flex items-center w-full py-1.5">
      <div class="mr-3">
        <img :src="artist.albumCover" alt="" width="40" />
      </div>

      <div>
        <div
          :class="{
            'text-green-500': currentTrack && currentTrack.name === track.name,
            'text-white': !(currentTrack && currentTrack.name === track.name),
          }"
          class="font-semibold"
        >
          {{ track.name }}
        </div>
        <div class="text-sm font-semibold text-gray-400">
          {{ playlist.name }}
        </div>
      </div>
    </div>

    <div class="text-gray-400 mr-3">
      <DotsVertical />
    </div>
  </li>

  <!-- Desktop -->
  <li
    class="hidden md:flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    v-if="playlist"
  >
    <div class="flex items-center w-full py-1.5">
      <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
        <Play
          v-if="!isPlaying"
          fillColor="#FFFFFF"
          :size="25"
          @click="useSong.playOrPauseThisSong(artist, track)"
        />
        <Play
          v-else-if="isPlaying && currentTrack.name !== track.name"
          fillColor="#FFFFFF"
          :size="25"
          @click="useSong.loadSong(artist, track)"
        />
        <Pause
          v-else
          fillColor="#FFFFFF"
          :size="25"
          @click="useSong.playOrPauseSong()"
        />
      </div>
      <div v-else class="text-white font-semibold w-[40px] ml-5">
        <span
          :class="{
            'text-green-500': currentTrack && currentTrack.name === track.name,
          }"
        >
          {{ index }}
        </span>
      </div>

      <div>
        <div
          :class="{
            'text-green-500': currentTrack && currentTrack.name === track.name,
            'text-white': !(currentTrack && currentTrack.name === track.name),
          }"
          class="font-semibold"
        >
          {{ track.name }}
        </div>
        <div class="text-sm font-semibold text-gray-400">
          {{ playlist.name }}
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <button type="button" v-if="isHover">
        <HeartOutline fillColor="#9CA3AF" :size="22" />
      </button>
      <div v-if="isTrackTime" class="text-xs mx-5 text-gray-400">
        {{ isTrackTime }}
      </div>
    </div>
  </li>
</template>
