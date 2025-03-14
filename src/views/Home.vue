<script setup>
import { RouterLink } from 'vue-router';
import ProjectBtn from '../components/YourProjectBtn.vue';
</script>

<template>
      <!--Aqui va la primera seccion-->
  <div class="text-white mx-8 my-8">
    <h1 class="text-4xl">TRIPISOV TECHNOLOGIES:</h1>
    <h2 class="text-2xl">TECNOLOGÍA ACCESIBLE PARA PODER DIGITALIZAR TU NEGOCIO</h2>
    <div class="flex p-4 px-8  justify-center items-center h-screen">
      <p>Ante la falta de oportunidades laborales en IT, decidí crear TRIPISOV, una empresa cercana y accesible para ofrecer servicios de informática tanto a particulares
        como a pequeños negocios. Desde reparar un PC hasta crear una tienda online, TRIPISOV está aquí para ayudarte con soluciones informáticas reales y adaptadas a tus 
        necesidades. <br />

        La misión de TRIPISOV es ofrecer servicios informáticos accesibles y de calidad a personas y negocios que buscan soluciones prácticas. 
        Queremos romper con las barreras del acceso a la tecnología y convertirnos en una referencia para quienes necesitan ayuda informática sin complicaciones <br>
        <project-btn></project-btn>
      </p>


      <div class="bg-verde-tripisov mx-6 rounded-xl">
        <img class="p-10" src="/src/assets/tripisov_logo.png" alt="Tripisov Logo" style="width: 300vw; height: auto;"/>
      </div>
    </div>
  </div>

  <!--Aqui va la seccion Sobre Nuestros Servicios-->
  <div class="text-white mx-8 my-8">
    <h1 class="text-4xl">NUESTROS SERVICIOS:</h1>
    <p class="text-m p-4">En Tripisov Technologies, nos apasiona impulsar la transformación digital y ofrecer soluciones tecnológicas innovadoras que se adapten a las necesidades de nuestros 
      clientes. Nuestro enfoque combina experiencia, creatividad y la más avanzada tecnología para ayudarte a alcanzar tus metas. Estos son algunos de los servicios que 
      ofrecemos:
    </p>

    <!--Cartas-->
    <div class="flex flex-wrap p-4 justify-center items-center gap-4">
  <div class="bg-azul-tripisov w-[200px] h-[400px] rounded-xl overflow-hidden flex flex-col shadow-lg">
    <img class="w-full h-1/2 object-cover" src="/src/assets/img/coding_laptop.jpg" alt="imagen desarrollo web">
    <div class="p-4 flex flex-col justify-between h-1/2">
      <h2 class="text-lg font-bold">Desarrollo Web</h2>
      <p class="text-xs text-gray-200 mb-2 line-clamp-3">
        Transformamos tus ideas en páginas web, rápidas, seguras y atractivas. Las páginas lentas o desactualizadas ahuyentan a tus clientes. Creamos soluciones rápidas que destacan tu marca y mejoran la experiencia del usuario.
      </p>
      <router-link to="/desarrollo-web" class="text-blue-300 text-xs underline hover:text-blue-400">Ver más</router-link>
    </div>
  </div>

  <div class="bg-azul-tripisov w-[200px] h-[400px] rounded-xl overflow-hidden flex flex-col shadow-lg">
    <img class="w-full h-1/2 object-cover" src="/src/assets/img/diseño grafico.jpg" alt="imagen diseño gráfico">
    <div class="p-4 flex flex-col justify-between h-1/2">
      <h2 class="text-lg font-bold">Diseño Gráfico</h2>
      <p class="text-xs text-gray-200 mb-2 line-clamp-3">
        Transmitimos tu mensaje de manera efectiva. Creamos diseños que capturan la esencia de tu marca y comunican claramente lo que ofreces. Páginas webs, redes sociales, impresiones, ... te ayudamos a destacar con creatividad y profesionalidad.
      </p>
      <router-link to="/graphic-design" class="text-blue-300 text-xs underline hover:text-blue-400">Ver más</router-link>
    </div>
  </div>

  <div class="bg-azul-tripisov w-[200px] h-[400px] rounded-xl overflow-hidden flex flex-col shadow-lg">
    <img class="w-full h-1/2 object-cover" src="/src/assets/img/ciberseguridad.jpg" alt="imagen ciberseguridad">
    <div class="p-4 flex flex-col justify-between h-1/2">
      <h2 class="text-lg font-bold">Ciberseguridad</h2>
      <p class="text-xs text-gray-200 mb-2 line-clamp-3">
        Protegemos tus sistemas y datos sensibles frente a las amenazas cibernéticas, asegurando que tu información esté siempre a salvo. Con nuestras soluciones de ciberseguridad, te ayudamos a prevenir ataques.
      </p>
      <router-link to="/ciberseguridad" class="text-blue-300 text-xs underline hover:text-blue-400">Ver más</router-link>
    </div>
  </div>

  <div class="bg-azul-tripisov w-[200px] h-[400px] rounded-xl overflow-hidden flex flex-col shadow-lg">
    <img class="w-full h-1/2 object-cover" src="/src/assets/img/servidores.jpg" alt="imagen administración de sistemas">
    <div class="p-4 flex flex-col justify-between h-1/2">
      <h2 class="text-lg font-bold">Administración de Sistemas</h2>
      <p class="text-xs text-gray-200 mb-2 line-clamp-3">
        Ofrecemos soluciones completas para la administración, mantenimiento y soporte de tus servidores, redes y dispositivos. Con nosotros, tu infraestructura tecnológica funcionará de manera eficiente y segura.
      </p>
      <router-link to="/administracion-de-sistemas" class="text-blue-300 text-xs underline hover:text-blue-400">Ver más</router-link>
    </div>
  </div>

  <div class="bg-azul-tripisov w-[200px] h-[400px] rounded-xl overflow-hidden flex flex-col shadow-lg">
    <img class="w-full h-1/2 object-cover" src="/src/assets/img/circuitos.jpg" alt="imagen servicios integrados">
    <div class="p-4 flex flex-col justify-between h-1/2">
      <h2 class="text-lg font-bold">Servicios Integrados</h2>
      <p class="text-xs text-gray-200 mb-2 line-clamp-3">
        Desde el desarrollo web hasta la ciberseguridad, pasando por la administración de sistemas, nuestros servicios se complementan para brindarte una infraestructura digital sólida.
      </p>
      <router-link to="/servicios-integrados" class="text-blue-300 text-xs underline hover:text-blue-400">Ver más</router-link>
    </div>
  </div>
</div>
    <!--texto con boton-->
    <div class="bg-amarillo-tripisov rounded-xl p-4 mt-8">
      <p class="text-black">¿Listo para llevar tu negocio al siguiente nivel? En Tripisov, ofrecemos un abanico completo de soluciones tecnológicas diseñadas para satisfacer tus necesidades. Ya sea que necesites mejorar tu página web, reforzar la seguridad digital u optimizar tus sistemas, tenemos el servicio perfecto para ti. Haz clic en 'Todos los servicios' y descubre cómo podemos ayudarte a alcanzar tus objetivos con soluciones personalizadas.</p>
      <button class="bg-azul-tripisov hover:bg-verde-tripisov text-white m-4 font-bold py-2 px-4 rounded">
          <router-link to="/servicios">Todos los Servicios</router-link>
      </button>
    </div>

  </div>

  <!--Aqui va la seccion Sobre Nuestro Trabajo-->
  <div class="flex h-screen text-white mx-8 my-8 p-8">

  <div class="w-1/2 h-auto object-contain p-4">
    <img class="p-2 rounded-full" src="/src/assets/img/china_feliz.jpg" alt="test">
    <img class="p-2 rounded-full" src="/src/assets/img/handshake.jpg" alt="test">
  </div>


    <div class="work-container p-8">
      <h1 class="text-4xl">NUESTRO TRABAJO:</h1>
      <p class="text-m p-4">En Tripisov Technologies, ayudamos a empresas y profesionales a adaptarse al entorno digital con soluciones tecnológicas personalizadas y eficaces. 
        Con experiencia en consultoría informática y ofreciendo servicios para autónomos, hemos trabajado en proyectos que abarcan desde el desarrollo y mantenimiento de sistemas hasta la protección de datos y 
        la optimización de procesos.
      </p>

        <p class="text-m p-4">Nuestro objetivo es claro: facilitar a nuestros clientes el uso de la tecnología para que puedan centrarse en hacer crecer su negocio. Analizamos tus 
          necesidades, identificamos áreas de mejora y proponemos estrategias que maximizan 
          el rendimiento de tus herramientas tecnológicas.
      </p>

      <p class="text-m p-4">Cada cliente es único, y por eso adaptamos nuestras soluciones para garantizar resultados que marquen la diferencia. En Tripisov, no solo 
        ofrecemos servicios, sino un compromiso con la innovación y la excelencia en cada proyecto que emprendemos.
      </p>

      <p class="text-m p-4">¿Estás listo para potenciar tu negocio con tecnología de primer nivel? Confía en nuestra experiencia y déjanos ser el aliado 
        tecnológico que necesitas.
      </p>

    </div>

  </div>

  <!--Aqui va la seccion sobre nuestro Blog-->
  <div class="flex h-screen text-white mx-8 my-8 p-8">

    <div class="blog-container">
      <h1 class="text-4xl">La innovación tecnológica cada vez va más rapido, ponte al día</h1>
      <p class="p-4">¿Quieres estar al día con las últimas tendencias tecnológicas, consejos prácticos y soluciones innovadoras? En Tripisov, compartimos contenido exclusivo 
        que te ayudará a optimizar tu negocio y aprovechar al máximo la tecnología.</p>
      <p class="p-4">Únete a nuestra comunidad y sé el primero en recibir:</p>
      <ul>
        <li>Novedades sobre nuestros servicios y proyectos.</li>
        <li>Guías prácticas para mejorar tu infraestructura tecnológica.</li>
        <li>Consejos para proteger tus sistemas y potenciar tu presencia digital.</li>
      </ul>
      <p><b>¡Es fácil! </b>Suscríbete a nuestro newsletter o sigue nuestro blog y comienza a transformar tu forma de entender la tecnología.</p>
      <button class="bg-verde-tripisov hover:bg-azul-tripisov text-white m-4 font-bold py-2 px-4 rounded">
          <router-link to="/blog">Aprende más sobre Tecnología</router-link>
      </button>
    </div>

    <div class="w-1/2 h-auto object-contain p-4">
      <img class="p-2 rounded-full" src="/src/assets/img/dude_doing_things.jpg" alt="test">
      <img class="p-2 rounded-full" src="/src/assets/img/el puño pa rriba.jpg" alt="test">
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