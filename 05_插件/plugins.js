export default {
    install(Vue) {
        // 这里的Vue就是Vue的构造函数，可以通过这个 Vue定义过滤器，混入，全局指令，以及通过prototype添加事例方法。
        console.log(Vue);
    }
}