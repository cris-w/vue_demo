/* 该文件用于创建Vuex中最核心的store */
// 引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备 actions--用于响应组件中的动作
const actions = {
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 1000);
    }
}
// 准备 mutations--用于操作数据（state）
const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    DECRE(state, value) {
        state.sum -= value;
    }
}
// 准备 state--用于存储数据
const state = {
    sum: 0,
    school: "浙江理工",
    subject: "vue"
}
// 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建，导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})