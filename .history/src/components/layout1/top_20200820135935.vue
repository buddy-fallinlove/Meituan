<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="box2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
.box {
  background-color: #f7f7f7;
  height: 40px;
  line-height: 40px;
}
.box1 {
  width: 100%;
  height: 40px;
  background: #f8f8f8;
  font-size: 12px;
  color: #999;
}
.box2 {
  height: 40px;
  width: 1190px;
  margin: 0 auto;
}
.box3 {
}
</style>