import service from './index'


export default {
    // 获取定位
    getposition() {
        return service.req('/position')
    },
    // 获取所有省份
    getprovince() {
        return service.req('/province')
    },











































































}