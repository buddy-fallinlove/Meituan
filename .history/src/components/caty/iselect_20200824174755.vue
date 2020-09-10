<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="value" placeholder="省份">
      <el-option v-for="item in arr" :key="item.id" :label="item.name" :value="item.id">
        <div @click="ids(item)">{{item.name}}</div>
      </el-option>
    </el-select>
    <el-select v-model="value1" :disabled="!citys.length" placeholder="城市">
      <el-option v-for="item1 in citys" :key="item1.id" :label="item1.name" :value="item1.id">
        <div>{{item1.name}}</div>
      </el-option>
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import _ from "lodash";
import city from "../../js/city";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      data: {},
      value1: "",
      value: "",
      arr: [],
      citys: [],
      input: "",
      //全国城市列表
      cities: [],
    };
  },
  methods: {
    getproince() {
      this.$api
        .getProvince()
        .then((res) => {
          this.arr = res.data.province;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getcitys(id) {
      this.$api
        .getCity(id)
        .then((res) => {
          this.citys = res.data.city;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ids(e) {
      console.log(e);
      let id = e.id;
      this.getcitys(id);
      this.value1 = "";
    },

  },
  mounted() {
    this.getproince();
    this.data = city.data.cities;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>

  .m-iselect {
    .province {
      cursor: pointer;
      border-radius: 4px;
      margin: 0 10px 0 20px;
    }

    .city {
      cursor: not-allowed;
      border-radius: 4px;
      margin: 0 20px 0 10px;
    }

    .label {
      margin-left: 40px;
    }

    .input {
      width: 220px;
      height: 40px;
      border-radius: 4px;
      margin-left: 10px;
      font-size: 14px;
      color: #666;
      box-sizing: border-box;
    }
  }
  .el-row {
    padding-bottom: 20px;
    &:after {
      content: " ";
      height: 1px;
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      padding-top: 20px;
    }
  }

</style>