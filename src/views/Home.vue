<script setup>
import { RouterLink } from 'vue-router';
import ProjectBtn from '../components/YourProjectBtn.vue';
</script>

<template>
  <!-- Primera Sección -->
  <div class="text-white mx-4 md:mx-8 my-8">
    <h1 class="text-2xl md:text-4xl text-center md:text-left">TRIPISOV TECHNOLOGIES:</h1>
    <h2 class="text-lg md:text-2xl text-center md:text-left">
      TECNOLOGÍA ACCESIBLE PARA PODER DIGITALIZAR TU NEGOCIO
    </h2>

    <div class="flex flex-col lg:flex-row p-4 justify-center items-center lg:h-screen gap-6">
      <p class="text-sm md:text-base lg:text-lg text-justify max-w-xl">
        Ante la falta de oportunidades laborales en IT, decidí crear TRIPISOV, una empresa cercana y accesible para ofrecer servicios de informática tanto a particulares
        como a pequeños negocios. Desde reparar un PC hasta crear una tienda online, TRIPISOV está aquí para ayudarte con soluciones informáticas reales y adaptadas a tus 
        necesidades. <br /><br />

        La misión de TRIPISOV es ofrecer servicios informáticos accesibles y de calidad a personas y negocios que buscan soluciones prácticas. 
        Queremos romper con las barreras del acceso a la tecnología y convertirnos en una referencia para quienes necesitan ayuda informática sin complicaciones.
        <br /><br />
        <project-btn></project-btn>
      </p>

      <div class="bg-verde-tripisov rounded-xl flex justify-center items-center p-6 w-full lg:w-auto">
        <img class="w-40 md:w-60 lg:w-72" src="/assets/tripisov_logo.png" alt="Tripisov Logo"/>
      </div>
    </div>
  </div>




  <!-- Sección Sobre Nuestros Servicios -->
  <div class="text-white mx-4 md:mx-8 my-8">
    <h1 class="text-2xl md:text-4xl text-center md:text-left">NUESTROS SERVICIOS:</h1>
    <p class="text-sm md:text-base p-4 text-justify">
      En Tripisov Technologies, nos apasiona impulsar la transformación digital y ofrecer soluciones tecnológicas innovadoras que se adapten a las necesidades de nuestros 
      clientes. Nuestro enfoque combina experiencia, creatividad y la más avanzada tecnología para ayudarte a alcanzar tus metas. Estos son algunos de los servicios que 
      ofrecemos:
    </p>

    <!-- Cartas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 justify-center items-center">
      <div 
        v-for="(servicio, index) in servicios" 
        :key="index" 
        class="bg-azul-tripisov w-full max-w-xs mx-auto rounded-xl overflow-hidden flex flex-col shadow-lg"
      >
        <img class="w-full h-48 object-cover" :src="servicio.img" :alt="servicio.alt">
        <div class="p-4 flex flex-col justify-between flex-grow">
          <h2 class="text-lg font-bold">{{ servicio.titulo }}</h2>
          <p class="text-xs text-gray-200 mb-2">{{ servicio.descripcion }}</p>
          <router-link :to="servicio.link" class="text-blue-300 text-xs underline hover:text-blue-400">Ver más</router-link>
        </div>
      </div>
    </div>

    <!-- Texto con Botón -->
    <div class="bg-amarillo-tripisov rounded-xl p-6 mt-8 text-center">
      <p class="text-black text-sm md:text-base max-w-2xl mx-auto">
        ¿Listo para llevar tu negocio al siguiente nivel? En Tripisov, ofrecemos un abanico completo de soluciones tecnológicas diseñadas para satisfacer tus necesidades. Ya sea que necesites mejorar tu página web, reforzar la seguridad digital u optimizar tus sistemas, tenemos el servicio perfecto para ti. 
      </p>
      <router-link to="/servicios">
        <button class="bg-azul-tripisov hover:bg-verde-tripisov text-white mt-4 font-bold py-2 px-6 rounded">
          Todos los Servicios
        </button>
      </router-link>
    </div>
  </div>



    <!-- Sección Sobre Nuestro Trabajo -->
    <div class="text-white mx-4 md:mx-8 my-8 p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start">
    <!-- Contenedor de imágenes -->
    <div class="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start justify-center gap-4">
      <img class="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover" src="/assets/img/china_feliz.jpg" alt="test">
      <img class="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover" src="/assets/img/handshake.jpg" alt="test">
    </div>

    <!-- Contenedor de texto -->
    <div class="w-full md:w-1/2 text-center md:text-left p-4">
      <h1 class="text-2xl md:text-4xl font-bold">NUESTRO TRABAJO:</h1>
      <p class="text-sm md:text-base p-2">
        En Tripisov Technologies, ayudamos a empresas y profesionales a adaptarse al entorno digital con soluciones tecnológicas personalizadas y eficaces. Con experiencia en consultoría informática y ofreciendo servicios para autónomos, hemos trabajado en proyectos que abarcan desde el desarrollo y mantenimiento de sistemas hasta la protección de datos y la optimización de procesos.
      </p>

      <p class="text-sm md:text-base p-2">
        Nuestro objetivo es claro: facilitar a nuestros clientes el uso de la tecnología para que puedan centrarse en hacer crecer su negocio. Analizamos tus necesidades, identificamos áreas de mejora y proponemos estrategias que maximizan el rendimiento de tus herramientas tecnológicas.
      </p>

      <p class="text-sm md:text-base p-2">
        Cada cliente es único, y por eso adaptamos nuestras soluciones para garantizar resultados que marquen la diferencia. En Tripisov, no solo ofrecemos servicios, sino un compromiso con la innovación y la excelencia en cada proyecto que emprendemos.
      </p>

      <p class="text-sm md:text-base p-2">
        ¿Estás listo para potenciar tu negocio con tecnología de primer nivel? Confía en nuestra experiencia y déjanos ser el aliado tecnológico que necesitas.
      </p>
    </div>
  </div>

  <!-- Sección sobre nuestro Blog -->
  <div class="flex flex-col lg:flex-row text-white mx-4 md:mx-8 my-8 p-4 lg:p-8">

<!-- Contenedor de Texto del Blog -->
<div class="blog-container w-full lg:w-1/2 p-4 lg:p-8">
  <h1 class="text-2xl md:text-4xl font-bold">La innovación tecnológica cada vez va más rápido, ponte al día</h1>
  <p class="text-sm md:text-base p-4">¿Quieres estar al día con las últimas tendencias tecnológicas, consejos prácticos y soluciones innovadoras? En Tripisov, compartimos contenido exclusivo 
    que te ayudará a optimizar tu negocio y aprovechar al máximo la tecnología.</p>
  <p class="text-sm md:text-base p-4">Únete a nuestra comunidad y sé el primero en recibir:</p>
  <ul class="list-disc pl-4 text-sm md:text-base p-4">
    <li>Novedades sobre nuestros servicios y proyectos.</li>
    <li>Guías prácticas para mejorar tu infraestructura tecnológica.</li>
    <li>Consejos para proteger tus sistemas y potenciar tu presencia digital.</li>
  </ul>
  <p class="text-sm md:text-base p-4"><b>¡Es fácil! </b>Suscríbete a nuestro newsletter o sigue nuestro blog y comienza a transformar tu forma de entender la tecnología.</p>
  <button class="bg-verde-tripisov hover:bg-azul-tripisov text-white m-4 font-bold py-2 px-4 rounded">
      <router-link to="/blog">Aprende más sobre Tecnología</router-link>
  </button>
</div>

<!-- Contenedor de Imágenes -->
<div class="w-full lg:w-1/2 flex flex-wrap justify-center items-center gap-4 p-4">
  <img 
    class="p-2 rounded-full w-32 h-32 md:w-40 md:h-40 object-cover" 
    src="/assets/img/dude_doing_things.jpg" 
    alt="Imagen Dude Doing Things"
  />
  <img 
    class="p-2 rounded-full w-32 h-32 md:w-40 md:h-40 object-cover" 
    src="/assets/img/el puño pa rriba.jpg" 
    alt="Imagen El Puño Pa Arriba"
  />
</div>

</div>
  <!--Aqui va la seccion Contacta con Nosotros-->
  <div id="contacto" class="text-white mx-8 my-8 p-8">
    <h1 class="text-6xl mb-8">CONTACTA CON NOSOTROS</h1>
    <div class="flex p-6 flex-col justify-center items-center min-h-[200px]">
      <div class="socials-container flex p-4 text-4xl"><p>Twitter</p><p>@tripisov</p></div>
      <div class="socials-container flex p-4 text-4xl"><p>Twitter</p><p>@tripisov</p></div>
      <div class="socials-container flex p-4 text-4xl"><p>Twitter</p><p>@tripisov</p></div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      servicios: [
        {
          titulo: "Desarrollo Web",
          descripcion: "Transformamos tus ideas en páginas web rápidas, seguras y atractivas.",
          img: "/assets/img/coding_laptop.jpg",
          alt: "imagen desarrollo web",
          link: "/desarrollo-web"
        },
        {
          titulo: "Diseño Gráfico",
          descripcion: "Creamos diseños que capturan la esencia de tu marca y comunican claramente lo que ofreces.",
          img: "/assets/img/diseño grafico.jpg",
          alt: "imagen diseño gráfico",
          link: "/graphic-design"
        },
        {
          titulo: "Ciberseguridad",
          descripcion: "Protegemos tus sistemas y datos sensibles frente a las amenazas cibernéticas.",
          img: "/assets/img/ciberseguridad.jpg",
          alt: "imagen ciberseguridad",
          link: "/ciberseguridad"
        },
        {
          titulo: "Administración de Sistemas",
          descripcion: "Soluciones completas para la administración y soporte de servidores y redes.",
          img: "/assets/img/servidores.jpg",
          alt: "imagen administración de sistemas",
          link: "/administracion-de-sistemas"
        },
        {
          titulo: "Servicios Integrados",
          descripcion: "Desde el desarrollo web hasta la ciberseguridad, te ofrecemos una solución completa.",
          img: "/assets/img/circuitos.jpg",
          alt: "imagen servicios integrados",
          link: "/servicios-integrados"
        }
      ]
    };
  }
};
</script>
