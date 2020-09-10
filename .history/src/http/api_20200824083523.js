import service from './index'


export default {
    // 所有的方法必须return
    // 获取定位(1)
    getLocation() {
        return service.get(`/position`)
    },
    // 获取所有省份(2)
    getProvince() {
        return service.get(`/province`)
    },
    // 获取省份所有城市(3)
    // id:省份id
    getCity() {
        return service.get(`/citys/id`)
    },
    //  获取城市具体信息(4)
    // city=城市名
    getCityInfo() {
        return service.get(`/crumbs?city=${city}`)
    },
    //省市关联(5)
    association() {
        return service.get(`/city`)
    },
    // 热门城市(6)
    hotCity() {
        return service.get(`/hotCity`)
    },
    // 全部分类(7)
    allCategories() {
        return service.get(`/menu`)
    },
    // 热门搜索(8)
    // city=城市名
    addCart() {
        return service.get(`/hotPlace?city=${city}`)
    },
    // 搜索建议(9)
    // city=城市名  input=关键词
    searchTop(value, keyword) {
        return service.get(`/searchTop?city=${value}&input=${keyword}`)
    },
    //根据关键词搜索(10)
    // city=城市名  keyword=关键词
    keySearch() {
        return service.get(`/results?city=${city}&keyword=${keyWord}`)
    },
    // 商铺详情(11)
    // keyword=商铺名称  city=城市名
    shopsDetail() {
        return service.post(`/products?keyword=${name}&city=${city}`)
    },
    // 获取全部收获地址(12)
    getAddress() {
        return service.get(`/address/list`)
    },


    // 有格调 (调关键词搜索接口)(13)
    // 对应的tab
    // - 约会聚餐 => 美食
    // - 丽人spa => 丽人
    // - 电影演出 => 电影
    // - 品质出游 => 旅游
    // - 全部 => 景点
    products(keyword, city) {
        return service.get(`/products?keyword=${keyword}&city=${city}`)
    },

    // 登录(14)
    // 参数:
    // - username: 用户名
    // - password: 密码
    login(username, password) {
        return service.post(`/users/login`, {
            username,
            password
        })
    },
    // 注册(15)
    // 参数:
    // - username: 用户名
    // - password: 密码
    // - email: 邮箱
    register(username, password, email) {
        return service.post(`/users/register`, {
            username,
            password,
            email
        })
    },







































































}