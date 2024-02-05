<script setup>
import CategorySelect from '../components/CategorySelect.vue';
import categories from '../data/categories.json';
</script>
<template>
  <div>
    <div class="py-2 px-6">
      <button
        type="button"
        class="pt-5 pb-7 text-white text-2xl font-semibold hover:underline cursor-pointer"
      >
        Browse All
      </button>
      <div
        class="grid 3xl:grid-cols-7 xl:grid-cols-5 lg-grid-cols-4 md:grid-cols-3 gap-x-4 gap-y-3"
      >
        <div v-for="(category, index) in categories" :key="index">
          <CategorySelect
            :category="category.name"
            :image="`https://picsum.photos/id/${category.imageId}/300/300`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
