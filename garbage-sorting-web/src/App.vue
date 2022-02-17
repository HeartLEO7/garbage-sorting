<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
  // watch: {
  //   $route (to, from) {
  //     console.log(to.path)
  //   }
  // }
}
</script>

<style>
@import "./assets/style/global.less";
#app{
  width:100%;
  height: 100%;
}
</style>
