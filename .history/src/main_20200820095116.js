import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from './http'
Vue.config.productionTip = false
    //引入封装的全局方法
import './global/'
import api from './http/api.js'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')