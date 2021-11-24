<template>
  <div class="container">
    <Category title="美食" :listData="foods" />
    <Category title="游戏" :listData="games" />
    <Category title="电影" :listData="films" />
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "c f", "c s", "原神"],
      films: ["《斗罗大陆》", "《爱情大陆》", "《斗破苍穹》", "《教父》"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>