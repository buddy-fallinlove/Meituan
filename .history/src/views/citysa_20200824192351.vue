<template>
  <div class="page-changeCity">
    <div class="zhe">
      <div class="">
        <div class="dv2">
          按省份选择:
          <el-select v-model="value" placeholder="请选择" @change="change" style=" width: 170px;">
            <el-option v-for="item in arr" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </div>
        <div class="dv3">
          <el-select
            v-model="values"
            placeholder="请选择"
            :disabled="!arrs"
            style=" width: 170px;"
            @change="mm"
          >
            <el-option v-for="item1 in arrs" :key="item1.id" :label="item1.name" :value="item1.id"></el-option>
          </el-select>
        </div>
        <div class="dv4">
          直接搜索
          <el-input v-model="input" placeholder="请输入城市中文或拼音"></el-input>
        </div>
      </div>
      <div class="md">
        热门城市:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="dm1">
          <div v-for="(item,index) in arrb " :key="index" class="md2">
            <div>
              <div v-if="item.name ==='市辖区'">{{item.province.slice(0,2)}}</div>
              <div v-else>{{item.name.slice(0,2)}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="modle">最近访问：</div>
      <div class="ss">
        <div>按拼音首字母选择：</div>
        <div v-for="(item,index) in list " :key="index" class="word1">
          <a href>{{item.id}}</a>
        </div>
      </div>
      <div class="">
        <div v-for="(item,index) in this.abc.data.cities" :key="index" class="mm"
         
        >
          <div class="" >{{index}}</div>
          <div class="">
            <div v-for="(item1,index1) in item" :key="index1" class="">
            <div class="mm1">{{item1.name}}</div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import city from "../js/city";
export default {
  name: "",
  props: {},
  components: {
  },
  data() {
    return {
      retrieval: [],
      ll: [],
      cities: [],
      abc: city,
      value: "",
      values: "",
      arr: [],
      arrs: [],
      arrb: [],
      input: "",
      list: [
        {
          id: "A",
        },
        {
          id: "B",
        },
        {
          id: "C",
        },
        {
          id: "D",
        },
        {
          id: "E",
        },
        {
          id: "F",
        },
        {
          id: "G",
        },
        {
          id: "H",
        },
        {
          id: "I",
        },

        {
          id: "J",
        },
        {
          id: "K",
        },
        {
          id: "L",
        },
        {
          id: "M",
        },
        {
          id: "N",
        },
        {
          id: "O",
        },
        {
          id: "P",
        },
        {
          id: "Q",
        },
        {
          id: "R",
        },
        {
          id: "S",
        },
        {
          id: "T",
        },
        {
          id: "U",
        },
        {
          id: "V",
        },
        {
          id: "W",
        },
        {
          id: "X",
        },
        {
          id: "Y",
        },
        {
          id: "Z",
        },
      ],
    };
  },
  methods: {
    getProvince() {
      this.$api
        .getProvince()
        .then((res) => {
          console.log(res);
          this.arr = res.data.province;
          console.log(this.arrs);
        })
        .catch((err) => {});
    },
    change() {
      this.id = this.value;
      console.log(this.id);

      this.$api
        .getCity(this.id)
        .then((res) => {
          console.log(res);
          this.arrs = res.data.city;
          // console.log(this.arr)
        })
        .catch((err) => {});
    },
    mm() {
      this.$router.push("/");
    },

    hotCity() {
      this.$api
        .hotCity()
        .then((res) => {
          console.log(res);
          this.arrb = res.data.hots;
        })
        .catch((err) => {});
    },
  },
  mounted() {
    for (let i in this.abc.data.cities) {
      this.retrieval.push(i);
      let obj = {};
      obj.id = i;
      obj.name = this.abc.data.cities[i];
      this.cities.push(obj);
      //  console.log(obj.id)
      //  console.log(obj.name)
      console.log(this.abc);
    }

    this.getProvince();
    //  this.getCity()
    this.hotCity();
  },
  watch: {},
  computed: {},
};
</script>

<style lang='scss'>
@import "../style/sss11.scss"
</style>