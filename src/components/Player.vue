<template>
  <div>
    <h1>球员页面</h1>
    <p>{{ detail }}</p>
    <router-link :to="{name:'profile'}">简介</router-link>
    <router-link :to="{name:'stats'}">数据</router-link>
    <router-link :to="profile">简介</router-link>
    <router-link :to="stats">数据</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Player",
    data() {
      return {
        detail: {},
        profile: '',
        stats: '',
      }
    },
    mounted() {
      this.detail = this.getPlayer(this.$route.params.uid)
      this.profile = '/player/' + this.$route.params.uid + '/profile';
      this.stats = '/player/' + this.$route.params.uid + '/stats';
    },
    beforeRouteUpdate(to, from, next) {
      this.detail = this.getPlayer(to.params.uid);
      this.profile = '/player/' + to.params.uid + '/profile';
      this.stats = '/player/' + to.params.uid + '/stats';
      next();
    },
    methods: {
      getPlayer(id) {
        switch (id.toString()) {
          case "1":
            return {uid: 1, name: '库里', point: 26};
          case "2":
            return {uid: 2, name: '哈登', point: 27};
          default:
            return {uid: -1}
        }
      }
    }
  }
</script>

<style scoped>

</style>
