<template>
  <div>
    <el-container>
      <!--头部 -->
      <el-header>
        <top></top>
      </el-header>
      <el-main></el-main>
      <!--下面-->
      <el-footer>
        <buccon></buccon>
      </el-footer>
    </el-container>
    <router-view></router-view>
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
    Home,
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