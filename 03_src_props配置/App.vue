<template>
  <div>
    <School name="Linux" gender="女" age="18" />
    <!-- 加上 v-bind（:） 就是动态绑定引号内表达式的值，即加上: 为数字，不加为字符串 -->
    <School name="Tom" gender="男" :age="19" />
  </div>
</template>

<script>
import School from "./components/Student.vue";
export default {
  name: "App",
  components: {
    School,
  },
};
</script>
