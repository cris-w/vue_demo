<template>
  <div>
    <input type="text" v-model="keyWord" />
    <button @click="getUser">点我获取用户</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUser() {
      axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log(response.data.items);
          this.$bus.$emit('getUsers', response.data.items)
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>

<style scoped>
</style>