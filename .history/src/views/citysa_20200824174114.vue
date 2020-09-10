<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iSelect></iSelect>
      </el-col>
    </el-row>
    <el-row>
      <!--<el-col :span="24">
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

</style>