// 该文件用于创建Vuex中最核心的store

import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions--用于响应组件中的动作
const actions = {
    // jiafa(context, value) {
    //     context.commit('JIAFA', value)
    // },
    // jianfa(context, value) {
    //     context.commit('JIANFA', value)
    // },
}

// 准备mutations--用于操作数据
const mutations = {
    JIAFA(state, value) {
        state.sum += value
    },
    JIANFA(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

// 准备state--用于存储数据
const state = {
    sum: 0,
    school: '北京大学',
    subject: '数学',
    personList: [
        { id: '001', name: '武藏小次郎' }
    ]
}


// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})