import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
            },
            {
                path: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemon-id/:id',
                name: 'pokemon-id', 
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: (router) => {
                    const id  = Number(router.params.id);
                    return isNaN(Number(id)) ? {id: 1} : {id:  Number(id)};
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-home' }
            },
        ]
    },
    {
        path: '/:pathNatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
        // redirect: '/home'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router;