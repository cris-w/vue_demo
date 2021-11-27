<template>
  <div>
    <h3 style="color: blue">Count组件的和为：{{ sum }}</h3>
    <h3 style="color: pink">列表中第一个人名字为：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPersonW">添加一个名字带有W的人</button>
    <button @click="addPerson">添加一个诗人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // 使用 普通的写法演示  不使用 map语法
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonW() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPeronW", personObj);
      this.name = "";
    },
    addPerson() {
      this.$store.dispatch("personAbout/addPeronServer");
    },
  },
};
</script>

<style>
</style>