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
  }
};
</script>

<style>
.school {
  background-color: pink;
}
</style>