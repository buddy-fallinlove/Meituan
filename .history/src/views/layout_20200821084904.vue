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
      122
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
</style>