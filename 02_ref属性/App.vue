<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "ref的使用",
    };
  },
  methods: {
    showDom() {
      // 用来给元素或子组件注册引用信息(id的替代者)
      console.log(this.$refs.title); // DOM元素
      console.log(this.$refs.btn); // DOM 元素
      console.log(this.$refs.sch); // 组件的实例对象(vc)
    },
  },
};
</script>
