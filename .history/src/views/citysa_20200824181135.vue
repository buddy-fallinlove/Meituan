<template>
  <div class="box">
    <div class="box1">
      <div class="top">
        <div class="top_1">
          <div class="word1">按省份选择:</div>
          <el-select v-model="value" placeholder="省份">
            <el-option 
            v-for="item in arr" 
            :key="item.id" 
            :label="item.name"
             :value="item.id">
              <div @click="ids(item)">{{item.name}}</div>
            </el-option>
          </el-select>
          <el-select
           v-model="value1"
           :disabled="!citys.length"
           placeholder="城市">
            <el-option v-for="item1 in citys" :key="item1.id" :label="item1.name" :value="item1.id">
              <div>{{item1.name}}</div>
            </el-option>
          </el-select>
        </div>
        <div class="top_2">
          <div class="word1">直接搜索:</div>
          <input type="text" placeholder="请输入城市中文或拼音" class="ipt" />
        </div>
      </div>
      <div class="top2">
        <div class="top2_1">
          <div class="word1">热门城市：</div>
          <div v-for="(item,index) in hot " :key="index">
            <div v-if="item.name ==='市辖区'">{{item.province}}</div>
            <div v-else>{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="top3">
        <div class="top3_1">
          <div class="word1">最近访问：</div>
        </div>
      </div>
      <div class="importance">
        <div class="importance_1">
          <div class="word1">按拼音首字母选择：</div>
          <div v-for="(item,index) in list " :key="index">
            <div>{{item.id}}</div>
          </div>
        </div>
        <div class="importance_2">
        <span>A</span>
        <div v-for="(item,index) in data.A" :key="index">
          <div>{{item.name}}</div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import city from '../js/city'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      data:{},
      value1: "",
      value: "",
      arr: [],
      citys: [],
      hot: [],
      list: [
        {
          id: 'A',
        },
        {
          id: 'B',
        },
        {
          id: 'C',
        },
        {
          id: 'D',
        },
        {
          id: 'E',
        },
        {
          id: 'F',
        },
        {
          id: 'G',
        },
        {
          id: 'H',
        },
        {
          id: 'I',
        },

        {
          id: 'J',
        },
        {
          id: 'K',
        },
        {
          id: 'L',
        },
        {
          id: 'M',
        },
        {
          id: 'N',
        },
        {
          id: 'O',
        },
        {
          id: 'P',
        },
        {
          id: 'Q',
        },
        {
          id: 'R',
        },
        {
          id: 'S',
        },
        {
          id: 'T',
        },
        {
          id: 'U',
        },
        {
          id: 'V',
        },
        {
          id: 'W',
        },
        {
          id: 'X',
        },
        {
          id: 'Y',
        },
        {
          id: 'Z',
        },
      ],
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
    gethot() {
      this.$api
        .hotCity()
        .then((res) => {
          this.hot = res.data.hots;
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
    this.gethot();
    this.data = city.data.cities
  },
  watch: {},
  computed: {},
};
</script>

<style scoped >
.box {
  background: rgb(253, 240, 240);
  margin-top: 20px;
}
.box1 {
  width: 1190px;
}
.top {
  padding-top: 20px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(200, 200, 200);
  background: white;
}
.word1 {
  font-size: 18px;
}
.ipt {
  height: 30px;
}
.top_1 {
  width: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top_2 {
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top2_1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  position: relative;
  right: 120px;
}
.top2 {
  background: white;
  height: 70px;
  padding-top: 20px;

  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(200, 200, 200);
}
.top3 {
  background: white;
  height: 70px;
  padding-top: 20px;
  border-bottom: 1px solid rgb(200, 200, 200);
}
.top3_1 {
  position: relative;
  left: 80px;
}
.importance {
  background: white;
  padding-top: 20px;
}
.importance_1 {
  position: relative;
  left: 65px;
  display: flex;
  justify-content: space-around;
  width: 1050px;
}
.importance_2{
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 1050px;
}
</style>