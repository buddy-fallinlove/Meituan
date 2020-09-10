<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo" />
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">
          <i>{{error}}</i>
        </h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input v-model="username" prefix-icon="profile" />
        <el-input v-model="password" prefix-icon="password" type="password" />
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button class="btn-login" type="success" size="mini" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      error: "",
      checked: "",
      username: "",
      password: "",
    };
  },
  methods: {
      login(){
        if(this.username ==="" || this.password === ""){
          this.$message.error("账号和密码不能为空");
        }else{
          this.$api.login(this.username,this.password)
          then(res=>{
            console.log(res)
            if(res.code===200){
              this.$message({

              })
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      }
      
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
@import "../style/index.scss";
</style>