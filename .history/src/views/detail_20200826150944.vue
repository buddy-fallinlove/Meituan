<template>
  <div>
    <detail1 :name="name"></detail1>
    <detail2 :name="name"></detail2>
  </div>
</template>

<script>
import detail1 from "../components/details/detail1";
import detail2 from "../components/details/detail2"
export default {
  name: "",
  props: {},
  components: {
    detail1,
    detail2
  },
  data() {
    return {
      name:'',
    };
  },
  methods: {

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