<script setup>
import { ref, toRefs, watchEffect, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import Plus from 'vue-material-design-icons/Plus.vue';

const route = useRoute();

const props = defineProps({
  iconString: String,
  iconSize: Number,
  pageUrl: String,
  name: String,
  playlists: Object,
});

const { iconString, pageUrl, name, iconSize, playlists } = toRefs(props);

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
      <div
        class="flex items-center justify-start cursor-pointer"
        @mouseenter="isHover()"
        @mouseleave="isHover()"
      >
        <img :width="iconSize" :src="`/images/icons/${icon}.png`" alt="Icon" />
        <div
          :class="textIsHover ? 'text-white' : 'text-gray-400'"
          class="font-semibold text-[16px] ml-4 mt-0.5"
        >
          <span :class="route.path == pageUrl ? 'text-white' : ''">{{
            name
          }}</span>
        </div>
      </div>
      <div class="rounded-full p-1.5 hover:bg-zinc-900">
        <Plus fillColor="#b2b2b2" :width="16" />
      </div>
    </div>

    <div class="py-3.5"></div>

    <div
      v-for="playlist in playlists"
      :key="playlist.id"
      class="hover:bg-[#2A2929] rounded-md"
    >
      <RouterLink :to="`/playlist/${playlist.id}`">
        <div class="flex items-center cursor-pointer">
          <img
            class="rounded-sm shadow-2xl"
            :src="playlist.albumCover"
            width="55"
          />
          <div class="ml-3">
            <div class="text-[16px] text-white">
              {{ playlist.name }}
            </div>
            <div class="text-[14px] text-gray-400">
              <div class="flex">
                <span>Playlist</span>
                <div class="flex items-center">
                  <div class="mx-1 mt-1 circle" />
                  <span>{{ playlist.creator }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
