<script setup>
  import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <RouterView></RouterView>
  <h1 class="text-black text-4xl md:text-6xl lg:text-8xl bg-amarillo-tripisov p-3 md:p-5 text-center">
  TRIPISOV Technologies
</h1>
</template>