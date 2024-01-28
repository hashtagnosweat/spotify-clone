<script setup>
import { ref, toRefs, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';

import Plus from 'vue-material-design-icons/Plus.vue';

const route = useRoute();

const props = defineProps({
  iconString: String,
  iconSize: Number,
  pageUrl: String,
  name: String,
});

const { iconString, pageUrl, name, iconSize } = toRefs(props);

let icon = ref(null);
let textIsHover = ref(false);

watchEffect(() => {
  if (route.path == pageUrl.value) {
    icon.value = iconString.value + '-active';
    textIsHover.value = true;
  } else {
    icon.value = iconString.value + '-inactive';
    textIsHover.value = false;
  }
});

const isHover = () => {
  if (icon.value === iconString.value + '-active') return;

  if (icon.value === iconString.value + '-inactive') {
    icon.value = iconString.value + '-inactive-hover';
    textIsHover.value = true;
  } else {
    icon.value = iconString.value + '-inactive';
    textIsHover.value = false;
  }
};
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <RouterLink to="/library">
        <div
          class="flex items-center justify-start cursor-pointer"
          @mouseenter="isHover()"
          @mouseleave="isHover()"
        >
          <img
            :width="iconSize"
            :src="`/images/icons/${icon}.png`"
            alt="Icon"
          />
          <div
            :class="textIsHover ? 'text-white' : 'text-gray-400'"
            class="font-semibold text-[16px] ml-4 mt-0.5"
          >
            <span :class="route.path == pageUrl ? 'text-white' : ''">{{
              name
            }}</span>
          </div>
        </div>
      </RouterLink>
      <div class="rounded-full p-1.5 hover:bg-zinc-900">
        <Plus fillColor="#b2b2b2" :width="16" />
      </div>
    </div>

    <div class="py-3.5"></div>

    <div class="font-semibold text-gray-300 hover:text-white">
      My Playlist #1
    </div>
    <div class="font-semibold text-gray-300 hover:text-white">
      My Playlist #1
    </div>
    <div class="font-semibold text-gray-300 hover:text-white">
      My Playlist #1
    </div>
    <div class="font-semibold text-gray-300 hover:text-white">
      My Playlist #1
    </div>
  </div>
</template>
