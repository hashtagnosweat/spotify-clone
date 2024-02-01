<script setup>
import { defineProps, toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  image: String,
  title: String,
  subTitle: String,
});

const { image, title, subTitle } = toRefs(props);
</script>

<template>
  <RouterLink to="/">
    <div
      class="bg-[#171717] p-4 rounded-md m-2 hover:bg-[#252525] cursor-pointer"
    >
      <img class="rounded-md" :src="image" alt="" />
      <div class="text-white pt-4 font-semibold text-[17px]">
        {{ title }}
      </div>
      <div class="text-[#A7A7A7] pt-1 pb-3 text-[14px]">{{ subTitle }}</div>
    </div>
  </RouterLink>
</template>
