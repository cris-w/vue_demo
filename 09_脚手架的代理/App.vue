<template>
  <div>
    <button @click="getGoods">点我获取商品信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getGoods() {
      axios.get("http://localhost:8080/api/wx/getGoods").then(
        (response) => {
          console.log("请求成功", response.data.data);
        },
        (error) => {
          console.log("出错了：", error.message);
        }
      );
    },
  },
};
</script>
