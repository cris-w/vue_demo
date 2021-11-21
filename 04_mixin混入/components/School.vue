<template>
  <div class="school">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ addr }}</h2>
  </div>
</template>

<script>
import { getName } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "浙江理工大学",
      addr: "浙江绍兴",
    };
  },
  mixins: [getName],
};
</script>

<style>
.school {
  background-color: pink;
}
</style>