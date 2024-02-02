<script setup>
import { RouterLink } from 'vue-router';

import CogOutline from 'vue-material-design-icons/CogOutline.vue';
import HomeVariantOutline from 'vue-material-design-icons/HomeVariantOutline.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import LibraryShelves from 'vue-material-design-icons/LibraryShelves.vue';
</script>
<template>
  <RouterLink to="/">
    <div class="flex flex-col items-center">
      <HomeVariantOutline fillColor="#FFFFFF" :size="25" />
      <span class="text-white text-[12px]">Home</span>
    </div>
  </RouterLink>
  <RouterLink to="/search">
    <div class="flex flex-col items-center">
      <Magnify fillColor="#FFFFFF" :size="25" />
      <span class="text-white text-[12px]">Search</span>
    </div>
  </RouterLink>
  <RouterLink to="/library">
    <div class="flex flex-col items-center">
      <LibraryShelves fillColor="#FFFFFF" :size="25" />
      <span class="text-white text-[12px]">Your Library</span>
    </div>
  </RouterLink>
</template>
