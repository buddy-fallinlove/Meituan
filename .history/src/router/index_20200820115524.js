import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import layout from '../views/layout'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'layout',
        component: layout,
        children: [{
                path: '',
                name: 'home',
                component: home
            }

        ]
    }
    // ,



    // {
    //   path: '/login',
    //   name: 'login',

    //   component: () => import('../components/login/login.vue')
    // },
    // {
    //   path: '/registe',
    //   name: 'registe',

    //   component: () => import('../components/registe/registe.vue')
    // }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//   // let user = sessionStorage.getItem('user')

//   let whitePath = ['/login', '/registe']


//   // document.title = to.meta.title
//   let user = JSON.parse(sessionStorage.getItem('user'))
//   if (whitePath.includes(to.path)) {
//     next()
//   } else {
//     user ? next() : next('/login')
//   }
// })


// if (one) {


//   if (to.path === '/login' || to.path === 'registe') {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }


// } else {
//   if (to.path === '/login' || to.path === 'registe') {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next()
//     }
//   } else {
//     next('/')
//   }
// }







export default router