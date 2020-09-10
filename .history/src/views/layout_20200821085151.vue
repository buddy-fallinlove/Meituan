<template>
  <div>
    <el-container>
      <el-header>
      <div class="box">
      <top></top>
      </div>
      </el-header>
      <el-main>
      <div>
      <Home></Home>
      </div>
      </el-main>
      <el-footer>
        <div>
          <buccon></buccon>
        </div>
      </el-footer>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
import top from "../components/layout1/top";
import buccon from "../components/layout1/buccon";
import Home from "../views/Home"
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
.box{
  height: 197px;
}
</style>