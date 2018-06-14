<template>
  <div>
    <button @click="add">加吧</button>
  </div>
</template>

<script>
    export default {
      name: "SonToFarther",
      props:['a','b'],
      methods:{
        add(){
          let value=0;
          value=this.a+this.b;
          this.$emit('add-event',{result:value})
        }
      }
    }
</script>

<style scoped>

</style>
