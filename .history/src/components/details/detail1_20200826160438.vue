<template>
  <div class="box">
    <div class="box1">
      <div class="font">{{city}}市 美团 > {{city}}</div>
      <div class="case1">
        <div>
          <div class="line">
            <div class="word1">分类</div>
            <button class="btn">全部</button>
            <div class="line_1">
              <div v-for="(item,index) in obj" :key="index" class="name">
                <div class="word2">{{item.child[0].title}}</div>
                <div v-for="(item1,index1) in item.child" :key="index1">
                  <div class="Name">
                    <div v-for="(item2,index2) in item.child[0].child" :key="index2">
                      <div class="hot">{{item2}}</div>
                    </div>
                  </div>
                </div>
                <img src="../../assets/down.png" class="img1" />
              </div>
            </div>
          </div>
          <div class="line">
            <div class="word1">区域</div>
            <button class="btn">全部</button>
            <div class="line_1">
              <div v-for="(item,index) in arr" :key="index" class="name_1">
                <div class="word2">{{item.type}}</div>
                <div class="chest">
                  <div class="word3">{{item.type}}</div>
                  <div class="case2">
                    <div v-for="(item1,index1) in item.module" :key="index1">
                      <div class="font1">{{item1}}</div>
                    </div>
                  </div>
                </div>
                <img src="../../assets/down.png" class="img1" />
              </div>
            </div>
          </div>
        </div>
        <dd>
          <div id="container">
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
          </div>
        </dd>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    name: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      city: "成都",
      obj: [],
      arr: [],
    };
  },
  methods: {
    getbanner() {
      this.$api
        .allCategories()
        .then((res) => {
          this.obj = res.data.menu;
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getcity() {
      this.$api
        .getCityInfo(this.city)
        .then((res) => {
          this.arr = res.data.areas;
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getbanner();
    this.getcity();
    var map = new AMap.Map("container", {
      center: [116.397428, 39.90923],
      layers: [
        //使用多个图层
        new AMap.TileLayer.Satellite(),
        new AMap.TileLayer.RoadNet(),
      ],
      zooms: [4, 18], //设置地图级别范围
      zoom: 13,
    });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
#container {
  width: 250px;
  height: 250px;
}
.box {
  display: flex;
  justify-content: center;
}
.box1 {
  width: 1190px;
  margin-top: 30px;
}
.case1 {
  width: 1190px;
  margin-bottom: 30px;
  background: white;
  display: flex;
}
.line {
  display: flex;
  justify-content: space-around;
}
.line_1 {
  display: flex;
  flex-wrap: wrap;
  width: 788px;

  border-bottom: 1px solid rgb(202, 200, 200);
}
.line_2 {
  display: flex;
  flex-wrap: wrap;
  width: 788px;

  border-bottom: 1px solid rgb(202, 200, 200);
}
.name {
  display: flex;
  margin: 15px;
  align-items: center;
  position: relative;
}
.name_1 {
  display: flex;
  margin: 15px;
  align-items: center;
  position: relative;
}
.word1 {
  width: 60px;
  margin: 10px;
}
.btn {
  height: 25px;
  width: 50px;
  margin: 10px;
  background: #ffd900;
  border: none;
  color: white;
  border-radius: 15px;
}
.img1 {
  width: 10px;
  height: 10px;
}
.word2 {
  font-size: 14px;
  color: rgb(107, 107, 107);
  cursor: pointer;
}
.chest {
  z-index: 999;
  visibility: hidden;
  width: 510px;
  background: white;
  position: absolute;
  top: 20px;
  left: 0px;
  padding: 19px;
  box-shadow: 0px 2px 2px 0px #c5c3c3;
}
.name_1:hover .chest {
  visibility: visible;
}
.name1 {
  display: flex;
  align-items: center;
}
.font {
  font-size: 14px;
  display: flex;
  margin-bottom: 10px;
}
.word3 {
  color: rgb(150, 150, 150);
}
.font1 {
  font-size: 14px;
  padding: 10px;
}
.case2 {
  display: flex;
  flex-wrap: wrap;
}
.Name {
  display: flex;
  flex-wrap: wrap;

  z-index: 999;
  visibility: hidden;
  width: 485px;
  background: white;
  position: absolute;
  top: 20px;
  left: 0px;
  padding: 19px;
  box-shadow: 0px 2px 2px 0px #c5c3c3;
}
.hot {
  font-size: 14px;
  padding: 10px;
}
.name:hover .Name {
  visibility: visible;
}
</style>