<template>
  <div>
    <el-container>
      <el-header>
      <div>
      <top></top>
      </div>
      </el-header>
      <el-main>
      <div>
       <router-view></router-view>
      </div>
      </el-main>
      <el-footer>
        <div>
        <buccon></buccon>
        </div>
      </el-footer>
    </el-container>
   
  </div>
</template>

<script>
import top from "../components/layout1/top";
import buccon from "../components/layout1/buccon";

export default {
  name: "",
  props: {},
  components: {
    top,
    buccon,
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
  .el-header, .el-footer {
    
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>