<template>
    <div class="navbar flex justify-between items-center px-8 py-4 bg-white">
      <!-- Logo -->
      <div class="logo-container">
        <router-link to="/">
          <img src="/src/assets/tripisov_logo.png" alt="Tripisov Logo" class="h-20" />
        </router-link>
      </div>
  
      <!-- Menú -->
      <div class="menu-container flex gap-6 text-lg">
        <router-link to="/" class="link">Inicio</router-link>
        <router-link to="/blog" class="link">Blog</router-link>
        <router-link to="/servicios" class="link">Nuestros Servicios</router-link>
        <router-link to="/sobre-nosotros" class="link">Sobre Nosotros</router-link>
        <router-link to="/contacto" class="link">Contacto</router-link>
      </div>
    </div>
  </template>
  