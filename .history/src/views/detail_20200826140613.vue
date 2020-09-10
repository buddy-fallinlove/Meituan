<template>
  <div>
    <detail1 :name="name"></detail1>
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
      name:'',
      obj:[]
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
  mounted() {
    console.log( this.$route.query)
    this.name = this.$route.query.name
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>