<template>
  <div>
    <h1>当前的和为：{{ sum }}</h1>
    <h1>当前的和放大十倍为：{{ bigSum }}</h1>
    <h3>我在{{ school }}， 学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数为：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="increaseOdd(n)">当前求和为奇数加n</button>
    <button @click="increaseWait(n)">等等再加n</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // （数组写法，计算属性名和 state中的属性名一致才可以使用）
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    // mapMutations会生成对应的方法，方法中会调用commit去联系 mutations（对象写法）
    ...mapMutations("countAbout", { increase: "ADD", decrease: "DECRE" }),

    // mapActions会生成对应的方法,方法调用 dispatch 联系actions（对象写法）
    ...mapActions("countAbout", {
      increaseOdd: "addOdd",
      increaseWait: "addWait",
    }),
  },
};
</script>

<style>
</style>