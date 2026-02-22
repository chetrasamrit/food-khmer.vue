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
  </nav>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.jpg' // use Vite alias
</script>