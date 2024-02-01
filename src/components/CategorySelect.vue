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
    class="contrast-[2] brightness-[0.87] rounded-xl relative overflow-hidden w-[194px] h-[194px]"
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
