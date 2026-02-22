<template>
  <nav class="flex flex-col md:flex-row items-center justify-between p-5 bg-gray-100 dark:bg-gray-800">
    <!-- Logo -->
    <div class="mb-4 md:mb-0 flex items-center gap-2">
      <img :src="logo" alt="Logo" class="w-16 h-16 rounded-full" />
      <h1 class="text-xl font-bold">ម្ហូប​ ខ្មែរ</h1>
    </div>

    <!-- Navigation Links -->
    <div class="flex flex-col md:flex-row gap-4 font-semibold text-lg">
      <RouterLink to="/" class="text-indigo-600 hover:underline">ទំព័រដើម</RouterLink>
      <RouterLink to="/about" class="text-indigo-600 hover:underline">ម្ហូប</RouterLink>
      <RouterLink to="/about" class="text-indigo-600 hover:underline">បង្ហែម</RouterLink>
      <RouterLink to="/about" class="text-indigo-600 hover:underline">ទំនាក់ទំនង</RouterLink>
      <RouterLink to="/about" class="text-indigo-600 hover:underline">អំពីយើង</RouterLink>
    </div>
    <div class="flex">
      <div class="flex gap-3">
        <a href="">ខ្មែរ</a>
        <a href="">English</a>
      </div>
      <div class="flex">

        <button @click="toggleDark">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clip-rule="evenodd" />
        </svg>
        </button>
      </div>
    </div>

  </nav>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.jpg' // use Vite alias
</script>