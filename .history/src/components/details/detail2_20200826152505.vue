<template>
  <div class="box">
    <div class="box1">
      <div class="top">
        <div class="top_item">
          <div class="word" :class="[num===1?'active':'']" @click="icon1">智能排序</div>
          <div>
            <div class="word" :class="[num===2?'active':'']" @click="icon2">
              <div v-if="num===2">
                价格最低
                <img src="../../assets/sort_down.png" class="icon" />
              </div>
            </div>
            <div class="word" :class="[num===5?'active':'']" @click="icon2_1">
              <div v-if="num===5">
                价格最高
                <img src="../../assets/sort_up.png" class="icon" />
              </div>
            </div>
            <div class="word" @click="icon2_2">
              <div v-if="num!==2&&num!==5">
                价格排序
                <img src="../../assets/sort.png" class="icon" />
              </div>
            </div>
          </div>
          <div class="word" :class="[num===3?'active':'']" @click="icon3">人气最高</div>
          <div class="word" :class="[num===4?'active':'']" @click="icon4">评价最高</div>
        </div>
      </div>
      <div class="shopes">
        <div v-for="(item,index) in arr" :key="index" class="shop">
          <img :src="item.photos[0].url" alt class="picture" />
          <div class="section">
            <div>{{item.name}}</div>
            <div class="case" v-if="Array.isArray(item.biz_ext.rating)===true">
              <el-rate v-model="value" disabled></el-rate>
              <div class="font">0分</div>
              <div class="text">{{item.recommend}}人评论</div>
            </div>
            <div class="case" v-else>
                  <el-rate v-model="item.biz_ext.rating" disabled></el-rate>
              <div class="font">{{item.biz_ext.rating}}分</div>
              <div class="text">{{item.recommend}}人评论</div>
            </div>
            <div>{{item.address}}</div>
            <div>{{item.type}}</div>
          </div>
        </div>
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
    return {
      value: 0,
      num: 1,
      keyword: "",
      city: "成都",
      arr: [],
    };
  },
  methods: {
    icon1() {
      this.num = 1;
    },
    icon2() {
      this.num = 5;
    },
    icon2_1() {
      this.num = 2;
    },
    icon2_2() {
      this.num = 2;
    },
    icon3() {
      this.num = 3;
    },
    icon4() {
      this.num = 4;
      JSON.stringify;
    },
    getshop() {
      this.$api
        .shopsDetail({ keyword: this.keyword, city: this.city })
        .then((res) => {
          if (res.code === 200) {
            this.arr = res.data.more;
            res.data.more.map(item => {
                item.biz_ext.rating = Number(item.biz_ext.rating)
            })
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log( this.$route.query)
    this.keyword = this.$route.query.name
    THIS.getshop()
  },
  watch: {},
  computed: {},
};
</script>

<style scoped>
.section {
  padding: 0 20px;
}
.shopes {
  background: white;
  width: 950px;
}
.shop {
  display: flex;
  padding: 20px;
}
.text {
  color: #f60;
  margin: 0 15px;
}
.picture {
  width: 220px;
  height: 125px;
}
.case {
  display: flex;
  font-size: 14px;
}
.box {
  display: flex;
  justify-content: center;
  background: rgb(253, 240, 240);
}
.box1 {
  width: 1190px;
}
.top {
  background: white;

  padding: 20px;
  height: 17px;
  width: 910px;
  border-bottom: 1px solid rgb(150, 150, 150);
}
.top_item {
  width: 500px;
  display: flex;
  justify-content: space-around;
}
.icon {
  width: 15px;
  height: 15px;
}
.word {
  width: 84px;
  display: flex;
  align-items: center;
  color: rgb(120, 120, 120);
}
.active {
  color: black;
}
</style>