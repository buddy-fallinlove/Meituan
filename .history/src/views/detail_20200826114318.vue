<template>
  <div>
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
      name:''
    };
  },
  methods: {},
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