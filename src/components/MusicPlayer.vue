<script setup>
import { ref, watch, onMounted } from 'vue';
import MusicPlayerVolume from '../components/MusicPlayerVolume.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import SkipNext from 'vue-material-design-icons/SkipNext.vue';
import SkipPrevious from 'vue-material-design-icons/SkipPrevious.vue';
import uniqolor from 'uniqolor';
import artist from '../data/artist.json';

let randColor = ref('');
randColor.value = uniqolor.random();

import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong);

let isHover = ref(false);
let isTrackTimeCurrent = ref(null);
let isTrackTimeTotal = ref(null);
let seeker = ref(null);
let seekerContainer = ref(null);
let range = ref(0);

onMounted(() => {
  if (audio.value) {
    setTimeout(() => {
      timeupdate();
      loadmetadata();
    }, 300);
  }

  if (currentTrack.value) {
    seeker.value.addEventListener('change', function () {
      const time = (audio.value.duration = seeker.value.value / 100);
      audio.value.currentTime = time;
    });
    seeker.value.addEventListener('mousedown', function () {
      audio.value.pause();
      isPlaying.value = false;
    });
    seeker.value.addEventListener('mouseup', function () {
      audio.value.play();
      isPlaying.value = true;
    });

    seekerContainer.value.addEventListener('click', function (e) {
      const clickPosition =
        (e.pageX - seekerContainer.value.offsetLeft) /
        seekerContainer.value.offsetWidth;
      const time = audio.value.duration * clickPosition;
      audio.value.currentTime = time;
      seeker.value.value =
        (100 / audio.value.duration) * audio.value.currentTime;
    });
  }
});

// To find how long has the song has been playing
const timeupdate = () => {
  audio.value.addEventListener('timeupdate', function () {
    var minutes = Math.floor(audio.value.currentTime / 60);
    var seconds = Math.floor(audio.value.currentTime - minutes * 60);
    isTrackTimeCurrent.value =
      minutes + ':' + seconds.toString().padStart(2, '0');
    const value = (100 / audio.value.duration) * audio.value.currentTime;
    range.value = value;
    seeker.value.value = value;
  });
};

// To get total duration
const loadmetadata = () => {
  audio.value.addEventListener('loadedmetadata', function () {
    const duration = audio.value.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    isTrackTimeTotal.value =
      minutes + ':' + seconds.toString().padStart(2, '0');
  });
};

watch(
  () => audio.value,
  () => {
    timeupdate();
    loadmetadata();
  }
);

watch(
  () => isTrackTimeCurrent.value,
  (time) => {
    if (time && time == isTrackTimeTotal.value) {
      useSong.nextSong(currentTrack.value);
    }
  }
);
</script>
<template>
  <div
    id="MobileMusicPlayer"
    v-if="audio"
    class="md:hidden flex fixed items-center bottom-[60px] mb-0.5 w-full justify-center mobile-music-player"
  >
    <div
      :style="`background-color: ${randColor.color}; `"
      class="w-[95%] h-[60px] rounded-md text-white"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            class="p-2 rounded-xl"
            :src="artist.albumCover"
            alt=""
            width="60"
          />
          <div class="ml-2 flex flex-col text-[14px]">
            <span>{{ currentTrack.name }}</span>
            <span>{{ currentArtist.name }}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 mr-2">
          <HeartOutline fillColor="#FFFFFF" :size="30" />

          <button
            class="p-1 mx-3"
            @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)"
          >
            <Play v-if="!isPlaying" fillColor="#FFFFFF" :size="40" />
            <Pause v-else fillColor="#FFFFFF" :size="40" />
          </button>
        </div>
      </div>
      <!-- :style="`width: ${range}%`" -->

      <div ref="seekerContainer" class="flex items-center justify-center">
        <div
          class="absolute h-[3px] z-10 inset-y-[55.5px] left-[17.3px] rounded-full z-100 w-0 bg-white"
          :style="{ width: `calc(${range > 93 ? '93%' : range}%)` }"
        ></div>
        />
        <div
          class="absolute h-[3px] w-[93%] inset-y-[56px] bg-white bg-opacity-60 rounded-full"
        />
      </div>
    </div>
  </div>
  <div
    id="MusicPlayer"
    v-if="audio"
    class="hidden lg:flex fixed items-center justify-between bottom-0 w-full z-50 h-[90px] bg-black"
  >
    <div class="flex items-center w-1/4">
      <div class="flex items-center ml-4">
        <img
          class="rounded-sm shadow-2xl"
          :src="currentArtist.albumCover"
          width="55"
        />
        <div class="ml-4">
          <div class="text-[14px] text-white hover:underline cursor-pointer">
            {{ currentTrack.name }}
          </div>
          <div
            class="text-[11px] text-gray-400 hover:underline hover:text-white cursor-pointer"
          >
            {{ currentArtist.name }}
          </div>
        </div>
      </div>

      <div class="flex items-center ml-4">
        <HeartOutline fillColor="#9CA3AF" :size="20" />
      </div>
    </div>

    <div class="max-w-[35%] mx-auto w-2/4 mb-3">
      <div class="flex-col items-center justify-center">
        <div class="flex items-center justify-center h-[30px]">
          <button class="mx-2">
            <SkipPrevious
              fillColor="#FFFFFF"
              :size="25"
              @click="useSong.prevSong(currentTrack)"
            />
          </button>
          <button
            class="p-1 rounded-full mx-3 bg-white"
            @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)"
          >
            <Play v-if="!isPlaying" fillColor="#181818" :size="25" />
            <Pause v-else fillColor="#181818" :size="25" />
          </button>
          <button class="mx-2">
            <SkipNext
              fillColor="#FFFFFF"
              :size="25"
              @click="useSong.nextSong(currentTrack)"
            />
          </button>
        </div>
      </div>
      <div class="flex items-center h-[25px]">
        <div
          v-if="isTrackTimeCurrent"
          class="text-white text-[12px] pr-2 pt-[11px]"
        >
          {{ isTrackTimeCurrent }}
        </div>

        <div
          ref="seekerContainer"
          class="w-full relative mt-2 mb-3"
          @mouseenter="isHover = true"
          @mouseleave="isHover = false"
        >
          <input
            @v-model="range"
            ref="seeker"
            type="range"
            class="absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
            :class="{ rangeDotHidden: !isHover }"
          />

          <div
            class="mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0"
            :style="`width: ${range}%`"
            :class="[isHover ? 'bg-green-500' : 'bg-white']"
          />

          <div
            class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"
          />
        </div>

        <div
          v-if="isTrackTimeTotal"
          class="text-white text-[12px] pl-2 pt-[11px]"
        >
          {{ isTrackTimeTotal }}
        </div>
      </div>
    </div>
    <div class="flex items-center w-1/4 justify-end pr-10">
      <MusicPlayerVolume />
    </div>
  </div>
</template>

<style>
.rangeDotHidden[type='range']::-webkit-slider-thumb {
  -webitkit-appearance: none;
  appearance: none;
  width: 0;
  height: 0;
}

.mobile-music-player {
  z-index: 100;
}
</style>
