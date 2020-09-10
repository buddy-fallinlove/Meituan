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
      <!--<div class="box2">
        <div v-for="(item,index) in arr1" :key="index" class="case">
          <img :src="item.photos[0].url" alt="" class="img1">
          <div class="word3">{{item.name}}</div>
          <div class="word3">{{item.type}}</div>
          <div class="word3">{{item.tag}}</div>
        </div>
      </div>-->
       <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
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
  console.log(name);
  this.$api.keySearch({city:"成都",keyword:name}).then(res=>{
           if (res.code === 200) {
            this.arr1 = res.data.pois.slice(1,7 );
            console.log(this.arr1)
          }
          console.log(res)
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
  background:#FFFFFF;
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
 .ibody {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    width: 100%;
    padding: 11px 10px 10px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

    >li {
      width: 33.3%;
      height: 314px;
      padding: 10px;
      box-sizing: border-box;
      float: left;
      background: #fff;
      transition: background-color .5s;
      height: 314px;

      .el-card {
        width: 100%;
        height: 100%;
        border: none;

        img {
          max-width: 100%;
          width: 100%;
          height: 208px;
          margin-bottom: 11px;
          cursor: pointer;
        }

        .el-card__body {
          .cbody {
            list-style: none;

            .title {
              font-size: 16px;
              color: #222;
              height: 22px;
              line-height: 22px;
              margin-bottom: 8px;
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
            }

            .pos {
              font-size: 12px;

              span {
                height: 18px;
                line-height: 18px;
                text-align: center;
                border: 1px solid #d8d8d8;
                border-radius: 2px;
                margin-right: 10px;
                margin-bottom: 5px;
                padding: 0 3px;
              }
            }

            .price {
              height: 27px;
              overflow: hidden;
              margin-bottom: 10px;
              font-size: 14px;
              color: #BE9E4D;
              font-weight: 500;

              em {
                font-size: 22px;
                color: #BE9E4D;
                margin-right: 6px;
                letter-spacing: -.8px;
                cursor: pointer;
                font-style: normal;
              }

              span {
                font-size: 12px;
                letter-spacing: -.6px;
              }
            }
          }
        }
      }

      &:hover {
        background: #F4F4F4;
        transition: background-color .5s;
        border-radius: 4px;
      }
    }
  }
</style>