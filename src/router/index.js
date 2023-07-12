// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

import Home from "../components/Home"
import About from "../components/About"

// 创建一个路由器

export default new VueRouter({
    routes: [
        {
            path: '/About',
            component: About
        },
        {
            path: '/Home',
            component: Home
        }
    ]
})