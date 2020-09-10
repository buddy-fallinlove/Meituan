<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select
      v-model="pvalue"
      placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="城市">
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <nuxt-link to="/">
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    /></nuxt-link>
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
     //监听pvalue值，当省份发生改变的时候，可选城市也要跟着改变（联动）
  watch:{
    pvalue:async function(newPvalue){
      let self=this;
      let {status,data:{city}}=await self.$axios.get(`/geo/province/${newPvalue}`)
      if(status===200){
        self.city=city.map(item=>{
          return {
            value:item.id,
            label:item.name
          }
        })
        self.cvalue=''
      }
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

</style>