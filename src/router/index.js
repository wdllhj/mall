import Vue from 'vue'
import Router from 'vue-router'
import NoData from '@/components/404'
import Index from '@/view/index/index'
import Tag from '@/view/tag/tag'
import ShoppingCart from '@/view/shoppingCart/shoppingCart'
import User from '@/view/user/user'
import Order from '@/view/user/order'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: '首页',
        component: Index
    },

    {
        path: '/tag',
        name: '分类',
        component: Tag
    },

    {
        path: '/shopping',
        name: '购物车',
        component: ShoppingCart
    },

    {
        path: '/user/:userid',
        name: '个人中心',
        component: User,
        children: [
            {
                path: 'order',
                component: Order
            } 
        ]
    },

    {
        path: '',
        name: '404, 迷路了',
        component: NoData
    }

    ]
})
