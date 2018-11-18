<template>
    <div class="hello">
    {{ msg }}    
    </div>
</template>
<script>
export default {
    name: 'NoData',
    data () {
        return {
            msg: '404，你他妈迷路了'
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
