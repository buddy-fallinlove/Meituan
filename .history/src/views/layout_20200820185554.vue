<template>
  <div>
<el-container>
 
  <!--头部 -->
  <el-header>
 <div>
  <top></top>
  </div>
  </el-header>
<router-view>
<Home></Home>
</router-view>
<!--下面-->
  <el-main>
  <div>
  <buccon></buccon>
  </div>
  </el-main>
</el-container>
  </div>
</template>

<script>
import top from '../components/layout1/top'
import buccon from '../components/layout1/buccon'
import Home from '../views/Home'
export default {
  name: "",
  props: {},
  components: {
    top,
    buccon,
    Home
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>