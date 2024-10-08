import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../page/LoginPage.vue'
import CodePage from '../page/CodePage.vue'

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/CodePage',
        component: CodePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router