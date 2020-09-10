<template>
 <div>
66666666666666666
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

     }
   },
   methods: {

   },
   mounted() {
    this.$api.getposition().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>
