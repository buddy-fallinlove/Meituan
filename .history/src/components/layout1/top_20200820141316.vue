<template>
  <div>
    <div class="header-bar">
      <div class="header-bar-position">
        <div class="position-name"></div>
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
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  min-width: 1280px;
}
.header-bar {
  background-color: #f7f7f7;
  height: 40px;
  line-height: 40px;
}

.user-entry,
.header-bar-position {
  display: inline;
  font-size: 12px;
}

.header-bar-position {
  margin: 0 25px;
}
.position-name {
  color: rgba(0, 0, 0, 0.61);
}
</style>