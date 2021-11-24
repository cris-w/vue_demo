<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li v-for="(i, index) in listData" :key="index">
        {{ i }}
      </li>
      <img src="../assets/logo.png" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {};
  },
  props: ["listData", "title"],
};
</script>

<style scoped>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>