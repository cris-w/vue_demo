<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">Hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
  transition: 0.5s linear;
}
/* 进入 , 离开*/
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-to, .hello-leave {
  transform: translateX(0);
}
</style>