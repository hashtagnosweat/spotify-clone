<script setup>
import { ref, onMounted } from 'vue';
import HomeCard from '../components/HomeCard.vue';
</script>

<template>
  <div class="py-2 px-6">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Your top mixes
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/30/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/42/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/50/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/60/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/70/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
    </div>
  </div>
  <div class="py-2 px-6">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Your top mixes
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/30/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/42/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/50/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/60/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
      <HomeCard
        :key="index"
        image="https://picsum.photos/id/70/300/300"
        title="Title is here"
        subTitle="Subtitle is here"
      />
    </div>
  </div>
</template>
