<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import storage from './storage/index.js'
export default {
  name: 'App'
  // mounted() {
  //   storage.clear('a')
  // }
}
</script>

<style lang="scss">
  @import "./assets/scss/reset.scss";
  @import "./assets/scss/button.scss";
</style>
