<template>
    <div class="min-h-screen text-white m-4 p-4">
      <h1 class="text-6xl font-bold text-center">📰 Blog de Tripisov</h1>
      <h2 class="text-4xl pb-4 text-center">Mantente al día con lo último en tecnología 🚀</h2>
      <hr class="border-gray-500 my-6">
  
      <!-- Grid para mostrar los artículos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="post in posts" 
          :key="post.id" 
          class="bg-green-800 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform"
          @click="verPost(post.id)"
        >
          <img :src="post.image" alt="Imagen del post" class="w-full h-40 object-cover rounded">
          <h3 class="text-2xl font-semibold mt-4">{{ post.title }}</h3>
          <p class="mt-2 text-gray-300">{{ post.description }}</p>
          <p class="mt-4 text-red-400">Leer más...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  // Lista de posts simulados (esto se puede conectar a una API en el futuro)
  const posts = ref([
    {
      id: 1,
      title: "Cómo proteger tu negocio de ciberataques",
      description: "Descubre las mejores prácticas para proteger tu empresa de amenazas digitales.",
      image: "/src/assets/tripisov_logo.png"
    },
    {
      id: 2,
      title: "Tendencias en desarrollo web para 2024",
      description: "Explora las tecnologías y herramientas más usadas este año.",
      image: "/src/assets/tripisov_logo.png"
    },
    {
      id: 3,
      title: "Diseño gráfico: La clave para destacar en el mercado",
      description: "La importancia del branding y la identidad visual para tu negocio.",
      image: "/src/assets/tripisov_logo.png"
    }
  ]);
  
  // Función para navegar al artículo completo
  const verPost = (id) => {
    router.push(`/blog/${id}`);
  };
  </script>