<template>
  <div>
    <div class="header-bar">
      <div class="header-bar-position">
        <span class="position-name">
          <img class="location" src="../../assets/location.png">成都
        </span>
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
* {
            margin: 0;
            padding: 0;
        }
        
        body{
            width: 100%;
            min-width: 1280px;
        }
        
        .header-bar {
            background-color: #f7f7f7;
            height: 40px;
            line-height: 40px;
        }

        .user-entry,
        .header-bar-position {
            display: inline;
            font-size: 12px;

        }

        a {
            text-decoration: none;
            color: rgba(22, 21, 21, 0.432);
            /* font-weight:600; */
        }

        .header-bar-position {
            margin: 0 25px;
        }

        .user-entry .login {
            color: coral
        }

        .header-bar-nav {
            display: inline;
            
        }

        .change-position {
            border: 1px solid rgba(179, 176, 176, 0.555);
            color: rgba(0, 0, 0, 0.61)
            
           
        }

        .position-name {
            color: rgba(0, 0, 0, 0.61)
            
        }

        .location {
            width: 20px;
            height: auto;
        }

        .neighborhood {
            color: rgba(22, 21, 21, 0.432);

        }

        .header-nav-first {
            display: block;
            float: right;
            text-align: center;
            margin-right: 50px;
            font-size: 12px;
        }

        .has-child {
            position: relative;
            list-style-type: none;
            display: inline-block;
            padding: 0 10px;
            
        }

        .header-nav-my_header-nav-second {
            position: absolute;
            display: none;
            list-style-type: none;
            right: 0;
            padding: 0 10px;
            z-index: 99;
            
        }

        .header-nav-merchant_header-nav-second {
            position: absolute;
            display: none;
            list-style-type: none;
            right: 0;
            padding: 0 10px;
            width: 100px;
            z-index: 99;

        }

        .header-nav-rules_header-nav-second {
            position: absolute;
            display: none;
            list-style-type: none;
            right: 0;
            padding: 0 10px;
            z-index: 99;

        }

        .header-nav-site_header-nav-second {
            position: absolute;
            display: none;
            list-style-type: none;
            right: 0;
            padding: 0 40px;
            width: 1100px;
            height: 300px;
            z-index: 99;
            margin-bottom: 5px;

        }

        .has-child:nth-child(1):hover .header-nav-my_header-nav-second {
            display: block;
        }

        .has-child:nth-child(3):hover .header-nav-merchant_header-nav-second {
            display: block;

        }

        .has-child:nth-child(4):hover .header-nav-rules_header-nav-second {
            display: block;

        }

        .has-child:nth-child(5):hover .header-nav-site_header-nav-second {
            display: block;
        }

        .has-child:not(:nth-child(2)):hover,
        .has-child:not(:nth-child(2)):hover ul,
        .has-child:not(:nth-child(2)):hover div {
            background-color: white;
            box-shadow: 0 0 2px rgba(22, 21, 21, 0.432);
        }

        a:hover {
            color: coral;
            cursor: pointer;
        }

        .header-nav-jiulv_header-nav-third,
        .header-nav-food-nav-third,
        .header-nav-movie-nav-third,
        .header-nav-mobile_app-nav-third {
            float: left;
            text-align: center;
            margin: 20px;
            
        }

        .header-nav-jiulv_header-nav-third {
            width: 250px;
        }

        .header-nav-jiulv_header-nav-third dd{
            width: 60px;
        }

        .header-nav-food-nav-third {
            width: 140px;
        }
       
        .header-nav-food-nav-third dd{
            width: 48px;
        }

        .header-nav-movie-nav-third {
            width: 110px;
        }
        
        .header-nav-movie-nav-third dd{
            width: 84px;
        }

        .header-nav-mobile_app-nav-third dt,
        .header-nav-jiulv_header-nav-third dt,
        .header-nav-food-nav-third dt,
        .header-nav-movie-nav-third dt
        {
            font-size: 14px;
            margin-bottom: 5px;
        }

        .header-nav-mobile_app-nav-third {
            width: 400px;
        }

        .app-icon{
            width:60px;
        }
</style>