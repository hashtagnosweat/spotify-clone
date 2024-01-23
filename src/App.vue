<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import MenuItem from './components/MenuItem.vue';

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

let openMenu = ref(false);
</script>

<template>
  <main class="bg-black h-screen">
    <div
      class="w-[calc(100%-360px)] my-2 mr-2 h-[60px] rounded-lg fixed right-0 z-20 bg-[#23201b] bg-opacity-80 flex items-center justify-between"
    >
      <div class="flex items-center ml-6">
        <button
          type="button"
          class="rounded-full bg-black p-[1px] cursor-pointer"
        >
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button
          type="button"
          class="rounded-full bg-black p-[1px] ml-3 cursor-pointer"
        >
          <ChevronRight fillColor="#FFFFFF" :size="30" />
        </button>
      </div>

      <button
        @click="openMenu = !openMenu"
        :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <img
            class="rounded-full"
            width="27"
            src="https://yt3.googleusercontent.com/yti/AGOGRCod5TyFy5fPJY_Miol6ybCTLTmPITpNhsXog7uGtA=s88-c-k-c0x00ffffff-no-rj"
          />
          <div class="text-white text-[14px] ml-1.5 font-semibold">Rido R</div>
          <ChevronDown
            v-if="!openMenu"
            @click="openMenu = true"
            fillColor="#FFFFFF"
            :size="25"
          />
          <ChevronUp
            v-else
            @click="openMenu = false"
            fillColor="#FFFFFF"
            :size="25"
          />
        </div>
      </button>

      <span
        v-if="openMenu"
        class="fixed w-[450px] bg-[#282828] shadow-2xl z-50 rounded-md top-[52px] right-[35px]"
      >
        <ul class="text-gray-200 font-semibold text-[16px] p-1 rounded-md">
          <li class="px-4 py-2.5 hover:bg-[#3E3D3D] border-b border-b-zinc-700">
            Profile
          </li>
          <li class="px-4 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>
    </div>

    <div class="flex flex-col">
      <div
        class="h-auto rounded-lg my-2 ml-2 px-6 pt-4 w-[335px] z-50 bg-[#121212]"
      >
        <ul>
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
        </ul>
      </div>
      <div class="h-[300px] rounded-lg ml-2 p-6 w-[335px] z-50 bg-[#121212]">
        <ul>
          <RouterLink to="/library">
            <MenuItem
              class="ml-[1px]"
              :iconSize="23"
              name="Library"
              iconString="library"
              pageUrl="/library"
            />
          </RouterLink>
          <div class="py-3.5">
            <MenuItem
              :iconSize="24"
              name="Create Playlist"
              iconString="playlist"
              pageUrl="/playlist"
            />
          </div>
        </ul>
      </div>
    </div>
  </main>
</template>
