// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 引入vuex
import Vuex from 'vuex'


// 引入store
import store from './store'

// 创建vue的实例对象---vm
new Vue({
  render: h => h(App),
  store,

  
}).$mount('#app')




