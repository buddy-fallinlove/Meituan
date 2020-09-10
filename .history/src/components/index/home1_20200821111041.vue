<template>
  <div class="box">
    <div class="box1">
      <div class="left">
        <div class="word1">全部分类</div>
        <div class="box_1">
          <div class="word2" v-for="(item,index) in arr" :key="index">
            <div class="case">
              <div class="word3">
              {{item.name}}
              </div>
              <img src="../../assets/箭头.png" class="img1" />
              <div class="case1">
                <div class="word4">
                  <div class="name">{{item.name}}</div>
                  <div class="d-f">
                    <div>更多</div>
                    <img src="../../assets/箭头.png" class="img1" />
                  </div>
                </div>
                <div v-for="(item1,index1) in item.child" :key="index1" class="Name">
                  <div v-for="(item2,index2) in item1.child" :key="index2">
                    <div class="hot">{{item2}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right_top">
          <div class="top1">美团外卖</div>
          <div class="top1">猫眼电影</div>
          <div class="top1">美团酒店</div>
          <div class="top1">民宿/公寓</div>
          <div class="top1">商店入驻</div>
          <div class="top1">美团公益</div>
        </div>
        <div class="top_1">
          <el-carousel trigger="click" height="240px" class="carousel">
            <el-carousel-item v-for="item in list" :key="item.id">
              <img :src="item.img" alt class="picture1" />
            </el-carousel-item>
          </el-carousel>
          <div class="photo1">
          <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="" class="img3">
          </div>
          <div class="login">
            <div class="case2">
              <img
                src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
                alt
                class="picture2"
              />
            </div>
            <div class="word5">HI!你好</div>
            <div class="case2">
              <button class="btn">注册</button>
            </div>
            <div class="case2">
              <button class="btn">立即登录</button>
            </div>
          </div>
        </div>
        <div class="top_2">
          <img
            src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
            alt
            class="picture3"
          />
          <img
            src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
            alt
            class="picture4"
          />
          <div class="photo2">
          <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="" class="img4">
          
          </div>
          <div class="code">
            <div class="code_1">
              <img
                src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                alt
                class="img2"
              />
            </div>
            <div class="font3">美团APP手机版</div>
            <div class="fonts">
              <div class="font1">1元起</div>
              <div class="font2">吃喝玩乐</div>
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
  props: {},
  components: {},
  data() {
    return {
      arr: [],
      list: [
        {
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
          id: "1",
        },
        {
          img:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
          id: "2",
        },
        {
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
          id: "3",
        },
        {
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
          id: "4",
        },
        {
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
          id: "5",
        },
        {
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
          id: "6",
        },
      ],
   allImgList: [
        // {
    //       imgUrl: require("../../assets/1(2)")
    //     },
    //     {
    //       imgUrl: require("../../assets/2(2)")
    //     },
    //     {
    //       imgUrl: require("../../assets/3(2)")
    //     },
    //     {
    //       imgUrl: require("../../assets/4(1)")
    //     },
    //     {
    //       imgUrl: require("../../assets/5(1)")
    //     },
    //     {
    //       imgUrl: require("../../assets/6")
    //     },
    //     {
    //       imgUrl: require("../../assets/7")
    //     },
    //     {
    //       imgUrl: require("../../assets/8")
    //     },
    //     {
    //       imgUrl: require("../../assets/9")
    //     },
    //     {
    //       imgUrl: require("../../assets/10")
    //     },
    //     {
    //       imgUrl: require("../../assets/11")
    //     },
        // {
        //   imgUrl: require("../../assets/img/12.png")
        // },
        // {
        //   imgUrl: require("../../assets/img/13.png")
        // },
        // {
        //   imgUrl: require("../../assets/img/14.png")
        // },
        // {
        //   imgUrl: require("../../assets/img/15.png")
        // },
        // {
        //   imgUrl: require("../../assets/img/16.png")
        // },

      ],

    };
  },
  methods: {
    getbanner() {
      this.$api
        .allCategories()
        .then((res) => {

          this.arr = res.data.menu;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getbanner();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped >
.photo1{
position: relative;
bottom: 10px;
}
.photo2{
  position: relative;
bottom: 20px;
left: 12px;
}
.img3{
  width: 150px;
  height: 240px;
}
.font3{
  display: flex;
  justify-content: center;
  margin-top: 10px;

}
.fonts{
  display: flex;
  justify-content: center;
}
.font1 {
  color: red;
  font-size: 14px;

}
.font2{
  font-size: 14px;
}
.top_2 {
  display: flex;
}
.code_1{
  display: flex;
  justify-content: center;
}
.img2 {
  width: 95px;
  height: 95px;
}
.img4{
 width: 150px;
  height: 165px;
}
.code {
  width: 234px;
  height: 165px;
  border: 1px solid rgb(200, 200, 200);
  margin: 10px;
  position: relative;
  bottom: 30px;
  left: 12px;
}
.btn {
  width: 120px;
  height: 40px;
  border-radius: 30px;
  border: rgb(200, 200, 200) 1px solid;
  cursor: pointer;
}
.carousel {
  width: 550px;
  margin: 10px;
  position: relative;
  bottom: 20px;
}
.word5 {
  display: flex;
  justify-content: center;
}
.case2 {
  display: flex;
  justify-content: center;
  margin: 15px;
}
.login {
  width: 228px;
  height: 238px;
  border: 1px solid rgb(200, 200, 200);
  background: white;
  position: relative;
  bottom: 10px;
  left: 10px;
}
.top_1 {
  width: 958px;
  display: flex;
  justify-content: center;
}
.picture3 {
  width: 270px;
  height: 165px;
  margin: 10px;
  position: relative;
  bottom: 30px;
}
.picture4 {
  width: 270px;
  height: 165px;
  position: relative;
   margin: 1px;
  bottom: 20px;
}
.picture2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: rgb(255, 147, 104) 3px solid;
}
.picture1 {
  width: 550px;
  height: 240px;
}
.top1 {
  font-weight: 600;
  cursor: pointer;
}
.top1:hover {
  color: rgb(255, 147, 104);
}
.right_top {
  display: flex;
  position: relative;
  bottom: 40px;
  justify-content: space-around;
  align-items: center;
}
.right {
  width: 958px;
}
.Name {
  display: flex;
  width: 380px;
  flex-wrap: wrap;
}
.hot {
  margin: 10px;
  color: rgb(200, 200, 200);
}
.word4 {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(200, 200, 200);
}
.name {
  font-size: 20px;
}
.d-f {
  display: flex;
  align-items: center;
}
.word3:hover {
  font-weight: 700;
}
.box_1 {
  position: relative;
}
.case:hover .case1 {
  visibility: visible;
}
.case {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.word3 {
  cursor: pointer;
}
.case1 {
  height: 420px;
  width: 380px;
  background: white;
  margin-top: 7px;
  z-index: 999;
  visibility: hidden;
  position: absolute;
  left: 230px;
  top: -7px;
}
.box {
  z-index: 998;
  width: 1190px;
}
.left {
  width: 230px;
  height: 475px;
  background: white;
  border: 1px solid rgb(253, 240, 240);
  position: relative;
  bottom: 50px;
}
.box1 {
  width: 1190px;
  display: flex;
}
.word1 {
  font-weight: 600;
  font-size: 18px;
  margin: 15px;
}
.word2 {
  font-size: 14px;
  margin: 7px;
}
.word2:hover{
    background: #FFF7EB;
}
.img1 {
  width: 10px;
  height: 10px;
}
</style>