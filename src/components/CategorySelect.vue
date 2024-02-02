<script setup>
import { ref, toRefs } from 'vue';
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';
let randColor = ref('');
randColor.value = uniqolor.random();

const props = defineProps({
  category: String,
  image: String,
  height: String,
  width: String,
});
const { category, image, height, width } = toRefs(props);
</script>
<template>
  <div
    v-if="randColor.color"
    :style="`background-color: ${randColor.color}; width: ${width}px; height: ${height}px;`"
    class="contrast-[2] brightness-[0.87] rounded-md relative overflow-hidden w-[203px] h-[203px]"
  >
    <div class="text-white pt-3 pl-3 font-semibold text-[23px]">
      {{ category }}
    </div>
    <img
      class="absolute contrast-[0.55] -right-3.5 bottom-0 max-w-[90px] rotate-[20deg]"
      :src="image || ''"
      alt=""
    />
  </div>
</template>
