<template>
    <div class="hello">
        <h1>欢迎, {{ name }}！ 想要点什么？</h1>

        <el-button type="info" @click='showOrder'>我的订单</el-button>
        <router-link :to="{ name: 'tag', params: { tagid: '3434' } }">router我的订单</router-link>
        <el-button-group>
            <el-button @click="prevPage" type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button @click="nextPage" type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>

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
    },

    methods: {
        showOrder () {

            let self = this
            console.log(this)
            self.$router.push({ path: '/user/'+ self.$route.params.userid +'/order', query: { pst: 'home' }})
        },

        prevPage () {
            this.$router.go(-1)
        },

        nextPage () {
            this.$router.go(1)
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
