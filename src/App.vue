<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">库里</router-link>
      <router-link to="/player/2">哈登</router-link>
      <router-link to="/view">router-view show</router-link>
      <router-link to="/user/1/China">1</router-link>
      <router-link to="/user/2/American">2</router-link>
      <router-link to="/user/3/Canada">3</router-link>
      <router-link to="/father">子传父</router-link>
      <br>
      <button @click="btnClick(1)">库里</button>
      <button @click="btnClick(2)">哈登</button>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      aadddaa:''
    }
  },
  methods:{
    btnClick (uid){
      // this.$router.push({path:'/player/'+id}),
      this.$router.push({name:'player',params:{uid:uid}})
    }
    // btnClick(id) {
    //   console.log(id);
    //   this.$route.push(
    //   {
    //     path:'/player/'+id
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
