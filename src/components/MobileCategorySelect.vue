<script setup>
import { ref, toRefs } from 'vue';
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';
let randColor = ref('');
randColor.value = uniqolor.random();

const props = defineProps({
  category: String,
  image: String,
});
const { category, image } = toRefs(props);
</script>
<template>
  <div
    v-if="randColor.color"
    :style="`background-color: ${randColor.color};`"
    class="contrast-[2] brightness-[0.87] rounded-md relative overflow-hidden w-[155px] h-[100px]"
  >
    <div class="text-white pt-3 pl-3 font-semibold text-[18px]">
      {{ category }}
    </div>
    <img
      class="absolute contrast-[0.55] -right-1.5 bottom-0 max-w-[60px] rounded-md rotate-[20deg]"
      :src="image || ''"
      alt=""
    />
  </div>
</template>
