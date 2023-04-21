import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/shared/pages/HomePage.vue'
import AboutPage from '@/shared/pages/AboutPage.vue'
import { characterRoute } from '@/character/router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Public
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage },
        
        
        //Characters

        //characterRoute,

        {
            ...characterRoute,
            path: '/characters'
        },
        // {
        //     path: '/characters',
        //     name: 'characters',
        //     component: () => import('@/character/layout/CharacterLayout.vue')
        // },


        //Default
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
});

//router.addRoute(characterRoute)

export default router;

