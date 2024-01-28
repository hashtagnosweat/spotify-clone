<script setup>
import { RouterLink, RouterView } from 'vue-router';
import MenuItem from './components/MenuItem.vue';
import LibraryItem from './components/LibraryItem.vue';
import Navigation from './components/Navigation.vue';

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
</script>

<template>
  <main class="bg-black h-screen">
    <div
      class="hidden lg:flex w-[calc(100%-444px)] my-2 mr-2 h-[60px] rounded-t-lg fixed right-0 z-20 bg-[#101010] items-center justify-between"
    >
      <Navigation />
    </div>

    <div class="hidden lg:flex flex-col">
      <div
        class="h-auto rounded-lg my-2 ml-2 px-6 pt-4 w-[420px] z-50 bg-[#121212]"
      >
        <RouterLink to="/">
          <MenuItem
            class="ml-[1px]"
            :iconSize="23"
            name="Home"
            iconString="home"
            pageUrl="/"
          />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem
            class="ml-[1px]"
            :iconSize="23"
            name="Search"
            iconString="search"
            pageUrl="/search"
          />
        </RouterLink>
      </div>
      <div class="h-80 rounded-lg ml-2 px-6 py-4 w-[420px] z-50 bg-[#121212]">
        <LibraryItem
          class="ml-[1px]"
          :iconSize="23"
          name="Your Library"
          iconString="library"
          pageUrl="/library"
        />
      </div>
    </div>
    <div
      class="hidden lg:block fixed right-0 top-[68px] mr-2 w-[calc(100%-444px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black"
    >
      <div class="mt-[20px]"></div>
      <RouterView />
      <div class="mb-[100px]"></div>
    </div>
  </main>
</template>
