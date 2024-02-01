<script setup>
import { ref, onMounted } from 'vue';

const greeting = ref('');

onMounted(() => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    greeting.value = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    greeting.value = 'Good afternoon';
  } else {
    greeting.value = 'Good evening';
  }
});
</script>
<template>
  <div>
    <p>{{ greeting }}</p>
  </div>
</template>
