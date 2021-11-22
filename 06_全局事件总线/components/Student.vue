<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="sendNameToSchool">把学生名给School兄弟组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Tom",
      gender: "男",
    };
  },
  methods: {
    sendNameToSchool(val) {
      this.$bus.$emit("getName", this.name);
    },
  },
};
</script>

<style scoped>
.student {
  background-color: skyblue;
}
</style>