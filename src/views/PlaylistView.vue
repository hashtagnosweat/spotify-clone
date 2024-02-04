<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import SongRow from '../components/SongRow.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';

import artist from '../data/artist.json';
import playlists from '../data/playlists.json';

import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong);

const route = useRoute();
let playlistId = ref(null);
let filteredPlaylist = ref(null);

onMounted(() => {
  playlistId.value = parseInt(route.params.playlistId);
  const result = playlists.find((playlist) => playlistId.value === playlist.id);
  filteredPlaylist.value = result ? { ...result } : null;
});

watchEffect(() => {
  if (route.params.playlistId !== playlistId.value) {
    playlistId.value = parseInt(route.params.playlistId);

    const result = playlists.find(
      (playlist) => playlistId.value === playlist.id
    );
    filteredPlaylist.value = result ? { ...result } : null;
  }
});

const playFunc = () => {
  if (currentTrack.value) {
    useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value);
    return;
  }
  useSong.playFromFirst();
};
</script>
<template>
  <div class="py-2 px-6">
    <div class="flex items-end w-full relative h-full">
      <img
        class="rounded-sm"
        width="232"
        :src="filteredPlaylist.albumCover"
        alt="Album Cover"
      />

      <div class="w-full ml-6">
        <div
          style="font-size: 13px"
          class="text-white w-full h-0 cursor-pointer font-semibold"
        >
          Playlist
        </div>
        <div
          style="font-size: 80px"
          class="text-white w-full cursor-pointer font-bold leading-tight my-3"
        >
          {{ filteredPlaylist.name }}
        </div>
        <div class="text-white text-[13px] flex">
          <div class="flex">
            <img
              class="rounded-full"
              width="22"
              src="https://yt3.googleusercontent.com/yti/AGOGRCod5TyFy5fPJY_Miol6ybCTLTmPITpNhsXog7uGtA=s88-c-k-c0x00ffffff-no-rj"
            />
            <span class="ml-1 hover:cursor-pointer hover:underline font-bold"
              >hashtagnosweat</span
            >
          </div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2"></div>
            <span class="-ml-0.5"> {{ filteredPlaylist.releaseYear }}</span>
          </div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2"></div>
            <span class="-ml-0.5">
              {{ filteredPlaylist.tracks.length }} songs</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3"></div>
    <div class="flex items-center justify-between w-full mb-5">
      <div class="mt-5 flex gap-8 items-center justify-start bottom-0 mb-1.5">
        <button
          type="button"
          class="p-2.5 rounded-full bg-[#1ed760]"
          @click="playFunc()"
        >
          <Play v-if="!isPlaying" fillColor="#181818" :size="35" />
          <Pause v-else fillColor="#181818" :size="35" />
        </button>
        <button type="button">
          <DotsHorizontal fillColor="#FFFFFF" :size="25" />
        </button>
      </div>
      <div class="mt-5 flex gap-1 items-center justify-start bottom-0 mb-1.5">
        <div class="text-white text-sm">List</div>
        <button type="button" class="mt-1">
          <FormatListBulleted fillColor="#FFFFFF" :size="22" />
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between text-gray-400 px-5">
      <div class="flex items-center justify-between text-gray-400">
        <div class="mr-7">#</div>
        <div class="text-sm">Title</div>
      </div>
      <div>
        <ClockTimeThreeOutline fillColor="#FFFFFF" :size="18" />
      </div>
    </div>
    <div class="border-b border-b[#2A2A2A] mt-2 opacity-20"></div>

    <div class="mb-4"></div>
    <ul
      class="w-full"
      v-for="(track, index) in filteredPlaylist.tracks"
      :key="track"
    >
      <SongRow
        v-if="artist && filteredPlaylist"
        :artist="artist"
        :playlist="filteredPlaylist"
        :track="track"
        :index="++index"
      />
    </ul>
  </div>
</template>

<style coped>
.circle {
  width: 4px;
  height: 4px;
  background-color: rgb(189, 189, 189);
  border-radius: 100%;
}
</style>
