<template>
 <div>
1111

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
