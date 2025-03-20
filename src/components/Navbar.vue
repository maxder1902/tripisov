<template>
  <nav class="navbar flex items-center justify-between px-8 py-4 bg-white shadow-md">
    <!-- Logo -->
    <div class="logo-container">
      <router-link to="/">
        <img src="/src/assets/tripisov_logo.png" alt="Tripisov Logo" class="h-16 md:h-20" />
      </router-link>
    </div>

    <!-- Botón Menú (Móvil) -->
    <button 
      @click="isOpen = !isOpen"
      class="md:hidden text-gray-700 focus:outline-none"
    >
      <svg v-if="!isOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Menú Desktop -->
    <div class="hidden md:flex gap-6 text-lg">
      <router-link to="/" class="link">Inicio</router-link>
      <router-link to="/blog" class="link">Blog</router-link>
      <router-link to="/servicios" class="link">Nuestros Servicios</router-link>
      <router-link to="/sobre-nosotros" class="link">Sobre Nosotros</router-link>
      <router-link to="/contacto" class="link">Contacto</router-link>
    </div>

    <!-- Menú Móvil (Desplegable) -->
    <div 
      v-if="isOpen"
      class="absolute top-20 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300"
    >
      <div class="flex flex-col items-center gap-4 py-4">
        <router-link to="/" class="link" @click="isOpen = false">Inicio</router-link>
        <router-link to="/blog" class="link" @click="isOpen = false">Blog</router-link>
        <router-link to="/servicios" class="link" @click="isOpen = false">Nuestros Servicios</router-link>
        <router-link to="/sobre-nosotros" class="link" @click="isOpen = false">Sobre Nosotros</router-link>
        <router-link to="/contacto" class="link" @click="isOpen = false">Contacto</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped>

</style>
