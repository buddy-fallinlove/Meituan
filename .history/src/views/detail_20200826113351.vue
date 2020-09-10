<template>
  <div>
     <el-select v-model="value" placeholder="全部分类" class="el">
            <el-option v-for="item in obj" :key="item.type" :label="item.name" :value="item.type"></el-option>
          </el-select>
    <detail1></detail1>
  </div>
</template>

<script>
import detail1 from "../components/details/detail1";
export default {
  name: "",
  props: {},
  components: {
    detail1,
  },
  data() {
    return {
        obj:[],
        value: "",
    };
  },
  methods: {
      getbanner() {
      this.$api
        .allCategories()
        .then((res) => {
          this.obj = res.data.menu;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>