import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/', 
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    {
        path: '/:id',
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
        props: (router) => {
            const id  = Number(router.params.id);
            return isNaN(Number(id)) ? {id: 1} : {id:  Number(id)};
        } 
    },  
    {
        path: '/:pathNatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router;