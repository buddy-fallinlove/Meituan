import axios from 'axios'
import qs from 'qs'
// import { Loading, } from 'element-ui'
import store from '../store/index'
// let loading = null


// 判断当前环境是生产环境还是开发环境
// process.env.NODE_ENV的值决定当前环境
// production为生产环境 development为开发环境
const isProduction = process.env.NODE_ENV === 'production'

// 创建axios配置对象
const service = axios.create()

// 接口基础路径
service.defaults.baseURL = isProduction ? 'http://49.233.66.125:5050/v1' : '/api'

// 超时时间
service.defaults.timeout = 10000
    // 请求头类型
    // service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
service.interceptors.request.use(config => {
    if (!store.state.cancelLoad) {
        store.state.loading = true
    }
    // loading = Loading.service({
    //     text: '正在加载中......'
    // })
    let token = localStorage.getItem('adminToken')
        // 每次请求 都在请求头带上token
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
}, err => {
    console.log(err)
    return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(response => {
    setTimeout(() => {
            store.state.loading = false
        }, 500)
        // if (loading) {
        //     loading.close()
        // }
    return response.data
}, err => {
    // if (err.response.status === 401) {
    //     Message.error(err.response.data.msg)
    // }
})

service.req = function(...params) {
    if (params.length === 1) {
        return service.get(params[0])
    }
    if (params.length === 2) {
        return service.post(params[0], qs.stringify(params[1]))
    }
}

export default service