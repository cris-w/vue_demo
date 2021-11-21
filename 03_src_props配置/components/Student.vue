<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="ageChange">点我年龄加一</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个学生",
      myAge: this.age,
    };
  },
  //简单声明接收
  // props: ["name", "gender", "age"],

  // 以对象的形式接收，可以限制属性的类型。
  /* props: {
    name: String,
    gender: String,
    age: Number,
  }, */

  // 以对象的形式接收，可以限制类型、必要性、默认值
  props: {
    name: {
      type: String, // 类型
      required: true, // 是否为必要的
    },
    gender: {
      type: String,
      default: "男", // 默认值
    },
    age: {
      type: String,
    },
  },
  methods: {
    ageChange() {
      this.myAge++;
    },
  },
};
</script>

<style>
.student {
  background-color: skyblue;
}
</style>