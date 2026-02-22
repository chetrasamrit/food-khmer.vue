<template>
  <Header />
  
  <main class="p-5">
    <router-view />
  </main>

  <Footer /> <!-- add footer here -->
</template>

<script setup lang="ts">
import Header from './components/Home/Header.vue'
import Footer from './components/Home/Footer.vue'
</script>