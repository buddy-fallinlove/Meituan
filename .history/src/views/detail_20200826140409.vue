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
    };
  },
  methods: {},
  mounted() {
    console.log( this.$route.query)
    this.name = this.$route.query.name
    let obj1 = localStorage.getItem("obj")
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>