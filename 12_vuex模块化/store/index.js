/* 该文件用于创建Vuex中最核心的store */
// 引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import Count from './count'
import Person from './person'
// 使用插件
Vue.use(Vuex)

// 创建，导出store
export default new Vuex.Store({
    modules: {
        countAbout: Count,
        personAbout: Person
    }
})