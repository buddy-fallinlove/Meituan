<template>
  <div>
    <detail1></detail1>
    <detail2></detail2>
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

    
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>