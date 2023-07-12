// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

import Home from "../pages/Home"
import About from "../pages/About"
import News from "../pages/News"
// 创建一个路由器

export default new VueRouter({
    routes: [
        {
            path: '/About',
            component: About
        },
        {
            path: '/Home',
            component: Home,
            children: [
                {
                    path: 'News',
                    component: News
                },

            ]
        }
    ]
})