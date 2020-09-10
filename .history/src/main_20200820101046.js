import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from './http'
Vue.config.productionTip = false
    //引入封装的全局方法
import api from './http/api.js'
Vue.prototype.$axios = axios
    //引入api.js
Vue.prototype.$api = api
    // 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')