<script setup>
import CategorySelect from '../components/CategorySelect.vue';
</script>
<template>
  <div class="px-3 pt-4 pb-[70px]">
    <button
      type="button"
      class="pb-6 text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Browse All
    </button>
    <div class="flex items-center justify-evenly">
      <div class="grid grid-cols-2 gap-x-5 gap-y-4">
        <div v-for="index in 10" :key="index">
          <CategorySelect
            category="Podcasts"
            height="124"
            width="170"
            image="https://picsum.photos/id/101/300/300"
          />
        </div>
      </div>
    </div>
  </div>
</template>
