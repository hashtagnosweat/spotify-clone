<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

let openMenu = ref(false);
</script>

<template>
  <div class="flex items-center ml-6">
    <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
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
    class="bg-black hover:bg-[#282828] rounded-full p-1 mr-6 mt-0.5 cursor-pointer"
  >
    <div class="flex items-center">
      <img
        class="rounded-full"
        width="27"
        src="https://yt3.googleusercontent.com/yti/AGOGRCod5TyFy5fPJY_Miol6ybCTLTmPITpNhsXog7uGtA=s88-c-k-c0x00ffffff-no-rj"
      />
    </div>
  </button>

  <span
    v-if="openMenu"
    class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-md top-[60px] right-[36px] cursor-pointer"
  >
    <ul class="text-gray-200 text-[14px] p-1 rounded-md">
      <li class="px-4 py-2.5 hover:bg-[#3E3D3D] border-b border-b-zinc-700">
        Profile
      </li>
      <li class="px-4 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
    </ul>
  </span>
</template>

<style scoped></style>
