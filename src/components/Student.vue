<template>
  <div class="student">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
  </div>
</template>

<script>
import { getName } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "Tom",
      gender: "男",
    };
  },
  mixins: [getName]
};
</script>

<style>
.student {
  background-color: skyblue;
}
</style>