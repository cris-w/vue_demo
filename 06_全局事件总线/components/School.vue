<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ addr }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "浙江理工大学",
      addr: "浙江绍兴",
    };
  },
  mounted() {
    this.$bus.$on("getName", (data) => {
      console.log("我是School组件，收到了数据", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("getName");
  },
};
</script>

<style scoped>
.school {
  background-color: pink;
}
</style>