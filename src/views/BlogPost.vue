<template>
  <div class="min-h-screen text-white p-8">
    <h1 class="text-4xl font-bold">📖 {{ post?.title || "Cargando..." }}</h1>

    <p v-if="post?.content" class="text-lg mt-4">{{ post.content }}</p>

    <!-- Mostrar el artículo HTML en un iframe si existe -->
    <iframe v-if="post?.articleUrl" :src="post.articleUrl" class="w-full h-[600px] mt-6 border rounded-lg"></iframe>

    <router-link to="/blog" class="block mt-6">
      <p class="text-red-400 hover:text-yellow-600">⬅ Volver al Blog</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Simulación de base de datos de posts con enlaces a artículos HTML
const postsDB = [
  {
    id: 1,
    title: "Cómo proteger tu negocio de ciberataques",
    content: "Lee el artículo completo sobre ciberseguridad...",
    image: "/src/assets/tripisov_logo.png",
    articleUrl: "/public/articles/article1.html"
  },
  {
    id: 2,
    title: "Tendencias en desarrollo web para 2025",
    content: "Descubre las tecnologías más innovadoras...",
    image: "/src/assets/tripisov_logo.png",
    articleUrl: "/public/articles/article2.html"
  },
  {
    id: 3,
    title: "Diseño gráfico: La clave para destacar en el mercado",
    content: "Exploramos la importancia del branding...",
    image: "/src/assets/tripisov_logo.png",
    articleUrl: "/public/articles/article3.html"
  }
];

const route = useRoute();
const post = ref(null);

onMounted(() => {
  // Buscar el post en la "base de datos"
  post.value = postsDB.find(p => p.id === parseInt(route.params.id)) || null;
});
</script>
