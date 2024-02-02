<script setup>
import MobileCategorySelect from '../components/MobileCategorySelect.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import categories from '../data/categories.json';
</script>
<template>
  <div class="px-3 pt-4 pb-[150px]">
    <button
      type="button"
      class="text-white text-xl font-semibold hover:underline cursor-pointer"
    >
      Search
    </button>

    <div class="relative pt-6 pb-4">
      <Magnify
        class="absolute top-1/2 transform -translate-y-1/3 left-3"
        fillColor="#000000"
        :size="30"
      />
      <input
        class="pl-12 py-2 pr-3 w-full rounded-[3px] border border-gray-300 focus:border-black focus:outline-none focus:ring focus:ring-black placeholder-black font-semibold"
        type="text"
        v-bind="$attrs"
        placeholder="What do you want to listen to?"
      />
    </div>

    <button
      type="button"
      class="pb-6 text-white text-md font-semibold hover:underline cursor-pointer"
    >
      Browse All
    </button>

    <div class="flex items-center justify-center">
      <div class="grid grid-cols-2 gap-x-4 gap-y-4">
        <div v-for="(category, index) in categories" :key="index">
          <MobileCategorySelect
            :category="category.name"
            :image="`https://picsum.photos/id/${category.imageId}/300/300`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
