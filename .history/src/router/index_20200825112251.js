import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'layout',
        component: layout,
        children: [{
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: '/citysa',
                name: 'citysa',
                component: () =>
                    import ('../views/citysa.vue')
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router