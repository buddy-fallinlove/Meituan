const router = require('koa-router')()
const rp = require('request-promise')


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// 获取轮播图
router.get('/banner', async ctx => {
  let list = [{
    id: 1,
    img: 'http://p0.meituan.net/codeman/00c8bc1c25fbcc6d0651b29a2057a8c1560658.png'
  }, {
    id: 2,
    img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
  }, {
    id: 3,
    img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
  }, {
    id: 4,
    img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
  }, {
    id: 5,
    img: 'http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg'
  }]
  ctx.body = {
    code: 200,
    msg: '获取成功',
    data: JSON.parse(list)
  }
})

// 获取定位
router.get('/position', async ctx => {
  let position = await rp('http://cp-tools.cn/geo/getPosition')
  if (position) {
    ctx.body = {
      code: 200,
      msg: '定位成功',
      data: position
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '定位失败'
    }
  }
})

// 获取省份
router.get('/province', async ctx => {
  let province = await rp('http://cp-tools.cn/geo/province')
  if (province) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(province)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 获取省份所有城市
router.get('/citys/:id', async ctx => {
  let id = ctx.params.id
  let citys = await rp(`http://cp-tools.cn/geo/province/${id}`)
  console.log(citys);
  if (citys) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(citys)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 获取城市具体信息
router.get('/crumbs', async ctx => {
  let city = ctx.request.query.city
  let res = await rp(`http://cp-tools.cn/categroy/crumbs?city=${encodeURI(city)}`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 省市关联
router.get('/city', async ctx => {
  let res = await rp(`http://cp-tools.cn/geo/city`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 热门城市
router.get('/hotCity', async ctx => {
  let res = await rp(`http://cp-tools.cn/geo/hotCity`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 全部分类
router.get('/menu', async ctx => {
  let res = await rp(`http://cp-tools.cn/geo/menu`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 城市热门搜索
router.get('/hotPlace', async ctx => {
  let city = ctx.request.query.city
  let res = await rp(`http://cp-tools.cn/search/hotPlace?city=${encodeURI(city)}`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 城市搜索建议
router.get('/searchTop', async ctx => {
  let city = encodeURI(ctx.request.query.city)
  let input = encodeURI(ctx.request.query.input)
  let res = await rp(`http://cp-tools.cn/search/top?city=${city}&input=${input}`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 根据关键词搜索
router.get('/results', async ctx => {
  let city = encodeURI(ctx.request.query.city)
  let keyword = encodeURI(ctx.request.query.keyword)
  let res = await rp(`http://cp-tools.cn/search/resultsByKeywords?city=${city}&keyword=${keyword}`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

// 商铺详情
router.get('/products', async ctx => {
  let city = encodeURI(ctx.request.query.city)
  let keyword = encodeURI(ctx.request.query.keyword)
  let res = await rp(`http://cp-tools.cn/search/products?city=${city}&keyword=${keyword}`)
  if (res) {
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: JSON.parse(res)
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '获取失败'
    }
  }
})

module.exports = router
