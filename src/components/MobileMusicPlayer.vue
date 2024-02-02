<script setup>
import { ref, watch, onMounted } from 'vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import uniqolor from 'uniqolor';
import artist from '../data/artist.json';

let randColor = ref('');
randColor.value = uniqolor.random();

import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong);

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
    id="MusicPlayer"
    v-if="audio"
    class="flex fixed items-center bottom-[60px] mb-0.5 w-full justify-center mobile-music-player"
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
      <div ref="seekerContainer" class="flex items-center justify-center">
        <div
          class="absolute h-[3px] z-10 inset-y-[56px] left-4 rounded-full z-100 w-0 bg-white"
          :style="`width: ${range}%`"
        />
        <div
          class="absolute h-[3px] w-[93%] inset-y-[56px] bg-white bg-opacity-60 rounded-full"
        />
      </div>
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
