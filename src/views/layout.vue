<template>
  <div>
    <el-container style="background: #F8F8F8;">
      <div>
      <top></top>
      </div>
      <div class="box1">
       <router-view></router-view>
      </div>
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
  el-header{
  height:300px;
  }
  

  
  .box1 {
    margin: 0 auto;
  }
</style>