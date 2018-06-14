<template>
    <div>
      <h1>多路由参数</h1>
      <p>User</p>
      <p>uid= {{ uid }}, {{ nationality }}</p>
      <p>$route.params.uid={{ $route.params.uid }}</p>
      <p>$route.params.uid={{ $route.params.nationality }}</p>
    </div>
</template>

<script>
    export default {
      name: "User",
      props: ['uid','nationality']
    }
</script>

<style scoped>

</style>
