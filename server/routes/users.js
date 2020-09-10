const router = require('koa-router')()
const User = require('../model/user')

router.prefix('/users')

// 登录
router.post('/login', async ctx => {
  let {username, password} = ctx.request.body
  let user = await User.findOne({
    username,
    password
  })
  if (user) {
    ctx.body = {
      code: 200,
      msg: '登录成功',
      data: user
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '用户名或密码错误'
    }
  }
})

// 注册
router.post('/register', async ctx => {
  let {username, password, email} = ctx.request.body
  let user = await User.findOne({
    username
  })
  console.log(user)
  if (user) {
    ctx.body = {
      code: 500,
      msg: '用户名已存在'
    }
  } else {
    let newUser = new User({
      username,
      password,
      email
    })
    let res = await newUser.save()
    if (res) {
      ctx.body = {
        code: 200,
        msg: '注册成功'
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '注册失败'
      }
    }
  }
})

module.exports = router
