<template>
  <ul>
    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
};
</script>

<style>
</style>