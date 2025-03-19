import { createRouter, createWebHistory } from 'vue-router';
import Services from '../views/Services.vue';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';
import Blog from '../views/Blog.vue';
import BlogPost from '../views/BlogPost.vue';
import WebDevService from '../views/WebDevService.vue';
import CibersecurityService from '../views/CibersecurityService.vue';
import GraphicDesignService from '../views/GraphicDesignService.vue';
import IntegratedServices from '../views/IntegratedServices.vue';
import SysadminService from '../views/SysadminService.vue';

const routes = [
    {
        path: '/servicios',
        name: 'Services',
        component: Services,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/sobre-nosotros',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/contacto',
        name: 'ContactUs',
        component: ContactUs,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path:'/blog/:id',
        name: BlogPost,
        component: BlogPost,
        props:true,
    },
    {
        path:'/desarrollo-web',
        name: WebDevService,
        component: WebDevService,
    },
    {
        path:'/graphic-design',
        name: GraphicDesignService,
        component: GraphicDesignService,
    },
    {
        path:'/ciberseguridad',
        name: CibersecurityService,
        component: CibersecurityService,
    },
    {
        path:'/administracion-de-sistemas',
        name: SysadminService,
        component: SysadminService,
    },
    {
        path:'/servicios-integrados',
        name: IntegratedServices,
        component: IntegratedServices,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;