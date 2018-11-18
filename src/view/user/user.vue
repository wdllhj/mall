<template>
  <div class="hello">
    <h1>欢迎, {{ name }}！ 想要点什么？</h1>
    <router-link to="/user/order">我的订单</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      msg: '个人中心',
      name: 'wendongliang'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
