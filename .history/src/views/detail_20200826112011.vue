<template>
 <div>
<detail1></detail1>
 </div>
</template>

<script>
import detail1 from '../components/details/detail1'
 export default {
   name: '',
   props: {
   },
   components: {
detail1
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted(item) {
console.log(item)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>