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
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-2 gap-x-5 gap-y-5">
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
        <CategorySelect
          category="Podcasts"
          image="https://picsum.photos/id/101/300/300"
        />
      </div>
    </div>
  </div>
</template>
