<template>
    <div>
      <h1>人生加法</h1>
      <hr>
      <Son :a="5" :b="15" @add-event="getAddResult"></Son>
      <h3>{{ result }}</h3>
    </div>
</template>
<script>
    import Son from './Son'

    export default {
      name: "Father",
      data(){
        return {
          result:0
        }
      },
      components:{
        Son
      },
      methods:{
        getAddResult(data){
          this.result=data.result;
        }
      }
    }
</script>

<style scoped>

</style>
