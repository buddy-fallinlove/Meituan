<template>
  <div class="box">
    <div class="box1">
      <div class="top">
        <div class="top_1">
          <div class="word1">有格调</div>
          <div class="word2" v-for="(item,index) in arr" :key="index">
            <div @mouseenter="click1(item)" class="title">{{item.title}}</div>
            <div class="trian" v-if="item.flag ===true"></div>
            <div v-else></div>
          </div>
        </div>
      </div>
      <div class="box2">
        <div v-for="(item,index) in arr1" :key="index" class="case">
          <img :src="item.photos[0].url" alt="" class="img1">
          <div class="word3">{{item.name}}</div>
          <div class="word3">{{item.type}}</div>
          <div class="word3">{{item.tag}}</div>
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
      arr1: [],
      arr2: [],
      arr3: [],
      arr: [
        {
          title: "约会聚餐",
          name: "美食",
          flag: true,
        },
        {
          title: "丽人spa",
          name: "丽人",
          flag: false,
        },
        {
          title: "品质出游",
          name: "旅游",
          flag: false,
        },
        {
          title: "全部",
          name: "景点",
          flag: false,
        },
      ],
    };
  },
  methods: {
    click1(e) {
      // console.log(e);
      let name = e.name;
      let title = e.title;
      e.flag = true;
      this.geteat(name);
    },
    geteat(name) {
  // console.log(name);
  this.$api.keySearch({city:"成都",keyword:name}).then(res=>{
           if (res.code === 200) {
            this.arr1 = res.data.pois.slice(1,7 );
            console.log(this.arr1)
          }
          // console.log(res)
  }).catch(err=>{
    console.log(err)
  })
    },
    click() {},
    
    
  },
  mounted() {
  this.geteat(name);

  },
  watch: {},
  computed: {},
};
</script>

<style scoped>
.box {
  background:#ffffff;
}
.box1 {
  width: 1190px;
  border-radius: 15px 15px 0 0;
}
.top {
  height: 44px;
  line-height: 44px;
  background-color: #ffc300;
  background-image: linear-gradient(to right, #ffc300 3%, #ffc300 100%);
  display: flex;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  cursor: pointer;
}
.top_1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
}
.word1 {
  font-size: 22px;
  margin: 10px;
}
.word2 {
  font-size: 16px;
  margin: 10px;
  position: relative;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img1 {
  width: 370px;
  height: 208px;
}
.case {
  margin: 10px;
}
.box2 {
  display: flex;
  flex-wrap: wrap;
}
.word3 {
  width: 350px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
}
.word2:hover .trian {
  visibility: visible;
}
.trian {
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  visibility: hidden;
  border-color: transparent transparent white transparent;
  position: absolute;
  top: 30px;
}
</style>