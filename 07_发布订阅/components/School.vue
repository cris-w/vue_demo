<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ addr }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "浙江理工大学",
      addr: "浙江绍兴",
    };
  },
  mounted() {
    // 注意这里的回调函数最好使用箭头函数，或者在 methods 中定义否则 this 是 undefended
    this.pubid = pubsub.subscribe("getName",(name, data) => {
      console.log("有人发布了hello消息，hello消息的回调执行了", data);
    });
  },
  beforeDestroy() {
    pubsub.umsubscribe(pubid);
  },
};
</script>

<style scoped>
.school {
  background-color: pink;
}
</style>