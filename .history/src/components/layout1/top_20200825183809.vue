<template>
  <div class>
    <div class="box">
      <div class="header-bar">
        <div class="header-bar-position">
          <span class="position-name">
            <img class="location" src="../../assets/location.png" />
            成都
            <a class="change-position" @click="clickindex">切换城市</a>
          </span>
          <span class="neighborhood">
            [&nbsp;
            <a>彭州</a>&nbsp;&nbsp;
            <a>崇州</a>&nbsp;&nbsp;
            <a>新津县</a>&nbsp;]
          </span>
        </div>

        <div class="user-entry">
          <a class="login" @click="logindd">立即登录</a>&nbsp;&nbsp;
          <a @click="register">注册</a>
        </div>

        <nav class="header-bar-nav">
          <ul class="header-nav-first">
            <li class="has-child">
              <a
                href="https://passport.meituan.com/account/unitivelogin?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fwww.meituan.com%252Faccount%252Fuserinfo%252F"
                target="_blank"
              >
                我的美团
                <ul class="header-nav-my_header-nav-second">
                  <li>
                    <a
                      href="https://passport.meituan.com/account/unitivelogin?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fwww.meituan.com%252Forders%252F"
                      target="_blank"
                    >我的订单</a>
                  </li>
                  <li>
                    <a
                      href="https://passport.meituan.com/account/unitivelogin?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fwww.meituan.com%252Fcollections%252F"
                      target="_blank"
                    >我的收藏</a>
                  </li>
                  <li>
                    <a
                      href="https://passport.meituan.com/account/unitivelogin?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fwww.meituan.com%252Fvouchers%252F"
                      target="_blank"
                    >抵用券</a>
                  </li>
                  <li>
                    <a
                      href="https://passport.meituan.com/account/unitivelogin?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fwww.meituan.com%252Faccount%252Fsettings"
                      target="_blank"
                    >账户设置</a>
                  </li>
                </ul>
              </a>
            </li>

            <li class="has-child">
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">手机APP</a>
            </li>

            <li class="has-child">
              <a>
                商家中心
                <ul class="header-nav-merchant_header-nav-second">
                  <li>
                    <a
                      href="https://e.meituan.com/meishi/epassport/login?service=com.sankuai.meishi.fe.ecom&continue=https%3A%2F%2Fe.meituan.com%2Fmeishi%2Fepassport%2Ftoken%3Ftarget%3Dhttps%253A%252F%252Fe.meituan.com%252Fmeishi%252F"
                      target="_blank"
                    >登录商家中心</a>
                  </li>
                  <li>
                    <a
                      href="https://rms.meituan.com/?utm_source=inner&utm_medium=mtpcsjzx"
                      target="_blank"
                    >美团智能收银</a>
                  </li>
                  <li>
                    <a
                      href="https://bizvisualmeishi.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mt_C_my"
                      target="_blank"
                    >我想合作</a>
                  </li>
                  <li>
                    <a href="https://e.meituan.com/mobile/" target="_blank">手机免费开店</a>
                  </li>
                  <li>
                    <a href="https://daili.meituan.com/?comeFrom=mtwebMenu" target="_blank">餐饮代理商招募</a>
                  </li>
                  <li>
                    <a href="https://pc.meituan.com/?activity_code=mtpcdh" target="_blank">商家申请开票</a>
                  </li>
                  <li>
                    <a
                      href="https://paidui.meituan.com/?activity_code=168_00038141"
                      target="_blank"
                    >免费合作美团排队</a>
                  </li>
                </ul>
              </a>
            </li>

            <li class="has-child">
              <a>
                美团规则
                <ul class="header-nav-rules_header-nav-second">
                  <li>
                    <a href="https://rules-center.meituan.com" target="_blank">规则中心</a>
                  </li>
                  <li>
                    <a href="https://rules-center.meituan.com/rules" target="_blank">规则目录</a>
                  </li>
                  <li>
                    <a href="https://rules-center.meituan.com/advices" target="_blank">规则评议院</a>
                  </li>
                </ul>
              </a>
            </li>

            <li class="has-child">
              <a>网站导航</a>
              <div class="header-nav-site_header-nav-second">
                <dl class="header-nav-jiulv_header-nav-third">
                  <dt>酒店旅游</dt>
                  <div class="wwwqqq">
                    <dd>
                      <a href target="_blank">国际机票</a>
                    </dd>
                    <dd>
                      <a href target="_blank">火车票</a>
                    </dd>
                    <dd>
                      <a href target="_blank">榛果民俗</a>
                    </dd>
                    <dd>
                      <a href target="_blank">经济型酒店</a>
                    </dd>
                    <dd>
                      <a href target="_blank">主题酒店</a>
                    </dd>
                    <dd>
                      <a href target="_blank">商务酒店</a>
                    </dd>
                    <dd>
                      <a href target="_blank">公寓</a>
                    </dd>
                    <dd>
                      <a href target="_blank">豪华酒店</a>
                    </dd>
                    <dd>
                      <a href target="_blank">客栈</a>
                    </dd>
                    <dd>
                      <a href target="_blank">青年旅舍</a>
                    </dd>
                    <dd>
                      <a href target="_blank">度假酒店</a>
                    </dd>
                    <dd>
                      <a href target="_blank">别墅</a>
                    </dd>
                    <dd>
                      <a href target="_blank">农家院</a>
                    </dd>
                  </div>
                </dl>
                <dl class="header-nav-food-nav-third">
                  <dt>吃美食</dt>
                  <div class="wwwqqq">
                    <dd>
                      <a href target="_blank">烤鱼</a>
                    </dd>
                    <dd>
                      <a href target="_blank">特色小吃</a>
                    </dd>
                    <dd>
                      <a href target="_blank">烧烤</a>
                    </dd>
                    <dd>
                      <a href target="_blank">自助餐</a>
                    </dd>
                    <dd>
                      <a href target="_blank">火锅</a>
                    </dd>
                    <dd>
                      <a href target="_blank">代金券</a>
                    </dd>
                  </div>
                </dl>
                <dl class="header-nav-movie-nav-third">
                  <dt>看电影</dt>
                  <div class="wwwqqq">
                    <dd>
                      <a href target="_blank">热映电影</a>
                    </dd>
                    <dd>
                      <a href target="_blank">热门影院</a>
                    </dd>
                    <dd>
                      <a href target="_blank">热映电影口碑榜</a>
                    </dd>
                    <dd>
                      <a href target="_blank">最受期待电影</a>
                    </dd>
                    <dd>
                      <a href target="_blank">国内票房榜</a>
                    </dd>
                    <dd>
                      <a href target="_blank">北美票房榜</a>
                    </dd>
                    <dd>
                      <a href target="_blank">电影排行榜</a>
                    </dd>
                  </div>
                </dl>
                <dl class="header-nav-mobile_app-nav-third">
                  <dt>手机应用</dt>
                  <div class="wwwqqq">
                    <dd>
                      <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                        <img class="app-icon" src="../../assets/1(1).png" />
                      </a>
                    </dd>
                    <dd>
                      <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                        <img class="app-icon" src="../../assets/2(1).png" />
                      </a>
                    </dd>
                    <dd>
                      <a href="https://phoenix.meituan.com/app/" target="_blank">
                        <img class="app-icon" src="../../assets/3(1).png" />
                      </a>
                    </dd>
                    <dd>
                      <a href="https://www.dianping.com/app/download" target="_blank">
                        <img class="app-icon" src="../../assets/4.png" />
                      </a>
                    </dd>
                    <dd>
                      <a href="https://maoyan.com/app" target="_blank">
                        <img class="app-icon" src="../../assets/5.png" />
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="box1">
        <div class="box1-saaa">
          <div class="box1-1">
            <img src="../../assets/logo.png" alt style="width:126px; height:46px;" />
          </div>
        </div>
        <el-col :span="15" class="center">
          <div class="wrapper">
            <el-input placeholder="请搜索商家或地点" v-model="value" @input="input"></el-input>
            <button class="el-button el-button--primary">
              <i class="el-icon-search" />
            </button>
            <dl class="searchList" v-if="value != ''">
              <dd v-for="(item,index) in arr" :key="index" @click="clickee(item)">{{ item.name }}</dd>
            </dl>
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      arr: [],
      city:"成都"
    };
  },
  methods: {
    input(e) {
      console.log(e);
      //搜索建议
      this.$api.searchTop(city, e).then((res) => {
        this.arr = res.data.top;
        console.log(this.arr);
      });
    },
    clickindex(){
      // console.log(e)
    this.$router.push('/citysa')
    },
    logindd(){
       this.$router.push('/login')
    },
    register(){
      this.$router.push('/register')
    },
    clickee(item){
      console.log(item)
      let 

    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.boxxx {
  height: 197px;
}
.wwwqqq {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
}
.center {
  flex: 1;
  width: auto;
  .wrapper {
    margin-top: 16px;
    border: 1px solid #FFC300;
    border-radius: 4px;
    width: 552px;
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
    .el-input {
      width: 462px;
    }
    input {
      border: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .el-button {
      width: 88px;
      border: none;
      background: #FFC300;
      font-size: 16px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      vertical-align: -1px;
      i {
        font-weight: bold;
      }
    }
    .hotPlace,
    .searchList {
      position: absolute;
      top: 41px;
      left: 0;
      background: #fff;
      padding: 10px;
      font-size: 12px;
      width: 462px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      border-top: none;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      dt {
        color: #999;
        font-weight: bold;
      }

      dd {
        display: inline-block;
        color: #666;
        margin-right: 10px;
        margin-bottom: 3px;
        margin-top: 5px;
        cursor: pointer;

        &:hover {
          background: #f8f8f8;
          color: #FFC300;
        }
      }

      &.searchList {
        padding: 0;
        margin: 0;
        dd {
          margin: 0;
          padding: 3px 10px;
          display: block;
          line-height: 1.6;
        }
      }
    }
  }
}

body {
  width: 100%;
  min-width: 1280px;
}
.box1-saaa {
  float: left;
  padding-top: 28px;
  padding-right: 60px;
  padding-bottom: 40px;
  font-size: 16px;
  min-width: 220px;
  height: 54px;
  box-sizing: content-box;
  vertical-align: sub;
}
.box {
  width: 1190px;
  margin: 0 auto;
  width: 100%;
  height: 197px;
  background: #ffffff;
  box-shadow: 0px 0px 15px #ccc;
}
.button {
  outline: none;
  width: 14.55%;
  box-sizing: border-box;
  line-height: 100%;
  height: 100%;
  background: #ffc300;
  border: none;
  float: right;
  color: #222222;
  cursor: pointer;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.box1 {
  width: 1190px;
  margin: 0 auto;
  height: 157px;
}
.box1-1 {
  margin-left: 0;
  margin-top: 0;
  display: inline-block;
}
.box2 {
  float: left;
  padding-top: 28px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.box2-1 {
  width: 550px;
  height: 40px;
  background: #fff;
}
.input {
  border: 1px solid #e5e5e5;
  border-right: none;
  border-radius: 4px 0 0 4px;
  line-height: 100%;
  box-sizing: border-box;
  display: inline-block !important;
  padding: 15px;
  font-size: 14px;
  height: 100%;
  background: transparent;
  width: 85.45%;
}
.header-bar {
  background-color: #f7f7f7;
  height: 40px;
  line-height: 40px;
}

.user-entry,
.header-bar-position {
  display: inline;
  font-size: 12px;
}

a {
  text-decoration: none;
  color: rgba(22, 21, 21, 0.432);
  /* font-weight:600; */
}

.header-bar-position {
  margin: 0 25px;
}

.user-entry .login {
  color: coral;
}

.header-bar-nav {
  display: inline;
}

.change-position {
  border: 1px solid rgba(179, 176, 176, 0.555);
  color: rgba(0, 0, 0, 0.61);
}

.position-name {
  color: rgba(0, 0, 0, 0.61);
}

.location {
  width: 13px;
  height: auto;
}

.neighborhood {
  color: rgba(22, 21, 21, 0.432);
}

.header-nav-first {
  display: block;
  float: right;
  text-align: center;
  margin-right: 50px;
  font-size: 12px;
}

.has-child {
  position: relative;
  list-style-type: none;
  display: inline-block;
  padding: 0 10px;
}

.header-nav-my_header-nav-second {
  position: absolute;
  display: none;
  list-style-type: none;
  right: 0;
  padding: 0 10px;
  z-index: 99;
}

.header-nav-merchant_header-nav-second {
  position: absolute;
  display: none;
  list-style-type: none;
  right: 0;
  padding: 0 10px;
  width: 100px;
  z-index: 99;
}

.header-nav-rules_header-nav-second {
  position: absolute;
  display: none;
  list-style-type: none;
  right: 0;
  padding: 0 10px;
  z-index: 99;
}

.header-nav-site_header-nav-second {
  position: absolute;
  display: none;
  list-style-type: none;
  right: 0;
  padding: 0 40px;
  width: 1100px;
  height: 300px;
  z-index: 99;
  margin-bottom: 5px;
}

.has-child:nth-child(1):hover .header-nav-my_header-nav-second {
  display: block;
}

.has-child:nth-child(3):hover .header-nav-merchant_header-nav-second {
  display: block;
}

.has-child:nth-child(4):hover .header-nav-rules_header-nav-second {
  display: block;
}

.has-child:nth-child(5):hover .header-nav-site_header-nav-second {
  display: block;
}

.has-child:not(:nth-child(2)):hover,
.has-child:not(:nth-child(2)):hover ul,
.has-child:not(:nth-child(2)):hover div {
  background-color: rgb(253, 253, 253);
  box-shadow: 0 0 1px rgba(109, 108, 108, 0.432);
}

a:hover {
  color: coral;
  cursor: pointer;
}

.header-nav-jiulv_header-nav-third,
.header-nav-food-nav-third,
.header-nav-movie-nav-third,
.header-nav-mobile_app-nav-third {
  float: left;
  text-align: center;
  margin: 20px;
}

.header-nav-jiulv_header-nav-third {
  width: 250px;
}

.header-nav-jiulv_header-nav-third dd {
  width: 83px;
}

.header-nav-food-nav-third {
  width: 140px;
}

.header-nav-food-nav-third dd {
  width: 70px;
}

.header-nav-movie-nav-third {
  width: 110px;
}

.header-nav-movie-nav-third dd {
  width: 104px;
}

.header-nav-mobile_app-nav-third dt,
.header-nav-jiulv_header-nav-third dt,
.header-nav-food-nav-third dt,
.header-nav-movie-nav-third dt {
  font-size: 14px;
  margin-bottom: 5px;
}

.header-nav-mobile_app-nav-third {
  width: 400px;
}

.app-icon {
  width: 60px;
}
</style>