<template>
  <div class="text-white p-8">
    <!-- Título Principal -->
    <h1 class="text-4xl font-bold mb-6">Nuestros Servicios: Impulsamos tu Crecimiento con Tecnología 🚀</h1>

    <!-- Introducción -->
    <div class="mb-8 mb-8 text-lg content-center leading-relaxed flex justify-center">
      <img 
        src="/assets/img/tecnologias-servicios.jpg" 
        alt="Holograma digital futurista" 
        class="w-1/4 h-auto rounded-lg shadow-lg mb-6"
      />
      
  </div>

    <!-- Sección de Servicios -->
    <div class="space-y-12">
      <WebDevService />
      <CibersecurityService />
      <GraphicDesignService />
      <IntegratedServices />
    </div>
  </div>
</template>

<script>
import WebDevService from "../views/WebDevService.vue";
import CibersecurityService from "../views/CibersecurityService.vue";
import GraphicDesignService from "../views/GraphicDesignService.vue";
import IntegratedServices from "../views/IntegratedServices.vue";

export default {
  components: {
    WebDevService,
    CibersecurityService,
    GraphicDesignService,
    IntegratedServices,
  },
};
</script>