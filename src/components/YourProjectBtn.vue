<template>
  <div>
    <button @click="mostrarModal = true" class="bg-amarillo2-tripisov hover:bg-verde-tripisov text-white m-4 font-bold py-2 px-4 rounded">
      Hablemos de tu Proyecto
    </button>

    <div v-if="mostrarModal" class="fixed inset-0 flex items-center justify-center bg-transparent">
      <div class="bg-black p-6 rounded-lg shadow-lg max-w-md text-center border-4 border-magenta">
        <h2 class="text-xl font-bold text-yellow-400">Transforma tu negocio con la digitalización</h2>
        <p class="mt-2 text-white">Impulsa tu pyme con soluciones digitales personalizadas. Te ayudamos a modernizar tu negocio y aumentar tu presencia en línea.</p>
        
        <table class="mt-4 w-full border-collapse border border-yellow-400">
          <thead>
            <tr class="bg-magenta">
              <th class="border border-yellow-400 px-4 py-2 text-fuchsia-300">Áreas Clave</th>
              <th class="border border-yellow-400 px-4 py-2 text-fuchsia-300">Cómo Te Impulsamos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-yellow-400 px-4 py-2 text-white">Ciberseguridad</td>
              <td class="border border-yellow-400 px-4 py-2 text-white">Protegemos tu información con estrategias avanzadas y protocolos seguros.</td>
            </tr>
            <tr>
              <td class="border border-yellow-400 px-4 py-2 text-white">Diseño Gráfico</td>
              <td class="border border-yellow-400 px-4 py-2 text-white">Creamos diseños atractivos para mejorar tu identidad visual y captar más clientes.</td>
            </tr>
            <tr>
              <td class="border border-yellow-400 px-4 py-2 text-white">Desarrollo Web</td>
              <td class="border border-yellow-400 px-4 py-2 text-white">Desarrollamos sitios web optimizados para mejorar tu visibilidad y conversión.</td>
            </tr>
            <tr>
              <td class="border border-yellow-400 px-4 py-2 text-white">Ofimática</td>
              <td class="border border-yellow-400 px-4 py-2 text-white">Optimizamos tus herramientas digitales para una mayor eficiencia operativa.</td>
            </tr>
          </tbody>
        </table>
        
        <button @click="mostrarModal = false" class="mt-4 bg-fuchsia-600 text-black py-2 px-4 rounded hover:bg-verde-tripisov">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const mostrarModal = ref(false);
    return { mostrarModal };
  }
};
</script>

<style>
/* Puedes agregar estilos adicionales si es necesario */
</style>
