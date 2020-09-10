<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iSelect></iSelect>
      </el-col>
    </el-row>
    <!--<el-row>
      <el-col :span="24">
        <hot></hot>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <categroy></categroy>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
import iSelect from '../components/caty/iselect'
import hot from '../components/caty/hot'
import categroy from '../components/caty/categroy'
 export default {
   name: '',
   props: {
   },
   components: {
    iSelect,
    hot,
    categroy
   },
   data () {
     return {

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
}
</style>