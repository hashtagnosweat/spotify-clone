<script setup>
import MobileCategorySelect from '../components/MobileCategorySelect.vue';
</script>
<template>
  <div class="px-3 pt-4 pb-[70px]">
    <button
      type="button"
      class="pb-6 text-white text-md font-semibold hover:underline cursor-pointer"
    >
      Browse All
    </button>
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-2 gap-x-4 gap-y-4">
        <div v-for="index in 10" :key="index">
          <MobileCategorySelect
            category="Podcasts"
            image="https://picsum.photos/id/101/300/300"
          />
        </div>
      </div>
    </div>
  </div>
</template>
