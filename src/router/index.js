import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
let routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/docs',
        name: 'docs',
        component: () => import('@/views/docs.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'notfound', redirect: '/promotion' }
]
const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    next()
})
export default router
