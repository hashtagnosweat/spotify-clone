<script setup>
import { toRefs, ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HomeCard from '../components/HomeCard.vue';

const props = defineProps({
  playlists: Object,
});

const { playlists } = toRefs(props);
</script>

<template>
  <div class="py-2 px-6">
    <div class="grid grid-cols-3 gap-2 my-5 text-white">
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
    <div class="flex items-center">
      <HomeCard
        :key="index"
        image="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9afa9d6337b7048b77e05d8d/1/en/default"
        title="Daily Mix 1"
        subTitle="Jeff Bernat, JON VINYL, Jesse Gold and more"
      />
      <HomeCard
        :key="index"
        image="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3ca5bba1b31ac4939d85fedc/2/en/default"
        title="Daily Mix 2"
        subTitle="MALIQ & D'Essentials, Tulus, Voxxes and more"
      />
      <HomeCard
        :key="index"
        image="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba1d45585ab07d4bd7fe53351/3/en/default"
        title="Daily Mix 3"
        subTitle="Laufey, beabadoobee, Lyn Lapid and more"
      />
      <HomeCard
        :key="index"
        image="https://dailymix-images.scdn.co/v2/img/baa4a09ca62a85dab5de4a8e9d635571b9cfac9d/4/en/default"
        title="Daily Mix 4"
        subTitle="Chet Baker, Bill Evans Trio, Stan Getz and more"
      />
      <HomeCard
        :key="index"
        image="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0e2a3a2c664a4bbb14e44f8e/5/en/default"
        title="Daily Mix 5"
        subTitle="Omar Apollo, Eloise, Rex Orange County and more"
      />
      <HomeCard
        :key="index"
        image="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0e2a3a2c664a4bbb14e44f8e/5/en/default"
        title="Daily Mix 5"
        subTitle="Omar Apollo, Eloise, Rex Orange County and more"
      />
    </div>
  </div>
  <div class="py-2 px-6">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Your top mixes
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <div v-for="card in 6">
        <HomeCard
          :key="index"
          image="/images/albumCovers/DiariesOfAHero.png"
          title="Pasangan Jiwa"
          subTitle="Lagu cinta terbaik dari kancah musik Indonesia."
        />
      </div>
    </div>
  </div>
</template>
