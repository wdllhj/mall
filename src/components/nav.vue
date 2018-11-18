<template>
    <div id="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/tag">分类</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/shopping">购物车</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/user">我的</router-link></el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'Nav',

    data () {
        return {
            activeIndex: '1'
        }
    },

    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

