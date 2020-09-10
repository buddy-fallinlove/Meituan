<template>
  <div>
    <div class="bodyer">
      <div class="header">
        <div>
          <div class="bt1" @mouseenter="xianshi1">全部</div>

          <div class="bt-box" v-if="active===1">
            <div v-for="(item,index) in jd" :key="index" class="sm-box">
              <img :src="item.photos[0].url" alt />
              <div class="title1">{{item.type}}</div>
              <div class="title2">{{item.name}}</div>
              <div class="title3">{{item.address}}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="bt" @mouseenter="xianshi2">约会聚餐</div>
          <div class="bt-box" v-if="active===2">
            <div v-for="(item,index) in ms" :key="index" class="sm-box">
              <img :src="item.photos[0].url" alt />
              <div class="title1">{{item.type}}</div>
              <div class="title2">{{item.name}}</div>
              <div class="title3">{{item.address}}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="bt" @mouseenter="xianshi3">丽人spa</div>
          <div class="bt-box" v-if="active===3">
            <div v-for="(item,index) in lr" :key="index" class="sm-box">
              <img :src="item.photos[0].url" alt />
              <div class="title1">{{item.type}}</div>
              <div class="title2">{{item.name}}</div>
              <div class="title3">{{item.address}}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="bt" @mouseenter="xianshi4">电影演出</div>
          <div class="bt-box" v-if="active===4">
            <div v-for="(item,index) in dy" :key="index" class="sm-box">
              <img :src="item.photos[0].url" alt />
              <div class="title1">{{item.type}}</div>
              <div class="title2">{{item.name}}</div>
              <div class="title3">{{item.address}}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="bt" @mouseenter="xianshi5">品质旅游</div>
          <div class="bt-box" v-if="active===5">
            <div v-for="(item,index) in ly" :key="index" class="sm-box">
              <img :src="item.photos[0].url" alt />
              <div class="title1">{{item.type}}</div>
              <div class="title2">{{item.name}}</div>
              <div class="title3">{{item.address}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    ms: {
      type: Array
    },
    lr: {
      type: Array
    },
    dy: {
      type: Array
    },
    ly: {
      type: Array
    },
    jd: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      active: 1
    };
  },
  methods: {
    xianshi1() {
      this.active = 1;
    },
    xianshi2() {
      this.active = 2;
    },
    xianshi3() {
      this.active = 3;
    },
    xianshi4() {
      this.active = 4;
    },
    xianshi5() {
      this.active = 5;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.sm-box {
  text-align: center;
  width: 300px;
  height: 300px;

  img {
    width: 300px;
    height: 200px;
    margin-top: 20px;
  }
  .title1 {
    color: black;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title2 {
    color: gray;
    font-size: 12px;
    line-height: 20px;
    font-weight: normal;
  }
  .title3 {
    color: gray;
    font-size: 12px;
    line-height: 20px;
    font-weight: normal;
  }
}

.sm-box:hover {
  cursor: pointer;
}
.bodyer {
  width: 960px;
  margin: 0 auto;
  height: 660px;
}
.header {
  display: flex;
  width: 100%;
  line-height: 50px;
  color: white;
  font-weight: 700;
  background-color: #f3be47;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.bt {
  width: 100px;
  text-align: center;
  font-weight: normal;
}
.bt:hover {
  cursor: pointer;
  color: red;
  font-weight: 700;

}
.bt1:hover {
      cursor: pointer;
  color: red;
 
}
.bt1{
     width: 100px;
  text-align: center;
  font-size: 24px;

}

.bt-box {
  width: 958px;
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  left: 153px;
  border: 1px solid #cccccc;
  background-color: white;
  position: absolute;
  justify-content: space-around;
}
.tran {
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  visibility: hidden;
  border-color: transparent transparent white transparent;
}
</style>