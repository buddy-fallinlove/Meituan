<template>
 <div class="m-iselect">
<span class="name">按省份选择:</span>
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
           placeholder="城市">
            <el-option v-for="item1 in citys" :key="item1.id" :label="item1.name" :value="item1.id">
              <div>{{item1.name}}</div>
            </el-option>
          </el-select>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      province:[],
      pvalue:'',
      city:[],
      cvalue:'',
      input:'',
      //全国城市列表
      cities:[]
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.page-changeCity{
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
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
    &:after{
      content: ' ';
      height: 1px;
      width: 100%;
      border-bottom: 1px solid #E5E5E5;
      padding-top: 20px;
    }
  }
}

</style>