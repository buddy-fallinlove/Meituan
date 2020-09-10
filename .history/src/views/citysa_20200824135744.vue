<template>
 <div class="page-changeCity">
<!--头部-->
   <el-row>
      <el-col :span="24">
        <lesttop></lesttop>
      </el-col>
    </el-row>
<!--a标签-->
    <el-row>
      <el-col :span="24">
       <catgroy></catgroy>
      </el-col>
    </el-row>
 </div>
</template>

<script>
import lesttop from '../components/caty/lesttop'
import catgroy from '../components/caty/catgroy'
 export default {
   name: '',
   props: {
   },
   components: {
       catgroy,
       lesttop
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