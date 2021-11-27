/* 该文件专门用于创建路由器 */
import VueRouter from 'vue-router'
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个router
export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News
                },
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "dtl",
                            path: "detail/:id/:title",
                            component: Detail,

                            // props 的第一种写法，对象,该对象中所有的key- value都会以 props 的形式传给Details组件
                            // props: {a: 1, b: 'hello'}

                            // props 的第二种写法, 布尔值，为真则将路由组件收到的 params 参数以 props 的形式传给Details组件
                            // props: true

                            // props 的第三种写法, 函数，回调函数接收一个 $route,可以获取 params参数 和 query参数，并以 props 形式传给组件
                            props($route) {
                                return { id: $route.params.id, title: $route.params.title }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})