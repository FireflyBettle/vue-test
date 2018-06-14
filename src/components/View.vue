<template>
  <div id="app">
    <table width="100%">
      <tr>
        <td colspan="2" style="background-color:darkgoldenrod">
          <router-view name="myHeader"></router-view>
        </td>
      </tr>
      <tr>
        <td width="20%" style="background-color:thistle">
          <router-view name="mySidebar"></router-view>
        </td>
        <td width="80%" style="background-color:aquamarine">
          <router-view name="myDetail"></router-view>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "Views"
    }
</script>

<style scoped>

</style>
