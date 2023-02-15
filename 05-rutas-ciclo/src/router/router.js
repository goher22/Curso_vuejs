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
                name: 'pokemon-about',
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
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "Characteres" */ '@/modules/dbz/pages/Characteres')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "About" */ '@/modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
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


//Guard Global - Sincrono
router.beforeEach((to, from, next)=> {
    const ramdom = Math.random()*100;
    if(ramdom > 50) {
        console.log('autenticado');
        next();
    }else{
        console.log(ramdom, 'bloqueado por el beforeEach Guard')
        next({name: 'pokemon-home'});
    }
});


export default router;