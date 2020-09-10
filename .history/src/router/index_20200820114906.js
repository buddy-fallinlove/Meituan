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
        }]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router