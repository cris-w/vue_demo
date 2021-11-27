<template>
  <div class="container">
    <Banner />
    <button>
      <!-- Vue借助router-link 实现路由切换 -->
      <router-link replace active-class="active" to="/about">About</router-link>
    </button>
    <button>
      <router-link replace active-class="active" to="/home">Home</router-link>
    </button>
    <hr />
    <!-- router-view 指定组件呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style scoped>
.active {
  background-color: red;
}
</style>