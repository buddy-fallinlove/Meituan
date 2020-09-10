<template>
  <div>
<el-container>
  <div>
  <top></top>
  </div>
  <!--头部 -->
   <!-- <el-header>

  </el-header>-->
<router-view></router-view>
<!--下面-->
  <el-main>
  <div>
  
  </div>
  </el-main>
</el-container>
  </div>
</template>

<script>
import top from '../components/layout1/top'
export default {
  name: "",
  props: {},
  components: {
    top,
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