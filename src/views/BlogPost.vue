<template>
  <div class="min-h-screen text-white p-8">
    <h1 class="text-4xl font-bold">📖 {{ post?.title || "Cargando..." }}</h1>

    <p v-if="post?.content" class="text-lg mt-4">{{ post.content }}</p>

    <!-- Mostrar el artículo HTML en un iframe si existe -->
    <iframe
      v-if="post?.articleUrl"
      :src="post.articleUrl"
      class="w-full h-[600px] mt-6 border rounded-lg"
    ></iframe>

    <router-link to="/blog" class="block mt-6">
      <p class="text-red-400 hover:text-yellow-600">⬅ Volver al Blog</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/posts.json"); // Asegúrate de que esté en /public
    const postsDB = await response.json();

    // Buscar el post en los datos cargados
    post.value = postsDB.find((p) => p.id === parseInt(route.params.id)) || null;
  } catch (error) {
    console.error("Error cargando posts.json:", error);
  }
});
</script>
