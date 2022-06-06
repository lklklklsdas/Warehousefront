<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/add">添加数据</router-link> -->
<!--      <router-link to="/table">数据管理</router-link> -->
<!--      <router-link to="/fruit">饼图</router-link> -->
<!--      <router-link to="/bar">柱状图</router-link>-->
<!--    </div>-->
      <router-view/>
  </div>
</template>

<script>

import fruit from "./views/fruit";
import bar from "./views/bar";
import Table from "./views/Table";
import main from "./views/main";
export default {
  name: 'app',
  components: {
    main
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
  margin-top: -10px;
  margin-right: -7px;
}
</style>
